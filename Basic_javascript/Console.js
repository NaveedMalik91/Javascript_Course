//Console object methods in javascript

console.error("This is shown as error in red color")
console.assert(5 > 55) //used to assert a condition.
console.clear(); //clear the console

let obj = {1:"banana",2:"orange",4:"apple"}
console.table(obj); //tabulate the key value pairs

console.warn("Dont cross the line!!!"); //give a warning

console.info("This is an important information") //same as log

console.time("a"); 
//time taken between two
console.timeEnd("a")


//Time taken to execute a loop
let arr = [12,34,5,5]
console.time("for loop");
for (let i = 0; i < 5; i++) {
    const element = arr[i];
    console.log(element);
    
}
console.timeEnd("for loop");