
// 버블 정렬 (람다)
function mySort(arr, lambda) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (lambda(arr[j], arr[j + 1]) < 0) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [7, 37, 3, 97, 10, 13, 2, 21, 5];
let lambda = (a, b) => b - a;
let sorted = mySort(arr, lambda);
sorted.forEach(x => {
    console.log(x);
});
