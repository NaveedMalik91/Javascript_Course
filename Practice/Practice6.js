//Q1: use prompt to tell the user whether he can drive or not.
//let age = Number.parseInt(prompt("What is your age: "));
// const canDrive = (age)=>{
//     if (age > 18) {
//         alert("You can drive")
//     }
//     else {
//         alert("Sorry, you cannot drive");
//     }
// }
// canDrive(age);



//Q2: Ask user, wanna see prompt again if ok then show it again
// let age;
// let runagain = true;
// while(runagain!=false) {
//     age = Number.parseInt(prompt("What is your age: "));
//     canDrive(age);
//     runagain = confirm("Do you want to check again?") 
// }



//Q3 Use console.error to check for possible errors
// let age = Number.parseInt(prompt("What is your age: "));
// const func = (age)=>{
//     if (age > 18) {
//         alert("You can drive")
//     }
//     else if(age < 0){
//         console.error("Age cannot be negative")
//     }
//     else {
//         alert("Sorry, you cannot drive");
//     }
// }
// func(age);

//Q4: Redirect the use to google.com if enterred age grater than 4.
// let runagain = true;
// let age;
// const func = (age)=>{
//     if (age > 18) {
//         alert("You can drive")
//     }
//     else if(age < 0){
//         console.error("Age cannot be negative")
//     }
//     else {
//         alert("Sorry, you cannot drive");
//     }
// }

// while(runagain!=false) {
//     age = Number.parseInt(prompt("What is your age: "));
//     if(age > 4){
//         location.href = "https://www.google.com/"
//         break;
//     }
//     func(age);
//     runagain = confirm("Do you want to check again?") 
// }



//Q5: Chnage the color of background based on user input
let color = prompt("Enter the color:")
document.body.style.background = color;