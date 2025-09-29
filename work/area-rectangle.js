
// area of rectangle
const prompt = require("prompt-sync")();
function areaOfRectangle(length,width) {
    return width * length;

}
let length = Number(prompt("enter the length:"));
let width = Number(prompt("enter the width:"));
let area = areaOfRectangle(length, width);

console.log("area of the rectangle=", area);