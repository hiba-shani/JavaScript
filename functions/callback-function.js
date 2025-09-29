// call back functions are functions that are passed as arguments to other function.
// 1.handile asynchronous operation
// 2.avoid blocking code execution 




// this is our callback function

function greetUser(name) {
    console.log(`hello, ${name} !`);

}

// this function takes another function(callback )  as an argument
function greetUserInput(callback) {

    const name = "hiba";   // simulating user input
    callback(name);
}
greetUserInput(greetUser);
