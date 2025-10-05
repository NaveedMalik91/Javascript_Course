//Closures: a function + its lexical scope bundled together;
// inner function can access variables of its outer function even after outer function returns.

function init(){
    let name = "naveed" //lexical environment
    function displayname(){ //closure function
        console.log(name) 
    }

    name = "malik" // while returning a closure the refernce to lexical environment is returned so can be updated
    displayname();
}
init();