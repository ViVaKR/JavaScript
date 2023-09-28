let x;

const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post); // Object to Json

// Parse JSON
const obj = JSON.parse(str); // Json to Object

console.log(str);
console.log(obj);
