let expenses = [120, 75, 300, 50];
let total = 0;
function log(expense){
    console.log(`Expenses recorded: $${expense}`);
    total += expense;
}
expenses.forEach(log);
console.log(`Total Expenses: $${total}`);