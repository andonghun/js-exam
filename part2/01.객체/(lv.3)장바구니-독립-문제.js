/**
 * Q5: 객체 복사와 참조 - 장바구니 독립 문제
 *
 * 아래 시나리오:
 *   - userACart, userBCart 두 개의 장바구니가 있고, 동일한 객체를 참조하면 A에 대한 변경이 B에도 영향을 줌
 *   - "applyCoupon(cart, discount)"를 호출했을 때, 의도대로라면 A와 B는 독립적으로 적용되어야 함
 *
 * TODO:
 *  1. applyCoupon(cart, discount)를 작성하세요. (cart 객체 내 각 item.price에서 discount만큼 빼기)
 *  2. userBCart를 userACart와 독립된 "깊은 복사"로 만들어서 A/B가 분리되도록 수정하세요.
 *     (문제에서는 해당 로직을 함수 createCartClone(userACart) 등으로 구현해도 됩니다.)
 *  3. 적용 후, userACart와 userBCart가 다르게 변했는지를 확인하는 결과를 반환하세요 (예: { userACart, userBCart } )
 *
 *
 * @returns {object} { userACart, userBCart } 결과
 */

// TODO: 함수를 작성하세요 (예: fixCartReferenceIssue)
export function fixCartReferenceIssue() {
  const userACart = {
    items: [
      { name: "키보드", price: 30000 },
      { name: "마우스", price: 20000 },
    ],
  };

  // TODO: userBCart가 userACart와 독립된 복사본을 가지도록 해야 함
  let userBCart;

  const coupon = 5000;

  applyCoupon(userBCart, coupon);

  return { userACart, userBCart };

  function applyCoupon(cart, discount) {
    // TODO
  }
}
