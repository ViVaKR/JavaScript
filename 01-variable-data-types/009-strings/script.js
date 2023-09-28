let x;

let user = {};

user.name = 'Viv';
user.age = 30;

// Template Literals
x = `Hello, my name is ${user.name} and I am ${user.age} years old`;

// String Properties and Methods
const s = new String('Hello World'); // object
// s = 'Hello World'; // string

x = typeof s;
// Access value by key
x = s[1];

x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('d');
x = s.substring(0, 5);
x = s.substring(6); // index 6 to end
x = s.slice(0, 5);
x = s.slice(-11, -6); // 뒤에서 부터 짜르기
x = '      Hello World';
x = s.trim();
x = s.replace('World', 'Viv World');
x = s.includes('World'); // true
x = s.valueOf(); // object 로 부터 원시 데이터를 가져올때, Hello World
x = s.split(' ');
x = s.split('');
console.log(x);

// __proto__ 견본
