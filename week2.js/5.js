const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function isShortsWeather(t) {
  if (t >= 35) {
    console.log("true");
  } else {
    console.log("false");
  }
}
readline.question("Enter Temperature: ", (temp) => {
  isShortsWeather(temp);
});
