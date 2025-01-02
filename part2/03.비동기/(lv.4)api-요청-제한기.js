/**
 * Q129. 동시성 제어 - 요청 제한기(Rate Limiter) 구현
 *
 * - createRateLimiter 함수를 작성하세요.
 * - 주어진 시간 내에 최대 요청 수를 제한하는 비동기 함수를 반환합니다.
 *
 * 요구사항:
 * 1. maxRequests: 주어진 시간 내 최대 허용 요청 수
 * 2. timeWindow: 시간 윈도우 (밀리초)
 * 3. 제한 초과 시 요청은 대기했다가 순차적으로 처리
 *
 * 힌트:
 * 1. 큐를 사용하여 대기 중인 요청을 관리하세요
 * 2. 요청 시간을 기록하여 timeWindow 내의 요청 수를 추적하세요
 * 3. setTimeout을 활용하여 제한된 요청을 지연 실행하세요
 * 4. Promise를 사용하여 비동기 처리를 구현하세요
 *
 * 예시:
 * const rateLimitedRequest = createRateLimiter(2, 1000); // 1초에 최대 2개 요청
 *
 * // 동시에 3개 요청
 * Promise.all([
 *   rateLimitedRequest(() => fetch('/api/1')), // 즉시 실행
 *   rateLimitedRequest(() => fetch('/api/2')), // 즉시 실행
 *   rateLimitedRequest(() => fetch('/api/3'))  // 1초 후 실행
 * ]);
 *
 * @param {number} maxRequests - 최대 허용 요청 수
 * @param {number} timeWindow - 시간 윈도우 (ms)
 * @returns {(fn: () => Promise<any>) => Promise<any>}
 */

export function createRateLimiter(maxRequests, timeWindow) {
  // 여기에 코드를 작성하세요.
}
