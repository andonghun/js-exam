/**
 * Q3.9: 함수의 사용 응용
 *
 * - 이전에 작성한 함수들을 활용하여, 다음을 작성하세요.
 * - calcTotal 함수를 사용하여, 상품 가격과 수량을 받아 총 금액을 계산합니다.
 * - canDrive 함수를 사용하여, 나이와 운전면허 여부를 받아 운전 가능 여부를 반환합니다.
 * - checkAdult 함수를 사용하여, 나이를 받아 성인 여부를 반환합니다.
 */

// import를 수정하지 마세요.
import { calcTotal } from "./Q3.3.js";
import { canDrive } from "./Q3.5.js";
import { checkAdult } from "./Q3.6.js";

// 아래에 calcTotal, canDrive, checkAdult 함수를 사용하세요.

// 상품 가격과 수량을 받아 총 금액을 계산합니다.
const price = 1000;
const quantity = 3;
// TODO: calcTotal 함수를 사용하세요.
let total;

// 나이와 운전면허 여부를 받아 운전 가능 여부를 반환합니다.
const age = 19;
const hasLicense = true;

// TODO: canDrive 함수를 사용하세요.
let canDriveResult;

// TODO: 나이를 받아 성인 여부를 반환합니다.
let adultResult;

// export를 수정하지 마세요.
export { total, canDriveResult, adultResult };
