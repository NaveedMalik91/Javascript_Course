//Q1: Using logical operators check the age lies between 10 and 20
const prompt = require("prompt-sync")();
let age = prompt("What is your age: ");
age = Number.parseInt(age);
// if (age >= 10 && age <= 20) {
//     console.log("True")
// }
// else {
//     console.log("False");
// }


// Q2: Switch case statements
// switch (age) {
//     case 10:

//         console.log("Age is less than 10");

//         break;
//     case 20:

//         console.log("Age is greater than 10");


//         break;
//     case 15:

//         console.log("Age is in between 10 and 20");


//         break;

//     default:
//         console.log("Ending..........")
//         break;
// }


//Q3: Number divisible by 2 and 3
// if (age%2 == 0 && age%3 == 0) {
//     console.log("Your age is divisible by 2 and 3")
    
// }
// else{
//     console.log("Your age isn't divisible by 2 and 3")

// }

//Q4: Use ternary operator to check driving age is valid?
let result = (age >=18)? "You can drive":"You cannot drive";
console.log(result);