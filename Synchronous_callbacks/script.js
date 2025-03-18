//Synchronous programming: In this operations are performedone after the ither
// console.log("this is line1");
// console.log("this is line2");
// console.log("this is line3");

//Asynchronous programming: In this operations are performed independently of the main program flow i.e once written they will execute in the background and the main program will continue
// console.log("Start");
// setTimeout(()=>{
//     console.log("This will executed after 2 seconds but allows the main program to continue");
// },2000);
// console.log("End");


//CallbackFunction: A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. 
// function greet(name, callback){
//     console.log("Hello, "+name);
//     callback();
// }
// function callMe(){ //callback function
//     console.log("I am callback function");
// }
// greet("john",callMe);
// alert("Callback function executed");

//Handling errors in callback functions
function load(link, callback){
    let script = document.createElement('script');
    script.src = link;
    script.onload = function(){ //callback function
        console.log("Calling callback function");
        callback(null,link); //null-> callback function executed successfully
    }

    script.onerror = function(){ //callback error handling function
        console.log("Error in loading script "+link);
        callback(new Error("Error occurred")); //error-> callback function executed with error
    }

    console.log("Adding script to the body");
    document.body.appendChild(script);
}

function myCallback(error,link){
    if(error){
        alert("Error occurred while loading script: "+link);
    }
    alert("script loaded successfully: "+link);
}

load("https://code.jquery.com/jquery-3.6.0.min.js",myCallback);