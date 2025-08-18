const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function square(number) {
  return number * number;
}
readline.question("Enter number: ", (number) => {
  console.log(square(number));
});
