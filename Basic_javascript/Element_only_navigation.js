// const { JSDOM } = require("jsdom");
// const { document } = new JSDOM(`<!DOCTYPE html><body></body>`).window;


let a = document.body
console.log("First child of a is: ",a.firstChild); //when we are writing this we can get any child like text node, div or any
console.log("Second child of a is: ",a.firstElementChild); //But when we are writing this syntax we will get the exact and correct first child of parent
console.log(a.previousElementSibling) //will return previous sibling of body which is element i.e. head
console.log(a.nextElementSibling) //return next sibling which is element
console.log(a.lastElementChild) // return last child of body which is element , script in this case

const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red";
};
changeBgRed();