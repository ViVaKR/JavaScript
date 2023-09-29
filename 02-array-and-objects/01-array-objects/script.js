let x;

const arr = [374, 755, 398, 118, 289];
const mixed = [12, 'Hello World', true, null];

// index : 0 base
const numbers = [12, 45, 33, 29, 51];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');
x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favorite fruit is an ${fruits[2]}`;
x = numbers.length;
fruits[2] = 'pear';
x = fruits;
// fruits.length = 2;

fruits[3] = 'strawberry';
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

console.log(x);
