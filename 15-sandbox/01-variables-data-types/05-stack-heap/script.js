// Values are stored on the stack
const name = 'John';
const age = 30;

// Reference to the memory location is stored on the stack
const person = {
    name: 'John',
    age: 30
}

// Reference to the memory location is stored on the stack
const person2 = person;
person2.age = 31;

console.log(person, person2);
