//  area of square
const prompt = require("prompt-sync")();
function areaOfSquare(side) {
    return side * side;

}
let side = Number(prompt("enter the  length of side:"));
let area = areaOfSquare(side);

console.log("area of the square=", area);






