//Below methods doesn't change original arrays

// Map: Creates a new array by performing operation on each array element
// let arr = [1,2,3,4,5];
// let new_ar = arr.map((value)=>{
//     return (value*value);
// });
// console.log(new_ar);

// let arr = [1,2,3,4,5];
// let new_ar = arr.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value*value;
// });
// console.log(new_ar);



//Filter: used to filter the array elements based on the certain elements
// let arr = [10,2,12,34,8,90,4,10.2,34];
// let filter_arr = arr.filter((val)=>{
//     return val%10 == 0;
// })
// console.log(filter_arr);

//Reduce: Used to reduce the array data based on the certain operations
let arr = [1,2,3,4,5];
let new_arr = arr.reduce((val1,val2)=>{
    return val1+val2;
})
console.log(new_arr);


const multiply = (val1,val2)=>{ //function definition
    return val1 * val2;
}
let new_arr2 = arr.reduce(multiply); //declares function inside reduce, it takes two parameters
console.log(new_arr2);