// For of loop

const items = [ 'book', 'table', 'chair', 'kite' ];
const users = [
    { name : 'Brad' },
    { name : 'Kate' },
    { name : 'Steve' },
];

for (let item of items)
{
    console.log(item);
}
console.log('-----');

for (const item of users)
{
    console.log(item.name);
}

console.clear()
console.log('-----');

// Loop over string
const str = 'Hello, World';
for (const letter of str)
{
    console.log(letter);
}

// Loop over Maps
console.clear()
console.log('-----');

const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map)
{
    console.log(`${key} - ${value}`);
}

// pertty much : 꽤 많이, 거의
// I travel abroad pretty much every month.
// 나는 거의 매달 해외로 여행을 간다.
// They look pretty much the same, don't they?