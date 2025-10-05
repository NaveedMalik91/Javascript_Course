//Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined.
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.

// (function (){ 
// // Function Logic Here. 
// })();


(function func(){
    let x = 10;
    let y = 20;
    console.log(x+y);
})();

//Destructuring: Destructuring in JS lets you extract values from arrays or objects into variables easily
const arr = [1,2,3,4,5,6,7]
const [a,b,c,d] = arr;
console.log(a,b,c,d);

//only some are ssigned
const [m, ,n,...rest] = arr

console.log(m,n,rest)

//no need to do this
// a = arr[0]




//spread operator: The spread operator (...) lets you expand arrays or objects into individual elements or properties.
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3};
console.log(obj2); // {a: 1, b: 2, c: 3}


//converts array into objects
let arr3 = [1,2,3,4]
let obj3 = {...arr3}
console.log(obj3)

//with functions
function sum(x,y,z){
    return x+y+z
}
let arr4 = [1,2,3]
let result = sum(...arr4)
console.log("Sum = ",result)


//with objects

let obj = {
    name:"naveed",
    company:"abc",
    salary:"10LPA"
}

let new_obj = {...obj}
console.log(new_obj)

//change some parameters
let new_obj2 = {...obj, name:"naveed malik", company:"XYZ"}
console.log(new_obj2)

