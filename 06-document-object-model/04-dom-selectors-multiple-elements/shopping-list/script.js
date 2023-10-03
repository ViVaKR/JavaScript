// querySelectorAll()

const listItems = document.querySelectorAll('.item');

console.log(listItems[1].innerText);

listItems[2].style.color = 'red';

// listItems.forEach((x, i) => {
//     x.style.color = 'red';
//     if (i === 1)
//     {
//         x.remove();
//     }

//     if (i === 0)
//     {
//         x.innerHTML =
//             ` Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>
//         `
//     }
// });

const listItems2 = document.getElementsByClassName('item');
const listArray = Array.from(listItems2);
listArray.forEach(x => {
    console.log(x.innerText);
});

const listItems3 = document.getElementsByTagName('li');

console.log(listItems3[0].innerText);