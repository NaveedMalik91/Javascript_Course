// Q1: create a website capable of storing the bookmarks of favourite website using href
//ans: shown in html file



//Q2: Do Q1 using the event listeners
// let btn= document.querySelectorAll(".container button")
// btn[0].addEventListener("click",function(){
//     window.open("https://www.youtube.com","_blank");
    
// });

// btn[1].addEventListener("click",function(){
//     window.open("https://www.aicte-jk-scholarship-gov.in","_blank");
    
// });

// btn[2].addEventListener("click",function(){
//     window.open("https://jansugam.jk.gov.in","_blank");
    
// });

// btn[3].addEventListener("click",function(){
//     window.open("https://mail.google.com","_blank");
    
//});

//Q3: Write a javascript program for glowing bulb effect using classlist toggle method.
let bulbele = document.getElementById("bul");
setInterval(() => {
    bulbele.classList.toggle("bulb")
}, 300);

