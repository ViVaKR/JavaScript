
let Menu = [0, 1, 2, 3];

Menu.forEach(x => {
    if (x > 0)
        console.log(x);
});
console.log();
for (const key in Menu) {
    const element = Menu[key];
    if (element > 0)
        console.log(element);
}
