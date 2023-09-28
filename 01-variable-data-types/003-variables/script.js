//! Ways to declare a varable
//* var, let, const

let firstName = "John";
let lastname = "Doe";
console.log(firstName, lastname);

let age = 30;
console.log(age);

//* Naming Conventions
// 1 Only letters, numbers, underscores and dollar signs
// 2 Can't start with a number

//# firstName = camelCase
//# firstname = underscore
//# FirstName = PascalCase
//# firstname = lowercase

//# Re-assigning Variables
age = 45;
console.log(age);
var score;
score = 1;
console.log(score);

if (true) {
  score = score + 10;
}

console.log(score);

const x = 100;

const arr = [1, 2, 3, 4, 5];

arr.push(10);
console.log(arr);

const person = {
  nm: "Bred",
};

person.nm = "John";
console.log(person.nm);
person.email = "viv@gmail.com";
console.log(person);

//# Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;
console.log(d);
console.log(a);

//# Primitive Data Types (원시 기본 데이터 유형)
//== String - Sequence of characters. Must be in quotes or backticks
//== Number - Integers as wel as floating-point numbers
//== Boolena = Logical entity / true or false
//== Null - Intentiional absence of any object value
//== Undefined - A Variable that has not yet been defined / assigned
//== Symbol - Built-in object whose constructor returns a unique symbol
//== BigInt - Numbers that are greater than the "Number" type can handle

//# Reference Types (Objects)
//== Reference types or "objects" are a non-primitive value and when assigned to a variable, the variable is given a referecce to that value.
//== Objec literals, arrays and functions are all reference types

//# Static Typing vs Dynamic Types
//== JavaScript is a dynamically-typed language.
//== This means, we do not explicitly define the types for our variables.
//== Manu other lagnuages are statically-typed such as C, C++ and C#

//== TypeScript is a superset of JavaScript, which allows static-typing.
//== This can make your code more verbose and less prone to errors.
