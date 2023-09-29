let amount = "150";
let age = "45";
let price = "234000";

console.log(amount, typeof amount);
amount = parseInt(amount);
console.log(amount, typeof amount);

age = +age;
console.log(age, typeof age);

price = Number(price);
console.log(price, typeof price);

// Change number to string
amount = amount.toString();
console.log(amount, typeof amount);

age = String(age);
console.log(age, typeof age);

// Convert string to decimal
let pi = "3.141592";
pi = parseFloat(pi);
console.log(pi, typeof pi);

// Convert number to boolean
amount = 0; // 0 이외는 모두 true
amount = Boolean(amount);
console.log(amount);

// NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("foo" / 3);
