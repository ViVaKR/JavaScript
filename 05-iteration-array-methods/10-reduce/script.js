
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// 배열의 숫자 요소를 누산, 모두 더하기
const init = 1;
const sum = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, init);

console.log(new Intl.NumberFormat('ko-KR').format(sum));

// Using a for loop
const sum2 = () => {
    let acc = 0;
    for (const item of numbers)
    {
        acc += item;
    }
    return acc;
};

console.log(sum2());

// Shopping Cart
const cart = [
    { id : 1, name : 'Product 1', price : 130 },
    { id : 2, name : 'Product 2', price : 150 },
    { id : 3, name : 'Product 3', price : 200 },
];

const total = cart.reduce(function(acc, product) {
    return acc + product.price;
}, 0);

console.log(total);