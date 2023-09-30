//! Loops & High Order Array Methods

// 1. Loops

/*
    for ([initialExpression]; [conditionExpression]; [incrementExpression])
    statement
*/

for (let i = 0; i <= 10; i++)
{
    if (i === 7)
    {
        console.log('7 is lucky number');
    }
    console.log(i);
}

// Nest Loop
for (let i = 2; i <= 9; i++)
{
    console.log('Number', i);
    for (let j = 2; j <= 9; j++)
    {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

console.clear();

// Loop through an array, continue
const names = [ 'Brad', 'Sam', 'Sara', 'John', 'Tim' ];
for (let i = 0; i < names.length; i++)
{
    if (i === 2)
    {
        console.log(names[i], ' is the best');
        continue;
    }
    console.log(names[i]);
}

console.clear();

// Break
for (let i = 0; i <= 20; i++)
{
    if (i === 15) break;
    console.log(i);
}