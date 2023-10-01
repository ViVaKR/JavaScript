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

// index 보기
socials.forEach((x, i) => console.log(i, x));

// 전체 arr 보기
socials.forEach((x, i, arr) => console.log(i, x, arr));

var is_screen = window.matchMedia("screen").matches;
console.log(is_screen);

console.log(number);  // var = undefined, let or const = ReferenceError (Temporal DeadZone)
var number = 10;      // 오직 변수 만 전역 범위 맨위로 `undefined` 초기화 상태로 호스팅,  상승됨, 값이 아님
// let number = 10;      // 변수 자체는 global scope 에는 초기화 없이 호스팅, 올라가 있음,
console.log(number);  // 10

for (const key in items)
{
    console.log(key, items[key]);
}

function fn(nfn, items)
{
    for (const i in items)
    {
        nfn(i);
    }
}

console.log("object");
fn(console.log, items);
console.log("------");

function fn2(x)
{
    console.log(x);
}
items.forEach(fn2);
console.log("-------");

/*
var is_screen = window.matchMedia("screen").matches;  //bool
var is_tv = window.matchMedia("tv").matches;
*/
console.clear();
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`));

// 별도 함수 선언후 콜백 처림
function logSocials(social)
{
    console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
    { name : 'Twitter', url : 'https://twitter.com' },
    { name : 'Facebook', url : 'https://facebook.com' },
    { name : 'Linkedin', url : 'https://linkedin.com' },
    { name : 'Instagram', url : 'https://instagram.com' },
];

socialObjs.forEach((item => console.log(item.name, item.url)));