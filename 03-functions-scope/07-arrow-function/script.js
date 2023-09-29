// Arrow Function

function add(a, b) {
  return a + b;
}
console.log(2, 5);

// arrow function
const add2 = (a, b) => {
  return a + b;
};
console.log(add2(23, 65));

// one line
const subtract = (a, b) => a - b;
console.log(subtract(73, 23));

// 파라미터가 하나 일때는 괄호 불필요
// Can leave off () with a single param
const double = (a) => a * 2;
console.log(double(10));

//! Returning an object (혼동 주의!)
const createObj = () => ({
  name: 'Brad',
  age: 45,
});
console.log(createObj());

const numbers = [1, 2, 3, 4, 5, 13, 18];
numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
numbers.forEach((x) => console.log(x));
