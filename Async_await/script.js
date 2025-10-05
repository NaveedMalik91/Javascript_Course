// Async/await: It is a special syntax to dela with promises in javascript
//Using multiple .then can be boring and frustration.

//Any function can be made async with the keyword async and after it
// we can await the promises inside it.

//An asynch function will always return a promise and other values are wrapped in a promise automatically

// By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows.
//So async function ensures that the function returns a promise and wraps non-promises in it.


//async makes a function return a Promise.
// and await pauses execution until the Promise resolves.

async function weather(){
    
    let delhiweather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("30 deg")
        },1000)
    })

    let  pune_weather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("20 deg")
        },2000)
    })
    console.log("Fetching the delhi weather......")
    let fdelhi = await delhiweather  //halt the execution
    console.log("Fetched delhi weather = ", fdelhi)

    console.log("Fetching the Pune weather......")
    let fpune = await pune_weather //halt the execution
    console.log("Fetched Pune weather = ", fpune)

    return [delhiweather,pune_weather]


//inside async whereever await used the program halts and complete execution first

}
function not_async(){
    console.log("Hey i am a function and i am not waiting")
}


console.log("Welcome to weather control room")
// let ans = weather();
// not_async() //parallel execution with weather()

// ans.then((result)=>{ //will return primises list
//     console.log(result)

// })
// .catch(()=>{
//     console.log("Error occured while fetching")
// })



// if we add both the above two function in async function and use await
//then it will executed one by one
async function main1(){
    console.log("WELCOME TO ASYNC EXECUTION OF FUNCTIONS WITH AWAIT")
    await weather()
    await not_async()

}
main1()