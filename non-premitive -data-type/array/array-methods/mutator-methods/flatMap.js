
let numbers = [1,2,3,4,5,6,7,8,9];
let result = numbers.flatMap(n =>(n % 2 === 0 ? [n * 2] :[]));
console.log(result);
