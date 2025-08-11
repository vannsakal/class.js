const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 1.
// function printHeart(){
//     console.log("<3");
// }
// printHeart();

// 2.
// function rant(message){
//     for(let i = 0; i < 3; i++){
//         console.log(message.toUpperCase());
//     }
// }

// readline.question('Enter a message to rant: ', (msg) => {
//     rant(msg);
//     readline.close();
// });

// 3.
// function isSnakeEyes(num1,num2){
//     if(num1 === 1, num2 === 1){
//         console.log('Snake Eyes!')
//     }else{
//         console.log('Not Snake Eyes!')
//     }
// }
// readline.question("Enter num: ", (first) =>{
//     readline.question("Enter num: ", (second) =>{
//         isSnakeEyes(first,second);
//     })
// })

// 4.
// function multiply(num1, num2) {
//     console.log(num1*num2);
// }
// readline.question("Enter num: ", (first) =>{
//     readline.question("Enter num: ", (second) =>{
//         multiply(first,second);
//     })
// })

// 5.
// function isShortsWeather(t){
//     if(t>=35){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }
// readline.question("Enter Temperature: ", (temp) =>{
//     isShortsWeather(temp);
// })

// // 6.
// function lastElement(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   return arr[arr.length - 1];
// }
// readline.question("How many element? ", (element) => {
//   readline.question("Enter array: ", (input) => {
//     let arr = input.split(" ");
//     console.log(lastElement(arr));
//     readline.close();
//   });
// });

// 7. 
// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum += Number(arr[i]);
//     }
//     return sum;
// }

// readline.question("How many element? ", (element) => {
//   readline.question("Enter array: ", (input) => {
//     let arr = input.split(" ");
//     console.log(sumArray(arr));
//     readline.close();
//   });
// });

// 8.
// let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// function returnDay(number){
//     if(number<1 && number>7){
//         return null;
//     }else{
//         return week[number -1];
//     }
// }

// readline.question("Enter Number(1-7): ", (number) =>{
//     console.log(returnDay(number))
// })


// 9.
// function greet(name){
//     let greet = "Greetings " + name + "!";
//     return greet; 
// }
// readline.question("Enter name: ", name =>{
//     console.log(greet(name));
// })

// 10.
// function square(number){
//     return number*number
// }
// readline.question("Enter number: ", number=>{
//     console.log(square(number));
// })
