/**
 * Q1.8: undefined vs null
 *
 * - 변수 선언만 하고 값을 할당하지 않은 경우와, 명시적으로 null을 할당한 경우의 차이를 확인하세요.
 * - let undeclaredVar; 와 let nullVar = null; 를 선언한 후 typeof를 사용해 결과를 확인하세요.
 */

let undeclaredVar;
let nullVar = null;

console.log(typeof undeclaredVar); // 예상 출력: ?
console.log(typeof nullVar); // 예상 출력: ?

export { undeclaredVar, nullVar };
