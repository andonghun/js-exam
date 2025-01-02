/**
 * Q1.4: 블록 스코프
 *
 * - 블록({ }) 내부에서 let w = 1; 선언 후, 블록 밖에서 w에 접근 시도 시 ReferenceError 발생
 * - 블록 내부의 var u = 2; 선언은 블록 밖에서도 접근 가능 (함수 스코프)
 * - 블록 내부에서 let w를 재선언(let w = 2) 할 경우?
 */

function blockScopeTest() {
  {
    // TODO: 블록 내부
    // let w = 1;
    // var u = 2;
  }
  // TODO: 여기서 console.log(w); -> ReferenceError 발생
  //       console.log(u); -> 값 2 정상 접근
}

// export 를 수정하지 마세요.
export { blockScopeTest };
