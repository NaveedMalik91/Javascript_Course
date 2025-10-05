// let load = async (link)=>{
//     let promise = new Promise((resolve,reject)=>{
//         let script = document.createElement("script");
//         script.src = link;
//         document.body.appendChild(script)
//         script.onload = ()=>{
//             resolve("Loaded successfully"+link)
//         }
//         script.onerror=()=>{
//             reject("Error occured")
//         }
        
//     })
//     return promise;

// }

// let p1 = load("https://code.jquery.com/jquery-3.3.1.slim.min.js" );
// p1.then((value)=>{
//     console.log(value)
//     alert("Loaded successfully")

// })

// //OR
// async function func(){
//     let loaded = await load("https://code.jquery.com/jquery-3.3.1.slim.min.js" );
//     console.log(loaded+"This line will exected after fulfilling the promise or after await completion")
// }
// func()

//Problem-2: use try-catch to handle errors with promises

let func = ()=>{
    let promise = new Promise((resolve,reject)=>{
        let a = 1;
        setTimeout(() => {
            if (a==2) {
                resolve(2);
            }
            else{
                reject(new Error("The value is not true"))
            }
        }, 3000);
    })
    return promise
}

async function func2(){
    try {
        let ans = await func()
        console.log(ans)
        
    } catch (error) {
        console.log(error)
        
    }
}
func2()

  