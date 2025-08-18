let str = " JavaScript is fun! ";
let result = "";
for (let x of str) {
  if (x != " ") {
    result += x;
  }
}
console.log(result.toUpperCase());
