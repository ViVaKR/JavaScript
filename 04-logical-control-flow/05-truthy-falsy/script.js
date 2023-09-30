//? Falsy Values
// 1 false
// 2 - 0
// 3 - "" or '' (Empty string)
// 4 - null
// 5 - undefined
// 6 - NaN

let x = 'test@test.com';

if (x) {
  console.log('You passed in an email');
}

//! falsy
x = false;
x = 0;
x = '';
x = null;
x = undefined;
x = NaN;

//! truethy
x = true;
x = ' ';            // space
x = '0';            // is string
x = 'false';        // is string
x = [];             // empty array
x = {};             // empty object
x = function() {};  // empty function

console.log(Boolean(x));

// Truthy and falsy caveats

const y = 3;

if (y) {
  console.log(`You have ${y} Y`);
} else {
  console.log(`Please enter number of Y`);
}

// Checking for empty arrays
const posts = [ 'One', 'Two' ];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts');
}

// Checkin for empty objects

const user = {
  name : 'Brad'
}

if (Object.keys(user).length > 0) {
  console.log(`List User`);
}
else {
  console.log(`No User`);
}

// Loose Equality (==)
console.log(false == 0);         // true
console.log('' == 0);            // true
console.log(null == undefined);  // true