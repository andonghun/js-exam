/**
 * Q127. 데이터 변환 파이프라인
 *
 * - transformData 함수를 작성하세요.
 * - 주어진 데이터를 일련의 과정을 거쳐 변환하는 파이프라인을 구현합니다.
 *
 * 요구사항:
 * 1. 숫자 배열을 받아서 다음 과정을 순서대로 처리
 *   - 짝수만 필터링
 *   - 각 숫자를 제곱
 *   - 합계가 특정 값(threshold) 이하인 수만 선택
 *   - 내림차순 정렬
 * 2. 모든 과정은 메서드 체이닝으로 구현 (예: arr.filter().map().filter().sort())
 * 3. 원본 배열을 변경하지 않음
 *
 * 예시:
 * const numbers = [1, 2, 3, 4, 5, 6];
 * transformData(numbers, 40) => [36, 16, 4]
 * // 설명:
 * // 1. 짝수 필터링: [2, 4, 6]
 * // 2. 제곱: [4, 16, 36]
 * // 3. 40 이하 필터링: [4, 16, 36]
 * // 4. 내림차순 정렬: [36, 16, 4]
 *
 * @param {number[]} arr - 입력 배열
 * @param {number} threshold - 합계 임계값
 * @returns {number[]} 변환된 배열
 */

export function transformData(arr, threshold) {
  // 여기에 코드를 작성하세요.
}
