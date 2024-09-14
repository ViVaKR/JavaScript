const listItems = document.querySelectorAll('.list-items');

listItems.forEach(item => {
    console.log(item.getAttribute('class'));
});

// Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');
li.className = 'list-items';
li.innerHTML = '<u>X-men</u>';
li.id = 'item-4';
li.setAttribute('id', 'main-heading');
li.style.color = 'red';
li.classList.add('new-item');
li.classList.add('primary')
ul.appendChild(li);
