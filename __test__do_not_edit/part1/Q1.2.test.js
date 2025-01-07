import {
  num,
  str,
  bool,
  arr,
  obj,
  undef,
  nul,
} from "../../part1/01.변수/Q1.2.js";

describe("Q1.2 타입별 변수 테스트", () => {
  describe("num (number 타입)", () => {
    test("num은 number 타입이어야 한다.", () => {
      expect(typeof num).toBe("number");
    });

    test("num은 유한한 수여야 한다.", () => {
      expect(Number.isFinite(num)).toBe(true);
    });
  });

  describe("str (string 타입)", () => {
    test("str은 string 타입이어야 한다.", () => {
      expect(typeof str).toBe("string");
    });

    test("str은 빈 문자열이 아닐 수도 있다.", () => {
      // 반드시 빈 문자열이 아니어야 한다는 보장은 없으므로 예시로 작성
      // 필요시 아래 expect를 원하는 방식으로 변경
      expect(str.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe("bool (boolean 타입)", () => {
    test("bool은 boolean 타입이어야 한다.", () => {
      expect(typeof bool).toBe("boolean");
    });

    test("bool이 true이거나 false인지 확인", () => {
      expect([true, false]).toContain(bool);
    });
  });

  describe("arr (array 타입)", () => {
    test("arr은 array 타입이어야 한다.", () => {
      expect(Array.isArray(arr)).toBe(true);
    });

    test("arr의 length 확인(0 이상일 것)", () => {
      expect(arr.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe("obj (object 타입)", () => {
    test("obj는 object 타입이어야 한다.", () => {
      // null 또한 typeof시 object가 나오므로 null이 아닌지도 체크
      expect(obj).not.toBeNull();
      expect(typeof obj).toBe("object");
    });

    test("obj가 어떤 프로퍼티를 가질 수도 있다(예시)", () => {
      // 상황에 맞춰 프로퍼티 검증 로직을 추가할 수 있음
      // 여기에선 "속성이 하나 이상 있을 수도 있다"는 예시로 작성
      expect(Object.keys(obj).length).toBeGreaterThanOrEqual(0);
    });
  });

  describe("undef (undefined 타입)", () => {
    test("undef는 undefined 이어야 한다.", () => {
      expect(typeof undef).toBe("undefined");
    });
  });

  describe("nul (null 값)", () => {
    test("nul은 null 이어야 한다.", () => {
      expect(nul).toBeNull();
    });
  });
});
