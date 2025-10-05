b =2;
console.log("b = ",b)
var b

//Here it will not give value of b
//Hoisting happens: var b; is moved to the top during compilation
// Hoisting refers to the behavior where JavaScript moves the declarations of
// variables, functions, and classes to the top of their scope during the compilation phase. 


greet1()
function greet1(){
    console.log("This is greet function")
}  // this whole declaration moved to top

//hoisting can't be achieved with let and const kewords


//Function expression: The functions which are declared by using syntax below
// Function expressions can't be hoisted

// greet() // this will lead to error
let greet = function(){
    console.log("This is a function expression")
}
// greet()