// let ele = document.getElementsByClassName("list")[0];
// ele.firstElementChild.style.color = "red";
// ele.lastElementChild.style.color = "red";

// let ele = document.querySelectorAll(".list")[0];
// ele.firstElementChild.style.color = "red";
// ele.lastElementChild.style.color = "red";

document.getElementsByTagName("nav")[0].firstElementChild.firstElementChild.style.color = "red";
document.getElementsByTagName("nav")[0].lastElementChild.lastElementChild.style.color = "red";

Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.backgroundColor = "cyan";
});

