let x;
let d = new Date();

x = d.toString();
x = d.getTime(); // miliseconds
x = d.valueOf();

x = d.getFullYear(); // 2023
x = d.getMonth(); // 0 base
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
x = Intl.DateTimeFormat('ko-KR').format(d);
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
x = d.toLocaleDateString();
x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('ko-KR', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});

console.log(x);
