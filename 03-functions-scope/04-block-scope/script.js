const x = 100;
const foo = 1;

var bar = 2; // window object, Global

if (true) {
  const y = 200;
  console.log(x + y);
}

// console.log(x + y); // error

for (let j = 0; j <= 10; j++) {
  console.log(j);
}

// console.log(j); // error

if (true) {
  const a = 500;
  let b = 600;
  var c = 700; // if statement : 블록 스코프를 벗어남
}
// console.log(b); // error
console.log(c); // no error

for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log('for var i', i);

function run() {
  var d = 100;
  console.log(d);
}
// console.log(d); // error : function block 은 안됨
