// useful when comparing a single value against multiple exact matches.

const prompt = require("prompt-sync")();

let day = prompt("enter a day:");
switch (day) {
    case "monday":
        console.log("stART OF WORK WEEK");
        break;

    case "friday":
        console.log("end of the week");
        break;

    case "sunday":
        console.log("weekend");
        break;


    default:
        console.log("regular day");
        break;
}