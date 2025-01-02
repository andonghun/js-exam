/**
 * Q8.7: safeLogin(id, pw) (async/await + try/catch)
 *
 * - loginRequest 함수를 사용하여 id와 pw를 입력받아 로그인을 시도합니다.
 * - loginRequest 함수는 id가 "admin"이고 pw가 "1234"인 경우 "ok"를 반환하고, 그렇지 않은 경우 "fail"을 반환합니다.
 * - try/catch 문을 사용하여, loginRequest 함수가 에러를 반환하는 경우 "error"를 반환합니다.
 * - safeLogin 함수도 파라미터로 id와 pw를 받아, loginRequest 함수를 호출합니다.
 * - 단, loginRequest 함수는 비동기로 작성되어 있으므로 async/await 문법을 사용하여 작성하세요.
 *
 * @param {string} id
 * @param {string} pw
 * @returns {Promise<string>}
 */

// import를 수정하지 마세요.
import { loginRequest } from "./(lv.2)로그인-확인-함수";

// TODO: safeLogin 함수를 작성하세요.
export function safeLogin() {}

// export를 수정하지 마세요.
export { safeLogin };
