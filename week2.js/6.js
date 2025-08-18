const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function lastElement(arr) {
  if (arr.length === 0) {
    return null;
  }
  return arr[arr.length - 1];
}
readline.question("How many element? ", (element) => {
  readline.question("Enter array: ", (input) => {
    let arr = input.split(" ");
    console.log(lastElement(arr));
    readline.close();
  });
});
