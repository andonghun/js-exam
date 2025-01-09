/**
 * Q130. 캐시된 API 요청 with 재시도 메커니즘
 *
 * - createCachedApiClient 함수를 작성하세요.
 * - API 요청 결과를 캐시하고, 실패 시 재시도하는 클라이언트를 구현합니다.
 *
 * 요구사항:
 * 1. 성공한 요청의 결과를 캐시 (TTL 적용)
 * 2. 실패한 요청은 최대 3번까지 재시도
 * 3. 캐시된 데이터가 있으면 API 호출 대신 캐시 데이터 반환
 * 4. 캐시 TTL이 만료되면 새로운 요청 수행
 *
 * 예시:
 * const apiClient = createCachedApiClient({
 *   ttl: 5000,  // 캐시 유효시간 5초
 *   retries: 3  // 최대 재시도 횟수
 * });
 *
 * // 첫 요청: API 호출 후 캐시
 * const data1 = await apiClient.fetch('/api/data');
 *
 * // 5초 이내 동일 요청: 캐시된 데이터 반환
 * const data2 = await apiClient.fetch('/api/data');
 *
 * // 5초 후 요청: 새로운 API 호출
 * await new Promise(resolve => setTimeout(resolve, 5000));
 * const data3 = await apiClient.fetch('/api/data');
 *
 * @param {Object} config
 * @param {number} config.ttl - 캐시 유효시간 (ms)
 * @param {number} config.retries - 최대 재시도 횟수
 * @returns {Object} 캐시된 API 클라이언트
 *
 * 힌트:
 * 1. 캐시를 저장할 Map 객체를 생성하세요:
 *    - key: API endpoint
 *    - value: { data: 응답데이터, timestamp: 저장시간 }
 *
 * 2. fetch 메서드 구현 시 다음 순서로 처리하세요:
 *    a. 캐시 확인 및 TTL 검사
 *    b. 유효한 캐시가 있으면 캐시된 데이터 반환
 *    c. 없으면 API 요청 수행
 *    d. 실패 시 재시도 로직 수행
 *    e. 성공 시 캐시 저장
 *
 * 3. 재시도 로직은 재귀적으로 구현하세요:
 *    - 남은 재시도 횟수를 카운트
 *    - 실패할 때마다 재귀 호출하며 횟수 감소
 */

export function createCachedApiClient({ ttl, retries }) {
  // 여기에 코드를 작성하세요.
}
