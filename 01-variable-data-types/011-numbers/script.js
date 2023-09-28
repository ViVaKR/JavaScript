let x;
const num = new Number(3.141592);

x = num.toString();
x = num.toString().length;
x = num.toFixed(4);
x = num.toPrecision(4);
x = num.toExponential(2);
x = num.toLocaleString('ko-KR'); // 이집트 : ar-EG
x = num.valueOf();
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x, typeof x);
