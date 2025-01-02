/**
 * Q: 재고 관리 시스템 중복 생성 문제
 *
 * - inventory = [ { id, name, stock }, ... ]
 * - addProduct(newItem):
 *   - 같은 id 있으면 stock만 증가
 *   - 없으면 push
 *
 * @param {{id:number, name:string, stock:number}} newItem
 * @returns {void}
 */

const inventory = [
  { id: 100, name: "Keyboard", stock: 10 },
  { id: 200, name: "Mouse", stock: 5 },
];

function addProduct(newItem) {
  // TODO
}

// export 를 수정하지 마세요.
export { inventory, addProduct };
