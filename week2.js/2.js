const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function rant(message) {
  for (let i = 0; i < 3; i++) {
    console.log(message.toUpperCase());
  }
}
readline.question("Enter a message to rant: ", (msg) => {
  rant(msg);
  readline.close();
});
