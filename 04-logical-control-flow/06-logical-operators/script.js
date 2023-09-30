// Logical Operators

console.log(10 > 20 && 30 > 15);  // false
console.log(10 > 20 || 30 > 15);  // true

// && - Will return first falsy value or the last value
let a;
a = 10 && 20 && 30;       // 30
a = 10 && 0 && 30;        // 0
a = 10 && '' && 0 && 30;  // ''
console.log(a);

const posts = [ 'One', 'Twol' ]
posts.length > 0 && console.log(posts[0]);