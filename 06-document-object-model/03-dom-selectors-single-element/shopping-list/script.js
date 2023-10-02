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
title.style.backgroundColor = 'darkgray';
title.style.padding = '20px';
title.style.borderRadius = '10px';