//Multiple handlers can be added to the same promise using the then method.
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise resolved');
//     })
// });

// p1.then(()=>{
//     let p = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(4);
//         },2000)
//     });
//     return p;
// })

//After promise is resolved, then method is called and value is passed to the next promise
// .then((value)=>{
//     alert("After 2 seconds value from previous promise: "+value);
// })


//Promise API: It is a set of methods that are used to handle promises.
let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Task 1")
    },1000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Task 2")
    },2000)
})

let p4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Task 3")
    },3000)
})

// Promise.all: It waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.
// let promise_all = Promise.all([p2,p3,p4]);
// promise_all.then((value)=>{
//     console.log(value); //At the end of 3 seconds, all promises are resolved and their values are printed as an array.
// })


//Promise.allSettled: It waits for all promises to settle and returns their results as an array even if anyone is rejected.
// let promise_all = Promise.allSettled([p2,p3,p4]);
// promise_all.then((value)=>{
//     console.log(value); //At the end of 3 seconds, all promises  which are resolved printed as an array even promise4 was rejected.
// })


//Promise.race: It checks for the first promise to resolve and returns its result. If the first promise is rejected, it immediately rejects.
// let promise_all = Promise.race([p2,p3,p4]);
// promise_all.then((value)=>{
//     console.log(value); //The result of the promise which will be resolved first will be returned.
// })


//Promise.any: It waits for the first promise to resolve and returns its result, if not resolved it accepts it waits for other promises If all promises are rejected, it rejects and return error.
// let promise_all = Promise.any([p2,p3,p4]);
// promise_all.then((value)=>{
//     console.log(value); //The result of the promise which will be resolved first will be returned.
// })

//promise.resolve: It returns a promise object that is resolved with a given value(int, str).
let p = Promise.resolve("Resolved");
p.then((value)=>{
    console.log(value); //5
})

//promise.reject: It returns a promise object that is rejected with a given value(int, str).
let p1 = Promise.reject("Rejected");
p1.catch((value)=>{
    console.log(value); //Rejected
})