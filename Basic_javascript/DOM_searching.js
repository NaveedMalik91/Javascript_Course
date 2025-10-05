//Get elements by class name
//DOM navigation like firstchild, nextchild, firstelementchild
//are useful when elements are close to each other
//but whne the document is very large and elements need to searched for manipulation
//in that case we have to peroform DOM searching

//Get elements by class name
let ctitle = document.getElementsByClassName("card-title") //returns all the elements having class name card-title
let ctitle1 = document.getElementsByClassName("card-title")[0] //returns first element from all the elements having class name card-title
//it will not return elements inside the card title class
ctitle1.style.color = "yellow";

//Get element by ID
let first_title = document.getElementById("first-card") //Will make title of first card blue identified by ID name
first_title.style.color =  "blue";

//Query Selector
let titles = document.querySelector(".card-title") //will return first element with class = card-title
console.log(titles);

//Query SelectorAll
let Qs = document.querySelectorAll(".card-title") //will return all elements with class = card-title
Qs[0].style.color = "red"; //change first element color
Qs[1].style.color = "blue"; //change second element color
Qs[2].style.color = "olive"; //change third element color


//Get elements by Tagname
console.log(document.querySelector(".card").getElementsByTagName("a")) //This will return all the elements qith anchor tag inside element with class = card
console.log(document.getElementsByTagName("a")) //will return all the anchor tag elements inside the whole documnet

//get elements by name: it uses name attribute that we use ex in input tag
console.log(document.getElementsByName("search")) //will return the search-bar element identified by name attribute


//we can search inside elements further also
document.head.getElementsByTagName("title")[0].innerText = "Practice";

