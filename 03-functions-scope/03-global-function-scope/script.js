const x = 100;
console.log(x, 'in global');

function run() {
  console.log(window.innerHeight);
  console.log(x, 'in function');
}
run();

if (true) {
  console.log(x, 'in block');
}

function add() {
  const x = 1; // global scope overriding
  const y = 50;
  console.log(x + y);
}
add();
