// const data = [
//   ['문제-A', ['B', 'C']],
//   ['문제-B', ['D', 'E']],
//   ['문제-C', ['F', 'G']],
//   ['문제-D', ['H', 'I']],
//   ['문제-E', ['J', 'K']],
//   ['문제-F', ['L', 'M']],
//   ['문제-G', ['N', 'O']],
// ];

// data.forEach((x, i) => {
//   do {
//     console.log(i, x[0], x[1][0], x[1][1]);
//   } while (i > data.length);
// });

// DOM Element Relationships

// .parent
// .child

// firstElementChild
// lastElementChild
// parentElement
// nextElementSibling
// previousElementSibling
// children

let output;

const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent element from child
const child = document.querySelector('.child');  // 첫번째가 선택됨
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '20px';
child.parentElement.style.borderRadius = '30px';
child.parentElement.style.borderRadius = '30px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';
console.log(output);
