// Event Bubbling

/* 

버블링을 사용하면 가장 안쪽 요소에서 이벤트를 먼저 캡처하고 처리한 다음
그런 다음 외부 요소로 전파됩니다.

With bubbling, the event is first captured and handled by the innermost element and 
then propagated to outer elements.

( EVENT BUBBLING Order)
* evetn target -> BUTTON (click) -> DIV -> BODY -> HTML -> DOCUMENT
*/

const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

// 1
button.addEventListener('click', (e) => alert('Button was clicked'));

// 버블링 차단하기
// button.addEventListener('click', (e) => {
//     alert('Button was clicked');
//     e.stopPropagation(); // Stop Bubbling
// });

// 2
div.addEventListener('click', () => alert('Dev was clicked'));

// 3
form.addEventListener('click', () => alert('Form was clicked'));

// 4
document.body.addEventListener('click', () => alert('Body was clicked'));
