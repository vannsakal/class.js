let count = 0;
let scores = [50, 70, 60, 80, 40, 50.6, 70];
scores.forEach((scores) => {
  if (scores >= 60) {
    count++;
  }
});
console.log("Student passed: ", count);
