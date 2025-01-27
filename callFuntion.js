// function sum(num1, num2){
//     const result =  num1 + num2;
//     return result;
// }

// const result = sum(10,20)
// console.log(result);

function sumOfNumbers(numbers){
    // console.log(number);
    let sum = 0;
    for (const number of numbers){
        sum = sum + number;
        console.log("print sum", sum);
        // console.log(sum);
    }
    return sum;

}

const numbs = [4, 1, 4, 1]
const sum = sumOfNumbers(numbs);
console.log(sum);