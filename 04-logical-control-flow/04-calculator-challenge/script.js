
function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num1 / num2; break;
    default: result = 'Invalid Operator'; break;
  }
  console.log(result);
  return result;
}

calculator(283, 232, '+');
calculator(283, 232, '-');
calculator(283, 232, '*');
calculator(283, 232, '/');