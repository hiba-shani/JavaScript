// if...else - Check if a number is divisible by both 3 and 5

const prompt = require("prompt-sync")();

let number = prompt("enter your  number:");
if(number % 3 === 0 && number % 5 === 0){
    console.log(number + " is divisible by both 3 and 5");
    
}else{
     console.log(number + " is not divisible by both 3 and 5");
}