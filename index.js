
// 괄호 없는 번호 : 콜하면서 콜 스택에 쌓이는 순서
// 괄호 있는 번호 : 리턴을 하면서 콜스택에서 제거되는 순서

// 5 - (1)
function mul(a, b) {
    return a * b; 
}

// 4 - (2)
function sub(a, b) {
    console.log(mul(a, b));
    return a - b;
}

// 3 - (3)
function div(a, b) {
    console.log(sub(a, b));
    return a / a;
}

// 2 - (4)
function sum(a, b) {
    console.log(div(a, b));
    return a + b;
}

// 1 - (5)
console.log(sum(12, 45));

// 0 - `index.js` : 프로그램 시작 및 종료 지점
