//Primitive data types are the built-in data types provided by JavaScript.
// NN BB SS U
//N - null
//N - number
//B - boolean
//B - BigInt
//S - string
//S - Symbol
//U - undefined
let a = null;
let b = 123;
let c = true;
let d = BigInt("567") + BigInt("4");
let e = "Naveed";
let f = Symbol("I am a defence aspirant");
let g = undefined;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);


//Non-primitive data types, also known as reference types, are objects and derived data types. 
//Simply called as Objects/arrays
const student = {  // can also use let
    "Name": "naveed malik",
    "Roll no": "31348",
    "Class": "TE",
    "Dept.": "CS"

}
console.log(student["Name"]);






