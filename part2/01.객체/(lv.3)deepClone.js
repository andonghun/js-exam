/**
 * Q125. 중첩 객체의 깊은 복사 구현하기
 *
 * - deepClone 함수를 작성하세요.
 * - Object.assign이나 spread 연산자는 중첩된 객체의 경우 얕은 복사만 수행합니다.
 * - 재귀를 사용해 중첩된 객체/배열을 포함한 깊은 복사 함수를 구현하세요.
 * - Date, RegExp, Function 타입 등의 특수한 객체도 올바르게 복사되어야 합니다.
 *
 * 예시:
 * const obj = {
 *   a: 1,
 *   b: { x: 2, y: 3 },
 *   c: [4, 5, { z: 6 }],
 *   d: new Date(),
 *   e: /hello/g
 * };
 *
 * const clone = deepClone(obj);
 * obj.b.x = 10;
 * console.log(clone.b.x); // 2 (원본 객체의 변경에 영향받지 않음)
 *
 * @param {*} obj - 복사할 객체
 * @returns {*} 깊은 복사된 객체
 */

export function deepClone(obj) {
  // 여기에 코드를 작성하세요.
}
