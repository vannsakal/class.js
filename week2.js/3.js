const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function isSnakeEyes(num1, num2) {
  if ((num1 === 1, num2 === 1)) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}
readline.question("Enter num: ", (first) => {
  readline.question("Enter num: ", (second) => {
    isSnakeEyes(first, second);
  });
});
