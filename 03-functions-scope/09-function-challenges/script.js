// Takes a temperature in Fahrenheit as an argument and
// reutnrs the temperature in celsius.
// Write it as a one line arrow function
// 섭씨 : `\xBOC`
// degree : `\xB0`
// (F - 32) * 5 / 9

// Function
function getCelsius(f) {
  const celsius = ((f - 32) * 5) / 9;
  return celsius;
}

// Signle Line
const getCelsius2 = (f) => ((f - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(50)} \xB0C`);
console.log(`The temperature is ${getCelsius2(50)} \xB0C`);

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
}
let mm = minMax([1, 2, 32, 4, 5, 6, 7]);
console.log(mm);

// Chanllenge 3
((length, width) => {
  const area = length * width;
  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;
  console.log(output);
})(10, 5);
