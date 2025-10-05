// localStorage in JavaScript provides a way for web applications
// to store data as key-value pairs locally within the user's browser.
// The data stays saved even after you close the browser, so it can be
// used again when you open it later. This helps keep track of things like
// user preferences or state across different sessions.

//It is different from cookies as in cookies the the data is sent to server
//with every HTTP request and it has less storage capacity and lifespan(expiry time)
let key = prompt("Enter the key you want to set")
let value = prompt("Enter the value you want to set")

localStorage.setItem(key,value)
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

localStorage.removeItem("null")

localStorage.clear() //clear whole local storage

console.log(localStorage.length) //number of entries

console.log(localStorage.key(0)) //returns vaue of key at index = 0



//Session storage: It is similar to local storage and all methods are same
// only difference Data stored in session storage is tied to the duration of the page session.
// It is cleared when the browser tab or window in which it was created is closed.
//  Data is isolated to the specific browser tab or window where it was set. 


