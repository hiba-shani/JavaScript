// it returns an iterator
// it returns array elements with its index

let fruits = ['apple' , 'orange','banana','mango' ];
let iterator = fruits.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
