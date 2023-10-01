// Array.prototype.forEach()

const items = [ 'book', 'table', 'chair', 'kite' ];
items.forEach(x => console.log(x));
console.clear()
console.log('-----');
const socials = [ 'Twitter', 'LinkedIn', 'Facebook', 'Instagram' ];

console.clear()
console.log('-----');

socials.forEach(function(x) {
    console.log(x);
});

console.clear()
console.log('-----');

socials.forEach(x => console.log(x));
