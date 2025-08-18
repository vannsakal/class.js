const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function sumNumber(element) {
  let sum = 0;
  for (let i = 0; i < element.length; i++) {
    sum += element[i];
  }
  return sum;
}
rl.question("Enter number: ", function (element) {
  let array = element.split(" ").map(Number);
  console.log(sumNumber(array));
  rl.close();
});
