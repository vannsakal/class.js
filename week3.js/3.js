const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merge = [...arr1, ...arr2];
console.log(merge);
const a = {x:1, y:2};
const b = {y:3, z:4};
const ab = { ...a, ...b};
console.log(ab);