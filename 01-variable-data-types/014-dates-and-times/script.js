let d;

d = new Date();
d = d.toString();
d = new Date(2023, 0, 15, 12, 35, 0); // 0 base
d = new Date('2023-07-18');
d = new Date('2023-11-10T11:27:29');
d = new Date('07/10/2023 10:28:23');
d = Date.now();
d = new Date('2023-11-10');
d = d.getTime(); // Time stamp
d = d.valueOf();
d = new Date(1699574400000);

d = Math.floor(Date.now() / 1000); // second

console.log(d, typeof d);
