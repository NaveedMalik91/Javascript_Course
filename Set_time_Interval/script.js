//Set timeout(): This function is used to call a function after a specified number of milliseconds.
setTimeout(function() {
    alert("Hello");
}, 3000);


const myfunc = (a,b,c)=>{
    alert("Yes I am Running");
    console.log(a+b+c)
}
let timeoutID = setTimeout(myfunc,1000,1,2,3);
clearTimeout(timeoutID); //This function is used to stop the execution of the function specified in the setTimeout() method.


//setInterval(): This function is used to call a function at specified intervals (in milliseconds).
setInterval(function() {
    alert("Hello");
}, 3000);   //This function will alert "Hello" every 3 seconds.

let intervalID = setInterval(myfunc,4000,1,2,3);
clearInterval(intervalID); //This function is used to stop the execution of the function specified in the setInterval() method.
