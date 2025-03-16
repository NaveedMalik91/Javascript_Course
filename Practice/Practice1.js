// Add a string and a number
let str = "naveed";
let num = 3;

let ans = str + num;
console.log(ans);

// Use typeof() operator to find the datatype of string in above question

let op = typeof(ans);
let c = console.log(op);

//Create a const object in javascript , can you change it to hold a number later
const student = {
    name: "naveed",
    Roll_no : "31348",
    section :3
} 
//student = 123; // Ans: - No, we cant change a const object to number

//Try to add a new key to the const object, shall we can do it?
student["dept"] = "CS";
console.log(student); //Ans: - Yes we can add a key to const object.

// Write a program to create a dictionary of 5-word meanings

const dict = {
    Benefit : "Fayda",
    Introvert : "Khud ki sochne wala",
    Arrogant : "Chup rehne wala",
    Joy : "Khushi"
}
console.log(dict);
console.log(dict.Arrogant);
console.log(dict["Joy"]);