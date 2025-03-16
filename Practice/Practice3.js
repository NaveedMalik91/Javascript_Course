//Q1: Print marks of student in an object
// let marks = {
//     naveed:202,
//     Arif:100,
//     Shariq:300,
//     Dhruv:200
// }
// for (let i = 0 ; i<Object.keys(marks).length;i++) {
//     console.log("Marks of "+ Object.keys(marks)[i] +"="+ marks[Object.keys(marks)[i]]);
// }


//Q2: Program to print try again untill user enters a right number
// const prompt = require("prompt-sync")();
// let num;
// while (num != 10) {
//     num = prompt("Enter a Number: ");
//     if (num == 10) {
//         console.log("Congratulations!! you hit the right number")
//     }
//     else{
//         console.log("Try again!!");
//     }       
// }


//Q3: Function to find the mean of five numbers
let n = 0;
let num;
let sum = 0;
const prompt = require("prompt-sync")();
const avg = ()=>{
    while (n != 5) {
        num = prompt("Enter the number: ");
        let x = Number.parseInt(num);
        sum = sum + x; 
        n++;
    }
    return sum/5;

}
let res = avg();
console.log("The average of five numbers = ",res);