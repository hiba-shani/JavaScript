// promise is in js an objects that are represented in the events completing (or failure)of an asynchronous operation
//  const promise = new Promise((resolve, reject) => {
//     asynchronous operation
//  })
//     }
// resolve (value) called when operation is sucesses
// reject(error) called when the operation is failed

// creating promise

let myPromise = new Promise((resolve, reject) => {
    let sucsesses = true;

    setTimeout (() =>{
        if(sucsesses){
            resolve("promise resolved sucessfully")
        }else{
            reject("promise rejected")
        }
    },2000)
})

myPromise
.then(result =>console.log(result)) // runs promise is resolved
.catch(error => console.log(error)) // runs promise is rejected
.finally(() =>console.log("promise execution finished"))



