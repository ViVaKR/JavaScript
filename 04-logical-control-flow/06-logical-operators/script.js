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
posts.length > 0 && console.log(posts[0]);  //-> One

// || - Will return the first truthy value or the last value
let b;
b = 10 || 20;  // -> 10
b = 0 || 20;
b = 0 || null || '' || undefined;  // undefined

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined
let c;
c = 10 ?? 20;    // 10
c = null ?? 30;  // 30
c = '' ?? 40;    // empty string
c = 0 ?? 30;

console.log(c);