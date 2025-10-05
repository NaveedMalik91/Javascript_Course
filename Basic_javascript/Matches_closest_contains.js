//matches: It checks whether an element matches the CSS selector
let id1 = document.getElementById("id1") //will return element with id = id1
let id2 = document.getElementById("id2");
console.log(id1.matches(".class")) //will return false as id1 not matching with classname = class
console.log(id1.matches(".box")) ////will return true as id1  matching with classname = box

//closest: element.closest(selector) finds the nearest ancestor (including itself) that matches the selector.
let sp = document.getElementById("sp1")
let closest = sp.closest(".box") // Finds the closest  element to sp1 that matches with selector class = .box
console.log(closest); //div with id = id1


//contains: It checks if element is inside another
let x = document.getElementById("id1")
let y = document.getElementById("sp1")
console.log(x.contains(y)); //will return true