let output;

const parent = document.querySelector('.parent');
output = parent.childNodes;

/*

    NodeList (9)
  (Node)
    0       #text " "
    1       <!-- Children -->
    2       #text " "
    3       <div class="child">Child 1</div>
    4       #text " "
    5       <div class="child">Child 2</div>
    6       #text " "
    7       <div class="child">Child 3</div>
    8       #text " "

*/

output = parent.childNodes[0];
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].innerText = 'Child Two';
output = parent.childNodes[5].style.color = 'green';
output = parent.childNodes[7].innerText = 'Child Three';
output = parent.childNodes[7].style.color = 'orange';

output = parent.childNodes;
parent.lastChild.textContent = 'Hello World';

output = parent.firstChild;
output = parent.lastChild;

// parent node
const child = document.querySelector('.child');
output = child.parentElement;

child.parentNode.style.padding = '10px';

// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextSibling;
output = secondItem.previousElementSibling;

console.log(output);