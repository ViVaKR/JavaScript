// Default Params
function registerUser(user = 'Bot') {
  return user + ' is registered';
}

console.log(registerUser('John'));

// Rest Params
function sum(...numbers) {
  let total = 0;
  for (const item of numbers) {
    total += item;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));

// Object as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: 'Sare',
  })
);

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}

getRandom([1, 3, 5, 7, 9, 11, 13]);
