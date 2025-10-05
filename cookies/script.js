//Cookies: JavaScript cookies are small data stored on a user's device by a web browser.
// These cookies play a crucial role in web development, enabling websites
// to store and retrieve information about user preferences, session states,
// and other data.

//create cookies
document.cookie = "naveed1 = ARMY"
document.cookie = "naveed2 = Indian"


//while changing cookies key-value the previous not overwritten, it just added with 
//new key and previous value
let key = prompt("Enter the key")
let value = prompt("Enter the value")
document.cookie = `${key}:${value}`

//encodeURI component: it encodes the cookie values into unreadable form
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);