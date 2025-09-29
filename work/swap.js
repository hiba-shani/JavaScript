


const prompt = require("prompt-sync")();
let a = Number(prompt("enter first number:"));
let b = Number(prompt("enter second number:"));
console.log("before swapping: a = ",a , "b = ", b);

a = a + b;
b = a - b;
a = a - b;

console.log("after swapping: a =", b , "b =", a);

