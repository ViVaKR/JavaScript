// While Do While Loop

let i = 0;

while (i <= 20)
{
    console.log('Number ' + i);
    i++;
}

const arr = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];

console.clear();

// Nesting While loops
i = 2;
while (i <= 9)
{
    console.log('Number ', i);
    let j = 2;
    while (j <= 9)
    {
        console.log(`${i} * ${j} = `, i * j);
        j++;
    }
    i++;
}

console.clear();
// Do While Loop
let k = 2;
do
{
    console.log(k++);
} while (k <= 9);