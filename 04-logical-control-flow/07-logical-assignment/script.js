// `||=` : assigns the right side value only if the left is a falsy value.

let a   = undefined;
// if (!a) {
//   a = 10;
// }
// a = a || 10;  // 10
a     ||= 100;  // 즉, 왼쪽이 false 값인 경우에만 오른쪽 값을 할당합니다.
console.log(a);

// `&&=` : assigns the right side value only if the left is a truthy value.
// 왼쪽이 true 값인 경우에만 오른쪽 값을 할당합니다.

let b   = false;

// if (b) {
//   b = 25;
// }

// b = b && 35;

b     &&= 35;  // 즉, 왼쪽값이 true 값인 경우에 오른쪽 값을 할당, 현재 왼쪽이 false
               // 이므로 -> false

console.log(b);  // false

// `??=` : assigns the right side value only if the left is null or undefined.

let c   = null;

// if (c === null || c === undefined) {
//   c = 15;
// }

// c = c ?? 20;

c     ??= 25;

console.log(c);