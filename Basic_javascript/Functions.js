//Functions: The set of statements which takes input and give output by analysing the input given to it.
//It improves code readability and reduces redundancy of code thus improving code-reusability.

const hello = ()=>{
    console.log("Hello you are inside hello-function");
}

const sum =(a,b)=>{
    console.log("The sum of two numbers give = ", a + b);
}

const action = (x,y)=>{
    return 1+(x+y)/2;
}

const greet = ()=>{
    return "hello my name is naveed malik";
}

function func(a,b) {
    return a+b;
}
sum(10,20);
hello();
let res1 = action(10,20);
console.log(res1);
let res2 = func(1,2);
let res3 = greet();
console.log("The sum of two numbers give = ", res2);
console.log(res3);
