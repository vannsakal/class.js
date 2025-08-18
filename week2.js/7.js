const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}

readline.question("How many element? ", (element) => {
  readline.question("Enter array: ", (input) => {
    let arr = input.split(" ");
    console.log(sumArray(arr));
    readline.close();
  });
});
