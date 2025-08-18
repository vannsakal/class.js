const arr = [1, 2, 3];
let newArr = [0, ...arr, 4, 5];
const [first, second, ...rest] = newArr;
console.log(`first = ${first}, second = ${second}, rest = ${rest}`);
