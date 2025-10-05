//Error: An "error" in JavaScript generally refers to any issue that occurs during the execution of a program, preventing it from running as expected. 
//Exception: Exception handling in JavaScript refers to the process of dealing with errors (exceptions) that occur during the execution/runtime of a program. 
//In javascript we can handle exceptions using try....catch blocks
//The block of code where the error can occur we can enclose it in try block
try{
    let a = 10;
    let b = 0;
    let ans = a/b;
    throw new Error("Divide by zero error")

}
catch(error){
    console.log(error)
}


// //try-catch don't handle asynchronous code in order to
// handle we need to use try-catch inside asynchronous part too
try {
    setTimeout(() => {
        try{
            console.log(x); 
        }
        catch(error){
            console.log(error);
        }
        console.log("Error handled successfully")
    }, 1000);
    
} catch (error) {
    console.log(error)
}


//error: It is a error object in catch block. for all the built in errors, the error
//object has main two properties:
//1. error.name
//2. error.message
//3. error.stack also

// we can create our own custom errros messages by using throw block.

try {
    let age = 12;
    if(age < 18){
        throw new ReferenceError("You cannot drive");
    }
} catch (error) {
    console.log(error);
}

//Finally clause: It is a block in error handling which is used at the end of 
// catch blocks which will get executed always irrepective of error occured or not
//it will get executed even if used in function and function is returned first before finally block
//It is used for garbage collection or to close the connections etc.


