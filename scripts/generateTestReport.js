import { Octokit } from "@octokit/rest";

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

    // Base64로 인코딩된 내용을 디코드
    const content = Buffer.from(response.data.content, "base64").toString();
    return JSON.parse(content);
  } catch (error) {
    console.error(
      `Error fetching test results for ${owner}/${repo}: ${error.message}`
    );
    return null;
  }
};

const getForks = async () => {
  try {
    const response = await octokit.rest.repos.listForks({
      owner: process.env.GITHUB_OWNER,
      repo: process.env.GITHUB_REPO,
    });

    const forks = response.data;
    const results = [];

    // 각 fork에 대해 test results를 가져옴
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

    return results;
  } catch (error) {
    console.error("Error fetching forks:", error.message);
    throw error;
  }
};

getForks();
