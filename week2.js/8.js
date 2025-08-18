const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function returnDay(number) {
  if (number < 1 && number > 7) {
    return null;
  } else {
    return week[number - 1];
  }
}

readline.question("Enter Number(1-7): ", (number) => {
  console.log(returnDay(number));
});
