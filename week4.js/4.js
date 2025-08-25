let students = [
    { name: "Alice", score: 85 }, 
    { name: "Bob", score: 92 }, 
    { name: "Charlie", score: 78 }
];

let results = students.map(student => ({
    name: student.name,
    result: student.score >= 80 ? "Passed" : "Failed"
}));

results.forEach(log);

function log(results){
    console.log(`${results.name}: ${results.result}`);
}