
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


const sample = [1, 2, 3];

//! reduce
//-> 핵심 4개의 인자
//-> 누산기 (acc : accumulator) 
//-> 현재값 (cur : currentValue)
//-> 현재 인덱스 (idx : index)
//-> 원본 배열 (src)
let result = sample.reduce((acc, cur) => {
    acc.push(cur ** 2); // 거듭제곱 
    return acc;
}, []);

console.log(result);
console.log(sample);

const arr = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = arr.reduce((acc, cur) => acc + cur, initialValue);

console.log(sumWithInitial)
alert(sumWithInitial)
