console.log(100);
console.log('Hello World');
console.log(20, 'Hello', true, 10.5);

const x = 100;
console.log(x);
console.error('This is an error');
console.warn('This is a warning');
console.table({ name: 'John', age: 30, city: 'New York' });

console.group('Group 1');
console.log(x);
console.error('This is an error');
console.warn('This is a warning');
console.groupEnd();


const styles = 'padding: 10px; background-color: #000; color: red';

console.log('%cHello World', styles);
