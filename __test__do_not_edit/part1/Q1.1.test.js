import { x, y, z } from "../../part1/01.변수/Q1.1.js";

describe("Q1.1: 변수 선언 테스트", () => {
  describe("변수 x 테스트 (var)", () => {
    test("x는 정의되어 있어야 한다", () => {
      expect(typeof x).not.toBe("undefined");
    });

    test("x는 number 타입이어야 한다", () => {
      expect(typeof x).toBe("number");
    });
  });

  describe("변수 y 테스트 (let)", () => {
    test("y는 정의되어 있어야 한다", () => {
      expect(typeof y).not.toBe("undefined");
    });

    test("y는 string 타입이어야 한다", () => {
      expect(typeof y).toBe("string");
    });
  });

  describe("변수 z 테스트 (const)", () => {
    test("z는 정의되어 있어야 한다", () => {
      expect(typeof z).not.toBe("undefined");
    });

    test("z는 boolean 타입이어야 한다", () => {
      expect(typeof z).toBe("boolean");
    });

    test("z는 재할당이 불가능해야 한다", () => {
      const originalZ = z;
      expect(() => {
        z = !originalZ; // const 변수는 재할당 시 에러가 발생해야 함
      }).toThrow(TypeError);
    });
  });
});
