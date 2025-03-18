//Promises: Promises are a way to handle asynchronous(independently) operations in JavaScript.
//They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

//States of promise"
//1. Pending: Initial state, neither fulfilled nor rejected.
//2. Fulfilled: Meaning that the operation completed successfully.
//3. Rejected: Meaning that the operation failed.

//Result of promise:
//1. Fulfilled: It means the promise has resolved.
//2. Rejected: It means the promise has rejected.

//Resolve: It is a function that is called when the promise is resolved.
//Reject: It is a function that is called when the promise is rejected.
let promise1 = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }

});
promise1
    .then((result) => {
        console.log("Result of promise 1: " + result);
    })
    .catch((error) => {
        console.log("Result in promise 1 : " + error);
    });

console.log("State of promise 1: ", promise1); //State of promise:  Promise {<resolved>: "Success"}

