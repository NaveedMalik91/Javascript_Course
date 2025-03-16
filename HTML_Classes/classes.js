//we can perform operations on classes in HTML using JavaScript
//we can add, remove, toggle, and replace classes in HTML using JavaScript
let ele = document.getElementsByClassName("text-dark");

let elements = document.getElementsByClassName("text-dark");

// Loop through each element and modify elements inside the classList
for (let ele of elements) {
    ele.classList.add("bg-dark"); // Adds bg-dark class
    ele.classList.remove("text-dark"); // Removes text-dark class

    ele.classList.toggle("bg-dark"); // This will remove bg-dark since it was just added
    console.log(ele.classList.contains("font"))// Checks for font class
        
}






