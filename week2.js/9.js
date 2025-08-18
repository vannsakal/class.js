const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function greet(name) {
  let greet = "Greetings " + name + "!";
  return greet;
}
readline.question("Enter name: ", (name) => {
  console.log(greet(name));
});
