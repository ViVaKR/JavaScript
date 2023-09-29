let x;

const firstname = 'John';
const lastname = 'Doe';
const age = 30;

const person = {
  firstname: firstname,
  lastname: lastname,
  age: age,
};

// onsole.log(person.age);

// Destructurin
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

// console.log(todoId);

// Destructure arrays
const numbers = [23, 67, 33, 49];
const [a, b, ...rest] = numbers;
console.log(a, b, rest); // 23 – 67 – [33, 49]
