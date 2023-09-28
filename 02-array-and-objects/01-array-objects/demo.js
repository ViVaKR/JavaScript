let n = 64;
let k = 3;

// Test 1
function solution(n, k) {
  let x = (n / 10) * 2000;
  return parseInt(n * 12_000 + k * 2_000 - x);
}
console.log('위\t', solution(n, k));

// Test 2
function solution2(n, k) {
  let x = (n * 2_000) / 10;
  return parseInt(n * 12_000 + k * 2_000 - x);
}
console.log('아래\t', solution2(n, k));
