// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('class'));
console.log(document.getElementById('app-title').getAttribute('id'));

document.getElementById('app-title').setAttribute('class', 'title');
const title = document.getElementById('app-title');
// Get or Change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Fine Thanks And You!';
title.innerHTML = '<strong>Shopping List</strong>';

// Change Style
title.style.color = 'magenta';
title.style.backgroundColor = 'black';
title.style.padding = '20px';
title.style.borderRadius = '10px';

// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const seconItem = document.querySelector('li:nth-child(2)');
seconItem.innerText = "Viv Juice";
seconItem.style.color = 'red';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color = 'skyblue';