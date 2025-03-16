/**
 * JavaScript Operators Demonstration
 */

console.log("--- Arithmetic Operators ---");
let a = 10, b = 5;
console.log("Addition:", a + b);  // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0
console.log("Exponentiation:", a ** b); // 100000
console.log("Increment:", ++a); // 11
console.log("Decrement:", --b); // 4

console.log("");
console.log("--- Logical Operators ---");
console.log("AND:", true && false); // false
console.log("OR:", true || false); // true
console.log("NOT:", !true); // false

console.log("");
console.log("--- Bitwise Operators ---");
console.log("Bitwise AND:", a & b); // 0
console.log("Bitwise OR:", a | b); // 15
console.log("Bitwise XOR:", a ^ b); // 15
console.log("Bitwise NOT:", ~a); // -11
console.log("Left Shift:", a << 1); // 20
console.log("Right Shift:", a >> 1); // 5
console.log("Unsigned Right Shift:", a >>> 1); // 5

console.log("");
console.log("--- Ternary Operator ---");
let result = (a > b) ? "a is greater" : "b is greater";
console.log(result); // "a is greater"

console.log("");
console.log("--- Type Operators ---");
console.log("typeof:", typeof a); // "number"

console.log("");
console.log("--- Comparison operators ---");
let c = 5;
let d = "5";
console.log("c == d is: ", c == d); // evaluates on the basis of values
console.log("c === d is: ", c === d); // evaluates on the basis of values as well as datatype


// Comments in javascript are non-executable lines of code used by //
// OR by /**/ -> Multiline comments