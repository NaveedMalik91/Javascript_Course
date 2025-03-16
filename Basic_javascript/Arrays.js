// Arrays
let marks = [10,45,48,5,96,false,"not present"];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[[7]]); //out of bound

marks[7] = 14; //upadating
console.log(marks[[7]]); 

console.log("The length of array = ",marks.length); //length

marks[0] = 100; //updating
console.log("The marks of student1 = ",marks[0]); 

console.log(typeof(marks));

// Array methods
let num = [1,23,4,5,6];
let b = num.toString(); //convert num to a string
console.log(b);

console.log(typeof(b)); //returns type od data

let c = num.join(" and "); //joins array elements with element specified
console.log(c);

let r = num.pop(); //return last element i.e. the last element and updates array
console.log(r);
console.log(num.length);
  
let p = num.push(44); //add element to last and updates array
console.log(num);


let s = num.shift();// removes element from last and returns
console.log(s);
console.log(num);

let u = num.unshift(79); //adds element to begining and returns array length
console.log(u);
console.log(num);


let x = [122,2,31,43,52,5,72,87,89,21];
delete x[0];  //deletes first index element but length remains unaffected
console.log(x);
console.log(x.length);

let y = [23,32,12,56,65]
let res = x.concat(y); //concatenates two or more arrays with one array
console.log(res);

let arr = [122,2,31,43,52,5,72,87,89,21];
arr.sort(); // sorts array alphabetically not inc/dec order.
console.log(arr);

let numb = [132,435,565,76,34,5623];
numb.splice(2,3,234,43,5,3,2,34,2); //deleted element from index = 2 to next 3 elements and after add the given elements
console.log(numb);
let del_ele = numb.splice(2,3,234,43,5,3,2,34,2); //returns array of deleted elements
console.log(del_ele);

let numb2 = [1,2,3,4,5,6,7];
let resx = numb2.slice(2,6); //returns array from index = 2 to index = 6-1
console.log(resx);


//----------------Looping the arrays-------------
let values = [1,2,3,4,5,6];

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
    
}

//for each loop -> multiplying with their own values
values.forEach(element => {
    console.log(element*element);
});

//Array from: used to create an array from any other object.
let name = "Naveed";
let arr1 = Array.from(name); //creates array of string name
console.log(arr1);

//For-of loop: access each element of array, alternative to stanadard for-loop
for (const ele of values) {
    console.log(ele);
}

//For-in loop: array: [0:23,1:34,2:54,3:45]-> loop returns array of keys
let ar = [23,34,54,45];
for (const i in ar) {
    console.log(i);
}