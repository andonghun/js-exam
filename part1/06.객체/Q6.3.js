/**
 * Q6.4 : 참조형 타입 비교하기
 *
 * - person 객체에 name, age 프로퍼티가 있습니다.
 * - person 객체의 name, age 프로퍼티에 접근하여 새로운 person2 객체를 만드세요.
 * - person2 객체는 name, age 프로퍼티를 가지고 있어야 합니다.
 * - person2와 person을 서로 비교하세요.
 * - person과 person3를 서로 비교하세요.
 */

const person = {
  name: "철수",
  age: 25,
};

// person의 property를 이용해 person2 객체를 만드세요.
const person2 = {};

// person과 person2를 비교하세요.
let isSame;
// person과 person2를 비교한 결과에 대한 예측을 expected에 할당하세요.
let expected;

const person3 = person;

// person과 person3를 비교하세요.
let isSame2;
// person과 person3를 비교한 결과에 대한 예측을 expected2에 할당하세요.
let expected2;

// export를 수정하지 마세요.
export { person, person2, isSame, expected, person3, isSame2, expected2 };
