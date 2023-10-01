// For in loop

const colorObj = {
    color1 : 'red',
    color2 : 'blue',
    color3 : 'orange',
    color4 : 'green',
};

for (const key in colorObj)
{
    console.log(key);
}

for (const key in colorObj)
{
    console.log(key, colorObj[key]);
}

console.clear()
console.log('-----');

const colorArray = [ 'red', 'green', 'blue', 'yellow' ];
for (const key in colorArray)
{
    console.log(colorArray[key]);
}