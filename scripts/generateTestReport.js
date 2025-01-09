import dotenv from "dotenv";
import { Octokit } from "@octokit/rest";
import fs from "fs";
import path from "path";

dotenv.config();

// GitHub API 토큰이 없으면 에러 메시지 출력
if (!process.env.GITHUB_TOKEN) {
  console.error("Error: GITHUB_TOKEN is not set in .env file");
  process.exit(1);
}

// 저장소 정보가 없으면 에러 메시지 출력
if (!process.env.GITHUB_OWNER || !process.env.GITHUB_REPO) {
  console.error("Error: GITHUB_OWNER or GITHUB_REPO is not set in .env file");
  process.exit(1);
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const getTestResults = async (owner, repo, branch = "main") => {
  try {
    const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path: "test-results.json",
      ref: branch,
    });

    const content = Buffer.from(response.data.content, "base64").toString();
    return JSON.parse(content);
  } catch (error) {
    console.error(
      `Error fetching test results for ${owner}/${repo}: ${error.message}`
    );
    return null;
  }
};

const calculateUserTestResults = (results) => {
  return results.map((result) => {
    const { user, testResults } = result;

    if (!testResults || !testResults.testResults) {
      return {
        user: user.login,
        avatarUrl: user.avatar_url,
        githubUrl: user.html_url,
        stats: {
          passedTests: 0,
          totalTests: 0,
          percentage: "0%",
        },
        lastUpdate: result.repository.updated_at,
      };
    }

    const totalTests = testResults.numTotalTests;
    const passedTests = testResults.numPassedTests;

    return {
      user: user.login,
      avatarUrl: user.avatar_url,
      githubUrl: user.html_url,
      stats: {
        passedTests,
        totalTests,
        percentage: ((passedTests / totalTests) * 100).toFixed(2) + "%",
      },
      lastUpdate: result.repository.updated_at,
    };
  });
};

const calculateTestDetails = (results) => {
  const testDetails = new Map();

  results.forEach((result) => {
    const { user, testResults } = result;
    if (!testResults?.testResults) return;

    testResults.testResults.forEach((suite) => {
      suite.assertionResults.forEach((assertion) => {
        const testName = assertion.fullName;
        if (!testDetails.has(testName)) {
          testDetails.set(testName, {
            name: testName,
            passed: [],
            failed: [],
          });
        }

        const detail = testDetails.get(testName);
        if (assertion.status === "passed") {
          detail.passed.push(user.login);
        } else {
          detail.failed.push(user.login);
        }
      });
    });
  });

  return Array.from(testDetails.values()).map((detail) => ({
    ...detail,
    passRate:
      (
        (detail.passed.length / (detail.passed.length + detail.failed.length)) *
        100
      ).toFixed(2) + "%",
  }));
};

const getForks = async () => {
  try {
    const response = await octokit.rest.repos.listForks({
      owner: process.env.GITHUB_OWNER,
      repo: process.env.GITHUB_REPO,
    });

    const forks = response.data;
    const results = [];

    for (const fork of forks) {
      const testResults = await getTestResults(fork.owner.login, fork.name);

      results.push({
        user: {
          login: fork.owner.login,
          id: fork.owner.id,
          avatar_url: fork.owner.avatar_url,
          html_url: fork.owner.html_url,
        },
        repository: {
          name: fork.name,
          html_url: fork.html_url,
          created_at: fork.created_at,
          updated_at: fork.updated_at,
        },
        testResults,
      });
    }

    const report = {
      timestamp: new Date().toISOString(),
      userResults: calculateUserTestResults(results),
      testDetails: calculateTestDetails(results),
      summary: {
        totalUsers: results.length,
        totalTests: results[0]?.testResults?.numTotalTests || 0,
      },
    };

    const reportsDir = path.join(process.cwd(), "reports");
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir);
    }

    const dateFileName = `test-statistics-${
      new Date().toISOString().split("T")[0]
    }.json`;
    const dateFilePath = path.join(reportsDir, dateFileName);

    const currentFilePath = path.join(reportsDir, "current-statistics.json");

    fs.writeFileSync(dateFilePath, JSON.stringify(report, null, 2));
    fs.writeFileSync(currentFilePath, JSON.stringify(report, null, 2));

    console.log(
      `Reports have been saved to:\n- ${dateFilePath}\n- ${currentFilePath}`
    );
    return report;
  } catch (error) {
    console.error("Error fetching forks:", error.message);
    throw error;
  }
};

getForks();
