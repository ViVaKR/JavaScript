// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

console.log('Hello World! 안녕하세요 반갑습니다.');


function test() {
    // 1부터 100까지 짝수들의 합을 계산하는 코드
    let sum = 0;
    let evenNumbers = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            sum += i;
            evenNumbers.push(i);
        }
    }

    console.log('Sum:', sum); // 2550 출력
    console.log('Even Numbers:', evenNumbers); // 짝수 리스트 출력
}
test();

function test2() {
    // 1부터 100까지 짝수들의 합을 계산하는 코드
    let sum = 0;
    let evenNumbers = [];
    let i = 1;

    do {
        if (i % 2 === 0) {
            sum += i;
            evenNumbers.push(i);
        }
        i++;
    } while (i <= 100);

    console.log('Sum:', sum); // 2550 출력
    console.log('Even Numbers:', evenNumbers); // 짝수 리스트 출력
}
test2();
