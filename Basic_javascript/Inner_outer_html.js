//Inner HTML: the property that allows to get the html inside the element as a string
//valid only for element nodes.

//outer html: the property that allows to get the inner html along with the element-tags itself as a string

let first = document.getElementById('first');
console.log(first.innerHTML); //will return the html inside the element as a string
console.log(first.outerHTML); // will return the html inside the element along with the element tags itself as a string

// first.innerHTML = "<i>this is italic</i>"; //will update the inner html of the element
// console.log(first.innerHTML);

first.outerHTML = "<div>this is updated outer html</div>"; // htis line will change the outer html of the element as well as inner html
console.log(first.outerHTML);

//textContent : the property used to get the text content of the element. it is valid for all nodes

console.log(text.textContent); // will return the text content of the element
first.textContent = "this is updated text content"; // will update the text content of the element

//Hidden: the property used to specify whether the element is visible or not. it is valid for all nodes
//syntax: element.hidden = true/false. or specify hidden property in the html tag itself
text.hidden = true; // will hide the element
text.hidden = false; // will show the element