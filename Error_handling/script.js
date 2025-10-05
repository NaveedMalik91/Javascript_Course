//Error: An "error" in JavaScript generally refers to any issue that occurs during the execution of a program, preventing it from running as expected. 
//Exception: Exception handling in JavaScript refers to the process of dealing with errors (exceptions) that occur during the execution/runtime of a program. 
//In javascript we can handle exceptions using try....catch blocks
//The block of code where the error can occur we can enclose it in try block
try{
    let a = 10;
    let b = 0;
    let ans = a/b;
    throw(ans)

}
catch(error){
    console.log("Divide by zero error")
}


// //try-catch don't handle asynchronous code in order to
// handle we need to use try-catch inside asynchronous part too
try {
    setTimeout(() => {
        console.log(x); 
    }, 1000);
    
} catch (error) {
    
}