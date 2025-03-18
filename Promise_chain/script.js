//Promise-chaining: It is a way to execute multiple asynchronous operations one after the other.
// Example 1
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise 1 resolved in 2 seconds");
//         resolve();
//     }, 2000);

// });

// promise1.then(() => {
//     setTimeout(() => {
//         let promise2 = new Promise((resolve, reject) => {
//             console.log("Promise 2 resolved in 2 seconds");
//         }, 2000);
//         return promise2; //returning promise2 to chain the promises
//     })

// }).then(() => {
//     setTimeout(() => {
//         console.log("Promise 3 resolved in 2 seconds");
//     }, 2000);
// }).then(() => {
//     setTimeout(() => {
//         console.log("Promise 4 resolved in 2 seconds");
//     }, 2000);
// });



//Load script function using promises
const load = ((link) => {
    let promise = new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = link;
        document.body.appendChild(script);
        script.onload = (() => {
            resolve("Script loaded successfully");
        });

        script.onerror = (() => {
            reject(0);
        });
    });
    return promise;

});

let p1 = load("https://code.jquery.com/jquery-3.6.0.min.js")

p1.then((value) => {
    console.log("Jquery loaded successfully");
    return load("https://cdn.jsdelivr.net/npm/vue/dist/vue.js");
}).then(() => {
    console.log("Vue loaded successfully");
    return load("https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js");
}).then(() => {
    console.log("React loaded successfully");
})
.catch((error) => {
    console.log("Error loading script");
})