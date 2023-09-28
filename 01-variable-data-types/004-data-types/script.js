// String
const firstName = "Sara";

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null; // return object type

// Undefined
let score; // type undefined
const und = undefined;

// Symbol
const id = Symbol("id");

// BigInt
const n = 23942342428482084902840233n;

// Reference Types
const numbers = [1, 2, 3, 4, 5];
const person = {
  name: "Read",
};

function sayHello() {
  console.log("Hello World");
}
const output = sayHello;
console.log(output, typeof output);

//# Data Types

//! Primitive Types : Stored directly in the "stack"
//== Where it is accessed from
//== String | Number | Boolean | Null | Undefined | Symbol | BigInt

//! Reference Types: Stroed in the heap and accessed by reference
//== Arrays | Functions | Objects
