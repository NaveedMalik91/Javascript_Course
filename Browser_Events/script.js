//Events: The input or actions performed by the user on the browser are called browser events.
//EvenListeners: The functions that are called when a particular event occurs are called event listeners.
//EventTarget: The object that listens to or will be affected after execution of the event is called the event target.
//Event Object: The object that contains the information about the event is called the event object.
//EventHandlers: The functions that are called when a particular event occurs are called event handlers.

let btn = document.getElementById("button");
btn.addEventListener("click",function(){
    alert("Button clicked")
});

let x = function(e){
    alert("Button clicked")
    console.log(e.type,e.clientX,e.clientY) //we can write or avoid e in function
}
btn.addEventListener("click",x); //bind function x to listener

let inp = prompt("Enter number");
if (inp == "2") {
    btn.removeEventListener("click",x);
    alert("Event listener removed")
}


