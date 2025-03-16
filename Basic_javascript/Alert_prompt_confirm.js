//Alert: used to invoke a mini window with a message
//connect to html first
// alert("Enter the value")


//Prompt: used to open a mini window to take user input
//second argument is the default argument 
//let a = prompt("Enter a:","Value") 
// document.write(a); //will write the value enterred on page


//Confirm: Shows a message and waits for user to press ok or cancel. Returns true for "OK" and false for "CANCEL"
// let write = confirm("Do you want to enter the value: ")
// if (write) {
//     document.write(a)
// }
// else{
//     document.write("Please allow me to write");
// }
let res = 1;
const func = (a)=>{
    while (a!=0) {
       res = res*a;
       a--; 
    }

}
func(5);
console.log("factorial: ",res);