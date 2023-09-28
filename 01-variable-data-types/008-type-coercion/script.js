let x;
x = 5 + '5'; // string
x = 5 + Number('5'); // number
x = 5 * '5'; // number
x = 5 + null; // number
x = Number(null); // 0, number
x = Number(true); // 1, number
x = Number(false); // 0, number
x = 5 + true; // 6, number
x = 5 + false; // 5, number
x = 5 + undefined; // Nan, number

console.log(x, typeof x);
