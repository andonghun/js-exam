/**
 * Q8.6: await/async로 fetchUsers 함수 사용하기
 *
 * - getUsers 함수를 작성하여 fetchUsers 함수를 사용하세요.
 * - then 이 아닌 async/await 문법을 사용하여 사용하세요.
 * - getUsers 함수는 fetchUsers 함수를 사용하여 사용자 목록을 받아온 뒤, 사용자 목록을 그대로 반환합니다.
 *
 * @returns {Promise<{id:number, name:string}[]>}
 */

// fetchUsers 함수를 수정하지 마세요.
function fetchUsers() {
  return new Promise((resolve) => {
    const mockData = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    resolve(mockData);
  });
}

// TODO: getUsers 함수를 작성하세요.
function getUsers() {}

// export를 수정하지 마세요.
export { getUsers };
