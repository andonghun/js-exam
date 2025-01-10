/**
 * Q: 복잡한 객체 필터링
 *
 * - `filterComplexData` 함수를 작성하세요.
 * - 이 함수는 아래와 같은 형태의 복잡한 데이터 배열을 입력으로 받습니다.
 *   [
 *     {
 *       id: 1,
 *       tags: ["React", "JavaScript"],
 *       info: { likes: 100, active: true },
 *     },
 *     {
 *       id: 2,
 *       tags: ["Node.js", "TypeScript"],
 *       info: { likes: 50, active: false },
 *     },
 *     ...
 *   ]
 * - 두 번째 파라미터로 조건 객체를 받고, 해당 조건을 만족하는 데이터만 필터링해서 반환하세요.
 *   예: { tags: "JavaScript", "active": true }
 *   => tags 배열에 "JavaScript"를 포함하고, active가 true인 요소만 반환
 * - 조건 객체에서 "." 문법(예: active)은 객체의 깊은 프로퍼티를 의미합니다.
 *
 * @param {
 *  {
 *   id: number,
 *   tags: string[],
 *   info: {
 *   likes: number,
 *   active: boolean
 *   }
 * }} data
 * @param {Object} conditions
 * @returns {Array}
 */

// TODO: filterComplexData 함수를 작성하세요.
function filterComplexData() {}

// export를 수정하지 마세요.
export { filterComplexData };
