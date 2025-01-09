/**
 * Q: 상품 할인 계산
 *
 * - `calculateDiscount` 함수를 작성하세요.
 *   1. 상품 가격(price)과 쿠폰(coupon)을 입력받아, 할인된 가격을 반환
 *   2. 쿠폰은 다음과 같은 형태로 입력받음
 *    - { type: "percent", rate: 0.2 } => 20% 할인
 *    - { type: "fixed", amount: 1000 } => 1000원 할인
 *   3. 쿠폰이 없을 경우, undefined 또는 null로 입력받음
 *   4. 가격은 0보다 크거나 같음
 * 
 *
 * 예)
 *   calculateDiscount(10000, { type: "percent", rate: 0.2 }) => 8000
 *   calculateDiscount(10000, { type: "fixed", amount: 1000 }) => 9000
 *   
 *
 * @param {number} price

 * @param {{type:string, rate:number, amount:number}} coupon
 * @returns {number}
 */

// TODO: calculateDiscount 함수를 작성하세요.
export function calculateDiscount(price, coupon) {
  // TODO
}
