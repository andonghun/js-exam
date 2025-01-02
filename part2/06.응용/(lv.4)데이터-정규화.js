/**
 * Q: 데이터 정규화 (Normalize)
 *
 * - 리스트 데이터 상태 관리를 할 때, 객체를 ID 기반으로 관리하기 위해 “정규화” 과정을 수행하곤 합니다.
 * - `normalizeData` 함수를 작성하세요.
 *   - 입력: [{ id: 1, name: "A" }, { id: 2, name: "B" }, ... ] 형태의 배열
 *   - 출력: {
 *       byId: {
 *         1: { id: 1, name: "A" },
 *         2: { id: 2, name: "B" },
 *         ...
 *       },
 *       allIds: [1, 2, ...]
 *     }
 * - ID 값은 항상 고유하다고 가정합니다.
 *
 * 예)
 *   normalizeData([{ id:1, name:"A" }, { id:2, name:"B" }])
 *   => {
 *        byId: { '1': { id:1, name:"A" }, '2': { id:2, name:"B" } },
 *        allIds: [1, 2]
 *      }
 *
 * @param {
 *  { id: number, name: string }[]
 * } data
 * @returns {Object}
 */

// TODO: normalizeData 함수를 작성하세요.
export function normalizeData(data) {
  // TODO
}
