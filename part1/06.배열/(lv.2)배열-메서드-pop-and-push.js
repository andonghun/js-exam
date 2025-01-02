/**
 * Q7.3: manageTaskList 함수
 *
 * - manageTaskList를 작성하세요.
 * - 파라미터로는 순서대로 이전 할 일 목록(tasks)과 새 할 일(newTask)을 받습니다.
 * - 동작 순서:
 *   1) 이전 할 일 중 가장 마지막 항목을 삭제(pop).
 *   2) 새 할 일(newTask)을 배열 끝에 추가(push).
 *   3) 배열에 하나 이상의 항목이 남아 있다면,
 *      첫 번째 항목을 "Updated Task"로 변경.
 *
 * 예시:
 *   tasks = ["Task A", "Task B", "Task C"]
 *   newTask = "Task D"
 *   1) pop -> ["Task A","Task B"]               // "Task C" 제거
 *   2) push("Task D") -> ["Task A","Task B","Task D"]
 *   3) 첫 항목 "Updated Task" -> ["Updated Task","Task B","Task D"]
 *   최종 반환: ["Updated Task","Task B","Task D"]
 *
 * @param {string[]} tasks - 기존 할 일 목록
 * @param {string} newTask - 새 할 일(문자열)
 * @returns {string[]} 조작 후의 할 일 배열
 */

// TODO: manageTaskList 함수를 작성하세요.
function manageTaskList() {}

// export를 수정하지 마세요.
export { manageTaskList };
