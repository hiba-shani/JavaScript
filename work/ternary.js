const prompt = require("prompt-sync")();
let num = parseInt(prompt("enter a number: "));
let result = (num > 0) ? "positive" :
    (num < 0) ? "negative" : "zero";
console.log("the number is :" + result);

