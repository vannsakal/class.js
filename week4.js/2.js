const numbers = [5, 12, 8, 130, 44];
const slice = numbers.slice(1,4);
const result = numbers.filter(greaterthan10);

function greaterthan10(n){
    return n >10;
};

console.log(result);
