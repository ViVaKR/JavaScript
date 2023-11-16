window.addEventListener('scroll', function () {
  const first = document.querySelector('h1');
  const second = document.querySelector('p[id="first"]');
  const third = document.querySelector('p[id="second"]');
  const val = window.scrollY;

  console.log('scrollY', val);

  if (val > 100) {
    first.style.color = 'red';
    second.style.color = 'green';
    third.style.color = 'blue';
  }
});
