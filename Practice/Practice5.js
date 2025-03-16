//Q1: create an array and take user input and insert inside array
// let arr = [1,2,3,4,5];
// const prompt = require("prompt-sync")();
// let num = Number.parseInt(prompt("Enter your number: "));
// arr.push(num);
// console.log(arr);


//Q2: Keep adding numbers to the array untill 0 is added to the array
// let arr = [1,2,3,4,5];
// while (true) {
//     const prompt = require("prompt-sync")();
//     let num = Number.parseInt(prompt("Enter your number: "));
//     if (num == 0) {
//         break;
//     }
//     arr.push(num);
// }
// console.log(arr);


//Q3: Filter the numbers divisible by 10 from the array
// let arr = [10,2,30,40,23,4,5,30,100];
// let new_arr = arr.filter(val =>{
//     return val%10 == 0
// })
// console.log(new_arr);


//Q4: Create array of square of numbers in an array
// let arr = [1,2,3,4,6,7,8,9];
// let new_arr = arr.map(val =>{
//     return val*val;
// })
// console.log(new_arr);


//Q5: Use reduce to calculate the factorial of a given number from 1 to n
let arr = [1,2,3,4,5,6];
let n;
let fact = arr.reduce( (val1,val2)=>{
   return val1*val2;
})
console.log(fact);