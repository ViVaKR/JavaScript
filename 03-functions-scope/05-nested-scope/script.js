// Closures  (폐쇄) and we'// look at ways to use
function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y); // child can access parent variables
  }

  // console.log(y); // can not access error
  second();
}
first();

// block example
if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y); // can access
  }

  // console.log(y); // error can not access child
}
