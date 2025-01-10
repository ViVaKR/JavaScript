// --> Primitive Data Types : Stored directly in the "stack", where is is accessed from
// String | Number | Boolean | Null | Undefined | Symbol | BigInt
// 1. Number
const age = 30;
const temp = 98.9;
console.log(age, temp, typeof age, typeof temp);
// 2. String
const firstName = "Kim";
const output = firstName;
console.log(output, typeof output);

// 3. Boolean

const hasKids = true;
console.log(hasKids, typeof hasKids);
// 4. Null

const aptNumber = null;
console.log(aptNumber, typeof aptNumber);
// 5. Undefined

let score;
let address = undefined;
console.log(score, typeof score, address, typeof address);


// 6. Symbols (ES6) : Built-in object whose constructor returns a unique symbol.
const id = Symbol('id');
console.log(id, typeof id);
// 7. BigInt (ES10) : Numbers that are too big for the Number data type.
const bigNumber = 9007199254740991n;
console.log(bigNumber, typeof bigNumber);

// --> Reference Data Types (Objects) : Stored in the heap and accessed by reference.
// Object | Array | Function | Date | Anything Else
// 1. Arrays
const numbers = [1, 2, 3, 4, 5];
console.log(numbers, typeof numbers);
// 2. Object Literals
const person = {
    name: 'John',
    age: 30
}
console.log(person, typeof person);

// 3. Functions
function sayHello() {
    console.log('Hello');
}
console.log(sayHello, typeof sayHello);

// 4. Dates
const today = new Date();
console.log(today, typeof today);

// 5. Anything Else
const car = null;
console.log(car, typeof car);


// --> JavaScript is a  Dynamic Typed language.
// - This means, we do not have to define the data type of a variable when declaring it.


let ps = {
    name: 'John',
    age: 30
}

let newPs = ps;

newPs.age = 40;

console.log(ps);
