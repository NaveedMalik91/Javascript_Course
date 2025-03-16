// Variables
var a = 9;
var a = 9; // var can be redeclared
console.log(a);


let x = 10; //used to create block scoped variables
x = 12; //let can be updated but not redeclared





const y = 11; // Y is unchangeable thrughout the program
const z = 12; // const var should be initialized and declared as single

{
  let x = 13; //redeclared in a blocked space
  console.log(x);
}
console.log(x);
