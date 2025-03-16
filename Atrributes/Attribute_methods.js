// special words used inside the opening tag of an element to provide additional information or modify its behavior, appearance, or functionality.
// They come in name/value pairs, like name="value"// Get an element by ID (assuming there's an element with id="myElement")

const element = document.getElementById('container');

// Get attribute value
const attr = element.getAttribute('class');
console.log(attr); // "myClass"


//Has Attribute used to check whecher the attribute is present or not
let check1 = element.hasAttribute('class');
console.log(check1); // true
let check2 = element.hasAttribute('style');
console.log(check2); // false

// Set attribute value
//element.setAttribute("hidden", "true"); // <div id="container" class="myClass" hidden="true"></div>

//remove attribute: removes the specified attribute from an element
element.removeAttribute("class"); // Removes the class attribute from the element

//element attr: list of all attributes of an element
console.log(element.attributes); // NamedNodeMap {0: class, 1: id, 2: hidden, class: class, id: id, hidden: hidden, length: 3}


//Data- * attribute:  data-* attributes allow us to create our own attributes that are not global attributes and are not affected by javascript or css
// Get data attribute value
//syatax: element.dataset.attributeName
const dataattr = ele.dataset.game;
console.log(dataattr); // "football"

const game = ele.dataset.player;
console.log(game); // "mario"