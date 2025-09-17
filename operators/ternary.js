// condition ? successcode : failure code


const prompt = require("prompt-sync")();

// let age = 10;
let age = prompt("enter your age: ");

let result = (age >= 18) ? "adult" : "minor";
console.log(result);


