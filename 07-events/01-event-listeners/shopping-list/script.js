// Click
// Typing
// Hovering
// Submiiting
// Clsoing
// Dragging
// Resizing
// ...

const clearBtn = document.querySelector('#clear');

function onClear() {
    // alert('Clear Items');
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML = '';
    // items.forEach((x) => x.remove());
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

// (1) JavaScript Eevnt Listenr
// clearBtn.onclick = function () {
//     alert('Clear Items---');
// };

// (2) addEventListener
// clearBtn.addEventListener('click', function () {
//     console.log('Clear Items---> addEventListener');
// });

// (3) One Line
// clearBtn.addEventListener('click', () => alert('Clear Items---> alert'));
clearBtn.addEventListener('click', onClear);

// 5초 후에 클릭 이벤트 리스터 제거
// setTimeout(() => {
//     clearBtn.removeEventListener('click', onClear);
// }, 5000);

// 5초 후에 버튼 클릭
setTimeout(() => {
    clearBtn.click();
}, 5000);
