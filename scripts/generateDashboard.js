import path from "path";
import fs from "fs";
import open from "open";

const generateDashboard = () => {
  const statsPath = path.join(
    process.cwd(),
    "reports",
    "current-statistics.json"
  );
  const stats = JSON.parse(fs.readFileSync(statsPath, "utf8"));

  const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Test Results Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
            color: #333;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: white;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f8f9fa;
            font-weight: bold;
        }
        tr:hover {
            background-color: #f5f5f5;
        }
        .user-section {
            margin-bottom: 40px;
        }
        .user-card {
            display: flex;
            align-items: center;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            margin: 10px 0;
        }
        .user-card img {
            width: 50px;
            height: 50px;
            border-radius: 25px;
            margin-right: 15px;
        }
        .success-rate {
            font-weight: bold;
        }
        .test-name {
            max-width: 500px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>문제 은행 테스트 결과</h1>
        <p>Last updated: ${new Date(stats.timestamp).toLocaleString()}</p>
        
        

        <h2>문제별 테스트 결과</h2>
        <table>
            <thead>
                <tr>
                    <th>문제</th>
                    <th>통과</th>
                    <th>실패</th>
                    <th>통과률</th>
                </tr>
            </thead>
            <tbody>
                ${stats.testDetails
                  .map(
                    (test) => `
                    <tr>
                        <td class="test-name">${test.name}</td>
                        <td>${test.passed.length}</td>
                        <td>${test.failed.length}</td>
                        <td class="success-rate">${test.passRate}</td>
                    </tr>
                `
                  )
                  .join("")}
            </tbody>
        </table>

        <div class="user-section">
            <h2>유저별 테스트 결과</h2>
            ${stats.userResults
              .map(
                (user) => `
                <div class="user-card">
                    <img src="${user.avatarUrl}" alt="${user.user}">
                    <div>
                        <h3><a href="${user.githubUrl}" target="_blank">${
                  user.user
                }</a></h3>
                        <p>Passed: ${user.stats.passedTests}/${
                  user.stats.totalTests
                } (${user.stats.percentage})</p>
                        <p>Last Update: ${new Date(
                          user.lastUpdate
                        ).toLocaleString()}</p>
                    </div>
                </div>
            `
              )
              .join("")}
        </div>

        <div>
            <h2>요약</h2>
            <p>총 유저: ${stats.summary.totalUsers}</p>
            <p>총 문제: ${stats.summary.totalTests}</p>
        </div>
    </div>
</body>
</html>
  `;

  const dashboardPath = path.join(process.cwd(), "reports", "dashboard.html");
  fs.writeFileSync(dashboardPath, html);

  open(dashboardPath);
};

generateDashboard();
