let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries); // 중첩
// x = fruits;
// x = fruits[3][1]; // blueberry

const allFruits = [fruits, berries];
x = allFruits;
x = allFruits[1][0]; // strawberry

// Concat
x = fruits.concat(berries);

// Spread Operator (...)
x = [...fruits, ...berries];

// Flatten Array
const arr = [1, 2, [3, 4, 5], 6, [6, 7], 8];

x = arr.flat(); // 중첩된 배열을 평평하게 만듦

// Static Methods on Array Object
x = Array.isArray(fruits); // true
x = Array.isArray('HelloWorld'); // false
x = Array.from('12345'); // 문자열을 배열로 만들기

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); // 변수로 배열 만들기

console.log(x);
