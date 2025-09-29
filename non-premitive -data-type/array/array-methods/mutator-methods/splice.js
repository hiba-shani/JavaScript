// used to add remove or replaced  elements in an array
//  unlike slice ,splice modify the original array

// splice(startIndex, deleteCount, items1,items2,...)

// // eg1
// let fruits = ['apple', 'banana', 'orange'];
// fruits.splice(1,1,'grape','kiwi');
// console.log(fruits);



// eg 2

let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1,2,'grape','kiwi');
console.log(fruits);
