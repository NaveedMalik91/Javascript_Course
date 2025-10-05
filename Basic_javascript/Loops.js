//for loop
//program to add first n-natural numbers
// const prompt = require("prompt-sync")();
// let n = prompt("Enter the number: ");



// let result = 0;
// for (let x = 1; x<= n; x++) {
//     result = result+x;   
// }
// console.log("The sum upto n-numbers = ",result);



//For-in Loop, works with arrays and objects

// let obj = {
//     a:10,
//     b:20,
//     c:30
// }
// for (const key in obj) {
//     console.log("Makrs of " + key+ " are: "+ obj[key]);
// }



//For-of loops works with arrays and strings

// for (let key of "Naveed") {
//     console.log(key); //each character of string traversed and printed as key
// }

let arr = [1,2,3,4,5];
for(let key of arr){
    console.log(key);
}



//while loop: continues untill condition reaches
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//do-while loop: continues untill condition reaches but atleast once because the condition checked later
let z = 0;
do {
    console.log(z);
    z++;
} while (z < 10)
 
    

