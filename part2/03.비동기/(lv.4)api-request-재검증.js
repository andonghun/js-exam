/**
 * Q15: 인증 토큰 갱신 로직
 *
 * - apiRequest(endpoint): 현재 토큰이 "expired"이면 refreshToken() 후 다시 요청
 * - refreshToken(): 비동기로 새로운 토큰 "newToken" 획득 시뮬레이션 (setTimeout 등)
 *
 * 전역변수 currentToken = "valid" | "expired"
 */

let currentToken = "expired";

async function refreshToken() {
  return new Promise.resolve("newToken");
}

async function fetch(endpoint, token) {
  return new Promise.resolve(
    `fetched data from ${endpoint} with token ${token}`
  );
}

async function apiRequest(endpoint) {
  // TODO: 현재 토큰이 "expired"이면 refreshToken() 후 다시 요청
}

// export 를 수정하지 마세요.
export { currentToken, fetch, refreshToken, apiRequest };
