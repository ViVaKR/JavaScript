let idx = 1;
let url = new URL('https://www.xsa.co.kr/Apple/iPad/c/cos_12');
function bigyo() {
    const orginal = document.getElementById('orginal');
    let target = document.getElementById('targetPlace');

    const newNode = orginal.cloneNode(true);

    // span elements (page info)
    let pageInfos = newNode.getElementsByTagName('span');
    Array.prototype.forEach.call(pageInfos, x => {
        x.id = `pageInfo_${idx}`;
        x.innerText = `page ${idx}`;
    }
    );

    // hidden inputs
    let inputs = newNode.getElementsByTagName('input');
    Array.prototype.forEach.call(inputs, (x, i) => {

        switch (i) {
            case 0:
                x.id = `input_${idx}`;
                x.value = idx;
                break;
            case 1:
                x.id = `input_h_${idx}`;
                url.searchParams.set('page', idx);
                x.setAttribute("value", `window.open('${url}')`);
                break;
        }
    }
    );

    // textareas
    let textareas = newNode.getElementsByTagName('textarea');
    Array.prototype.forEach.call(textareas, x => {
        x.id = `txt_${idx}`;
        x.value = x.innerHTML = '';
    });

    // submit button
    let buttons = newNode.getElementsByTagName('button');
    Array.prototype.forEach.call(buttons, x => {
        x.id = `btn_${idx}`;
        url.searchParams.set('page', idx);
        x.setAttribute("onclick", `window.open('${url}')`);
    });

    target.appendChild(newNode);
    idx++;
}

function demo() {

    const numbers = [45, 49, 55, 25];

    let evr = numbers.every((x) => x > 10);
    console.log(evr);
    let filter = numbers.filter(x => x > 45);
    console.log(filter);

    let arr1 = new Array(10);

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = i * 5;
    }
    let sum1 = arr1.reduce((acc, val) => acc + val, 0);

    console.log(sum1);
    // let arr2 = new Array(10).fill(0).map((x, i) = x + 1);
    // console.log(arr2);

    let arr3 = new Array(10).fill(0).map((x, i) => (x + 1) * i);
    console.log(arr3);

    let rs3 = arr3.some(x => x > 8);
    console.log(rs3);

    let arr5 = [3, 5, 2, 9, 456];
    const keys5 = arr5;

    keys5.forEach(x => console.log(arr5.indexOf(x), x));

    const fruits = ["apple", "orange", "cherry", "banana", "mango"];
    const f = fruits.entries(); // iterate over the key/value pairs
    f.forEach(x => console.log(x));

    const months = ['Jan', 'March', 'April', 'June', 'July'];
    const myMonths = months.with(2, 'Feb');
    myMonths.forEach(x => console.log(x));

    console.log([...months.values()]); // Spread operator

    console.log([...Array(10).keys()]);

    console.log(new Date().toLocaleDateString()); // 2021-07-07
    console.log(new Date().toLocaleTimeString()); // 17:16:00
    console.log(new Date().toLocaleString()); // 2021-07-07 17:16:00
    console.log(new Date().toDateString()); // Wed Jul 07 2021
    console.log(new Date().toTimeString()); // 17:16:00 GMT+0900 (Korean Standard Time)
    console.log(new Date().toString()); // Wed Jul 07 2021 17:16:00 GMT+0900 (Korean Standard Time)
    console.log(new Date());

    console.log(new Date("2024-03-25").toLocaleDateString());

    console.log(new Date(24 * 60 * 60 * 1000).toLocaleDateString()); // 1970-01-02
    console.log(new Date(100000000000).toLocaleDateString()); // 1973-03-03
    console.log(new Date(0).toLocaleDateString()); // 1970-01-01
    console.log(new Date().toUTCString()); // Wed, 07 Jul 2021 08:16:00 GMT
    console.log(new Date().toISOString()); // 2021-07-07T08:16:00.000Z

    console.log(Math.E);

    console.log(Math.random());
    console.log(Math.floor(Math.random() * 10) + 1);


    // console.log('demo');
    // Array.from(document.querySelectorAll("*:not(body)")).forEach(e => {
    //     // Add a data-attribute to store the current onclickvalue.
    //     // e.dataset.onclickvalue = e.getAttribute('onclick'); // gets the attribute value.
    //     // e.onclick = ""; // this is to avoid an event call.

    //     // e.addEventListener('click', function () {
    //     //     console.log(this.dataset.onclickvalue);
    //     // })

    //     console.log(e.nodeType === 1 ? e.nodeName : e.nodeType);


    // });

    console.log(getRndInteger(100, 110));

    console.log(Boolean(123 > 200));

    const letters = new Set(['a', 'b', 'c', 'd', 'e']);

    letters.add('f');
    letters.forEach(x => console.log(x));

    for (const x of letters) {
        console.log(x);
    }


    console.log(letters instanceof Set);

    const map = new Map([
        ['name', 'John Doe'],
        ['age', 25],
        ['salary', 1000]
    ]);

    map.forEach((value, key) => {
        console.log(key, value);
    });

    map.entries().forEach(x => console.log(x));
    map.keys().forEach(x => console.log(x));
    map.values().forEach(x => console.log(x));



    const apple = { name: 'Apple', price: 1000 };
    const orange = { name: 'Orange', price: 1500 };
    const cherry = { name: 'Cherry', price: 2000 };


    const fruitsMap = new Map([
        [apple, 10],
        [orange, 20],
        [cherry, 30]
    ]);

    console.log(fruitsMap.values());


}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function findElementWithClass(sourceElement, className) {
    var element = sourceElement; //selected DOM node

    while (element !== document.body) {
        if (element.classList.contains(className)) {
            break;
        }
        element = element.parentNode;
    }
    return element;
}

// action 이 설정 되어 있어서 form 을 submit 하면 action 으로 이동한다.
// 이를 방지하기 위해 preventDefault() 를 사용한다.
// 해당 파트는 프록그램 설정에 따라 필요 없을 수 있다.
// 즉 타입이 button onclick, form submit 등으로 설정되어 있을 수 있다.
function onSubmit(event, idx) {
    event.preventDefault();
    let page = idx.split('_')[1];

    if (page !== undefined) {
        url.searchParams.set('page', idx);
    }
    window.open(url);
}
