// async await is syntacticsugar build on a top pf promise it makes async-await code looks and behaves like synchronous,more readable and maintanance.
// async mark a function that returns a promise
// await pause the function execute untilla promise is resolved or rejected

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data loaded")
        }, 2000)
    })


}

async function getData() {
    console.log("start");

    const result = await fetchData();
    console.log(result);

    console.log("end");



}
getData();