/**
 * Q8.4: getValueThenDouble 함수 (Promise then 체이닝)
 *
 * - getValueThenDouble() -> 내부에서 returnFive()에서 then을 사용하여 resolve된 값을 2배한 값을 resolve하는 Promise를 반환하세요.
 *
 * @returns {Promise<number>}
 */

// returnFive를 수정하지 마세요.
function returnFive() {
  return Promise.resolve(5);
}

// TODO: getValueThenDouble 함수를 작성하세요.
function getValueThenDouble() {}

// export를 수정하지 마세요.
export { getValueThenDouble };
