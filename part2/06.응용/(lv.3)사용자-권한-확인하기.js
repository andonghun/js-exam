/**
 * Q: 사용자 권한 계층 문제
 *
 * - user.role 은 "admin" > "manager" > "user" 순으로 높음
 * - checkAccess(user, requiredRole): user가 requiredRole 이상의 권한을 가졌으면 true, 아니면 false
 *
 * @param {{name:string, role:string}} user
 * @param {string} requiredRole
 * @returns {boolean}
 */

function checkAccess(user, requiredRole) {
  // TODO
}

// export 를 수정하지 마세요.
export { checkAccess };
