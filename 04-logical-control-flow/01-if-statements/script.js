if (true) {
  console.log('This is true');
}

if (false) {
  console.log('This is NOT true');
}

const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}

// Shorthand If
if (x >= y)
  console.log(`${x} is greater than or equal to ${y} =>`), // multi line
    console.log('This it true');
else console.log('This is false');

const d = new Date(2023, 10, 30, 20, 0, 0);
const hour = d.getHours();
console.log(hour);

// else if
if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

console.log(d);

// Nested if
if (hour < 12) {
  console.log('Good Morning');
  if (hour === 6) {
    console.log('Wake Up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
  if (hour >= 20) {
    console.log('zzzzzz');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('It is work time');
}

if (hour === 6 || hour === 20) {
  console.log('Brush Your Teeth!');
}
