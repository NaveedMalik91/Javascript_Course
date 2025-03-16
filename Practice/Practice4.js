//Q1: console.log("Har\"".length) gives length?
console.log("Har\"".length); //4

// Q2: includes in Javascript:- 
//The includes() method returns true if a string contains a specified string.
//Otherwise it returns false.
let sentence = "My name is naveed malik";
let word = "naveed";
console.log(`The word ${word} ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`)

//Q3: starts with :- used to check whether a string starts with a particular word
// ends with :- used to check whether a string starts with a particular word
//returns true or false
let str = "Hello world";
let result = str.startsWith("Hello");
console.log(result);

let result2 = str.endsWith("world");
console.log(result2);

//Q4: Extract amount out of the string = "Please give me 1000 rupess"

let str2 = "Please give Rs 1000";
let amount =  Number.parseInt(str2.slice("Please give Rs ".length, str2.length + 1));
console.log(amount);
console.log(typeof(amount));

//Q5: Try to chenge the 17th character of str2, will you able to do it?
str[16] =  '5';
console.log(str2); // Unable to change it as strings are immutable