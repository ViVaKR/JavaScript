// Simple Group
console.group('Simple');
const x = 100;
console.table({ name: 'Bard', email: 'viv@gmail.com' });
console.log('Hello World');
console.log(20, 'Hi', true);
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Console Style
const style = 'padding: 10px; background-color: white; color:green';
console.log('%cHello World', style);
