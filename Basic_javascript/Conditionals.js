const prompt = require("prompt-sync")();
let age = prompt("What is your age: ");
age = Number.parseInt(age);
if (age < 18) {
    console.log("You cannot drive");
} else {
    console.log("You can drive");
}

console.log("You can",(age > 18? "Drive" : "not drive"));
