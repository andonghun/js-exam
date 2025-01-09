/**
 * Q: 일정 시간대 예약 시스템
 *
 * - `scheduleNextAvailableTime` 함수를 작성하세요.
 * - 이 함수는 이미 예약된 시간대 목록과 원하는 예약 시간 길이를 입력받아,
 *   가장 빠른 예약 가능한 시작 시간을 반환합니다.
 * - 예약 목록은 [{ start: number, end: number }, ...] 형태를 가진다고 가정합니다.
 * - timeLength(숫자, 단위는 시간)가 주어졌을 때,
 *   예약 목록에 겹치지 않으면서 가장 빠르게 가능한 start 값을 찾아서 반환하세요.
 * - 만약 예약이 불가능하면 null을 반환합니다.
 *
 * 예시)
 *   예약 목록: [{ start: 10, end: 12 }, { start: 14, end: 15 }]
 *   예약 시간 길이: 1
 *   => 12 ~ 14 구간이 비어있으므로, 가장 빠른 예약은 start=12에 가능.
 *
 * @param {{
 *   start: number,
 *   end: number
 * }[]} reservations
 * @param {number} timeLength
 * @returns {number | null}
 */

// TODO: scheduleNextAvailableTime 함수를 작성하세요.
export function scheduleNextAvailableTime(reservations, timeLength) {
  // TODO
}
