//Basic HTML INSERTION
let a = document.getElementsByTagName("div")[0];
a.innerHTML = a.innerHTML + "<h1> I am heading displayed along with div html </h1>";

//appendChild() method is used to insert the node as child nodes at the end of the element
let div = document.createElement("div");
div.innerHTML = "child of main div";
a.appendChild(div);

//append() method is used to insert the multiple nodes at the end of the element
a.append(div);


//prepend(): It is used to insert nodes at the beginning of the element, before existing children
let div1 = document.createElement("div");
div1.innerHTML = "Prepended as first child of the div";
a.prepend(div1);

//before(): It is used to insert nodes before the element, as a sibling
let div2 = document.createElement("div");
div2.innerHTML = "Inserted as previous sibling of the div";
a.before(div2);

//after(): It is used to insert nodes after the element, as a sibling
let div3 = document.createElement("div");
div3.innerHTML = "Inserted as next sibling of the div";
a.after(div3);

//replaceWith(): It is used to replace the element with the nodes
let rep = document.getElementById("replace");
let div4 = document.createElement("p");
div4.innerHTML =  "P element is replaced with div element";
rep.replaceWith(div4);


//insertBefore(): It is used to insert the nodes before the specified existing node
let div5 = document.createElement("div");
div5.innerHTML = "The div5 element is inserted before div3";
a.parentNode.insertBefore(div5, div3);

