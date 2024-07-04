// // On Page Load
// // window.onload = function () {
// //   document.querySelector('h1').textContent = 'Hello World';
// // };

// window.addEventListener('load', () => console.log('Page Loaded'));

// // On DOM Load
// window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

// console.log('Run me');

// // Resize Event
// window.addEventListener('resize', () => {
//   document.querySelector(
//     'h1'
//   ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
// });

// // Scroll Event
// window.addEventListener('scroll', () => {
//   console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

//   if (window.scrollY > 70) {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// });

// // Focus & Blur Events
// window.addEventListener('focus', () => {
//   document.querySelectorAll('p').forEach((p) => {
//     p.style.color = 'blue';
//   });
// });

// window.addEventListener('blur', () => {
//   document.querySelectorAll('p').forEach((p) => {
//     p.style.color = 'black';
//   });
// });

/* 
  ! insert -> in html header part -> defer
  <!-- Use `defer` when you put script in head -->
  <script src="./script.js" defer></script>
*/

// Same Results
document.querySelector('h1').innerText = 'Title';

// 1
// window.onload = function () {
//     document.querySelector('h1').textContent = 'Hello World';
// };

// 2
window.addEventListener('load', () => {
    // document.querySelector('h1').textContent = '[ Hello World ]';
    console.log('Page Loaded Event');
});

// 3. Contents Loaded
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded Event');
    () => (document.querySelector('h1').textContent = 'Hello, World');
});

window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `
  Resized to ${window.innerWidth} x ${window.innerHeight}
  `;
});

window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} ${window.scrollY}`);

    if (window.scrollY >= 200) {
        document.body.style.background = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.background = 'white';
        document.body.style.color = 'black';
    }
});

window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((x) => {
        x.style.color = 'blue';
    });
});
