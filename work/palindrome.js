const prompt = require("prompt-sync")();
let str = prompt("enter a string:");
let cleanedStr = str.replace(/\s+/g, '').toLowerCase();
let reversedStr = cleanedStr.split('').reverse().join('');
if (cleanedStr === reversedStr){
    console.log(str + " is a palindrome");
    
}else{
    console.log(str + " not a palindrome");
    
}
