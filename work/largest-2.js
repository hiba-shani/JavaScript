// if...else Statement - Find the largest of two numbers

const prompt = require("prompt-sync")();

let number1 = prompt("enter your first number:");
let number2 = prompt("enter your second number:");

if(number1 > number2){
    console.log(number1 + " is the largest number");
    
}else if(number2 > number1){
    console.log(number2 + " is the largest number");
    
}else{
    console.log("both numbers are equal");
    
}
