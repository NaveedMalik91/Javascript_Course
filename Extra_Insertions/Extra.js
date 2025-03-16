let ele = document.getElementById("main");
ele.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
ele.insertAdjacentHTML("afterbegin", "<p>afterbegin</p>");
ele.insertAdjacentHTML("beforeend", "<p>beforeend</p>");
ele.insertAdjacentHTML("afterend", "<p>afterend</p>");


//Node removal: It is used to remove a node from the DOM.
let p = document.getElementById("remove");
p.remove();



//insertAdjacentElement(): It is used to insert a node before, after, at the beginning or at the end of the element.
let div = document.createElement("div");
div.innerHTML = "Element added after the main element outside the main container div";
ele.insertAdjacentElement("afterend", div);

//insertAdjacentElement(): It is used to insert a node before, after, at the beginning or at the end of the element.
div = document.createElement("div");
div.innerHTML = "Element added before the main element as last element child";
ele.insertAdjacentElement("beforeend", div);

//insertAdjacentElement(): It is used to insert a node before, after, at the beginning or at the end of the element.
div = document.createElement("div");
div.innerHTML = "Element added after the main element as first element child";
ele.insertAdjacentElement("afterbegin", div);

//insertAdjacentElement(): It is used to insert a node before, after, at the beginning or at the end of the element.
div = document.createElement("div");
div.innerHTML = "Element added before the main element outside the main container div";
ele.insertAdjacentElement("beforebegin", div);

