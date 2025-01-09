/**
 * Q: 비동기 데이터 병합
 *
 * - `asyncDataMerger` 함수를 작성하세요.
 * - 이 함수는 여러 개의 비동기 함수를 인자로 받습니다. 각 비동기 함수는 배열 형태의 데이터를 반환합니다.
 * - 모든 비동기 함수를 병렬로 호출하여, 결과 배열들을 'id' 값 기준으로 병합 후 반환하세요.
 * - 만약 같은 'id' 값을 가진 객체가 여러 개라면 속성값을 덮어쓰되, 나중에 도착한 비동기의 데이터를 우선 순위로 적용하세요.
 * - 예)
 *   함수 A가 [ { id:1, name:'Alice'}, { id:2, age:20 } ]
 *   함수 B가 [ { id:1, age:25 }, { id:3, gender:'F'} ]
 *   => 최종 병합 결과: [
 *         { id:1, name:'Alice', age:25 },
 *         { id:2, age:20 },
 *         { id:3, gender:'F'}
 *      ]
 * - 단, 최종 배열의 순서는 'id' 오름차순으로 정렬합니다.
 *
 * @param  {Function[]} asyncFunctions
 * @returns {Promise<Array>}
 */

// TODO: asyncDataMerger 함수를 작성하세요.
async function asyncDataMerger(...asyncFunctions) {
  // TODO
}

// export를 수정하지 마세요.
export { asyncDataMerger };
