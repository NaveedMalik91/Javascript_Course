document.getElementsByTagName("nav")[0].firstElementChild.firstElementChild.style.color = "red" //make first element of nav to green
document.getElementsByTagName("nav")[0].firstElementChild.lastElementChild.style.color = "red" //make last element of nav to green

//change li tags background to cyan
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "cyan"
});