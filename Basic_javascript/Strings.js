// Strings: collection of characters and immutable in Javastring

//Way1:
let nam = "Naveed Malik";
console.log(nam );
//Way2:
let friend = 'Arif';
console.log(friend);

//Accesing string characters
console.log(nam[0]);

//Template Literals
let boy1 = "Naveed";
let boy2 = "Arif";
//Arif is friend of Naveed
let sentence = `${boy2} is friend of ${boy1}`;
console.log(sentence);

//Escape sequence Characters
//want to print Naveed's car
let x = "Naveed\'s car"; //' will be treated as character in this string
console.log(x);

//String Methods: - These manipulate the strings but cant change the strings 
console.log(x.length); //length of string
console.log(x.toLocaleLowerCase()); //all uppercase characters
console.log(x.toLocaleUpperCase()); //all lowercase characters

console.log(x.slice(2,4)); // returns strinf from index = 2 to 3
console.log(x.replace("Naveed\'s","Naveed")); // replace a string by other specified

console.log(x.concat(" is very fast" )); //joins strings
let y = "      ------ABCD------    ";
console.log(y.trim()); //removes extra spaces before and after the string

//Using a for to print a string
let dept = "Computer Engineering";
let res = "";
for (let i = 0; i < dept.length; i++) {
    res = res + dept[i];
}
console.log(res);