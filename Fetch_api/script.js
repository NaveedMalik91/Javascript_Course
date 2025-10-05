//Fetch api method always return a promise
//The fetch() method is used to send HTTP requests to the server
// without refreshing the page

//Syntax
/*fetch(url, {options})
.then(data => {
    // Do some stuff here
})
.catch(err => {
    // Catch and display errors
})*/

// let data = fetch("https://dog.ceo/api/breeds/image/random")
// data
//     .then((response) => {
//         console.log(response.status)
//         console.log(response.ok);
//         return response.json(); //can return only once either text or json
//     }).then((response) => {
//         console.log(response);
//     }).catch((error) => {
//         console.log("Error occured in fetching")
//     })

// //Fetch: object of response containd two properties i.e. status - HTTP status code-200
// //and ok- return true (i.e. status code 200-299) if everything fine


// //FETCH with POST request: A POST request is used to send data to the server,
// // commonly for submitting forms or adding new data.

// let fetch_data = fetch("https://jsonplaceholder.typicode.com/posts",{
//     method: "POST",

//     body:JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userid : 1
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// fetch_data.then((response)=>{
//     return response.json()
// }).then(json => console.log(json));


//fetch and post with asyn await
const func3 = async ()=>{
    let options = {
        method: "POST",

        body:JSON.stringify({
            title: "mr.",
            name: "Naveed malik",
            class:"B.E",
            userid : 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    let result = await fetch("https://jsonplaceholder.typicode.com/posts",options);
    let response = await result.json();
    return response;
}

//printing the results
async function result(){
    let todo = await func3()
    console.log(todo)
}
result()