let x;

const arr = [34, 55, 95, 20, 15];
arr.push(100);
arr.pop(); // 끝에서 뺌
arr.unshift(99); // insert 0 index
arr.shift(); // 앞에서 뺌
// arr.reverse();

x = arr.includes(20); // true
x = arr.indexOf(15);
x = arr.indexOf(444); // not exists (-1)

x = arr.slice(1); // 두번째 부터 끝까지, 실재 배열은 변화 없음
x = arr.slice(1, 3);

// x = arr.splice(1, 4); // 실재 배열이 변경됨, index (start, end) end 직전 까지

// x = arr.splice(3, 1);

x = arr.slice(1, 4).reverse().toString().charAt(0); // -> 2

console.log(arr);
console.log(x);
