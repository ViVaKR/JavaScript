let amount = '3.14';
console.log(amount, typeof amount);

// --> Change string to number
let amount2 = Number(amount);
console.log(amount2, typeof amount2);

let amount3 = parseInt(amount);
console.log(amount3, typeof amount3);

let amount4 = parseFloat(amount);
console.log(amount4, typeof amount4);

// --> Change number to string

let num = 100;
console.log(num, typeof num);

let num2 = num.toString();
console.log(num2, typeof num2);

let num3 = String(num);
console.log(num3, typeof num3);

let num4 = num + '';
console.log(num4, typeof num4);
