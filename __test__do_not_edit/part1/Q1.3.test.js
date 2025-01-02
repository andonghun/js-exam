// reassignConst.test.js
import { reassignConst } from "../../part1/01.변수/Q1.3.js";
describe("Q1.3: const 재할당", () => {
  it("const 변수를 재할당하려고 할 때 TypeError를 던져야 합니다", () => {
    expect(() => reassignConst()).toThrow(TypeError);
  });

  it("const 변수의 재할당을 허용하지 않아야 합니다", () => {
    expect(() => {
      const myConst = 10;
      myConst = 20; // 이 코드는 오류를 발생시켜야 합니다
    }).toThrow(TypeError);
  });

  it("비원시 타입이라도 직접 재할당하면 오류를 던져야 합니다", () => {
    expect(() => {
      const myConstObj = { key: "value" };
      myConstObj = { key: "newValue" }; // 참조를 재할당
    }).toThrow(TypeError);
  });
});
