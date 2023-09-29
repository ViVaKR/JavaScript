let x;

const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post); // Object to Json
console.log(str.id); //-> undefined

// Parse JSON
const obj = JSON.parse(str); // Json to Object
console.log(obj.id); //-> 1

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
  {
    id: 3,
    title: 'Post Three',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
console.log(str);
console.log(obj);
