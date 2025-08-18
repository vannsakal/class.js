const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function multiply(num1, num2) {
  console.log(num1 * num2);
}
readline.question("Enter num: ", (first) => {
  readline.question("Enter num: ", (second) => {
    multiply(first, second);
  });
});
