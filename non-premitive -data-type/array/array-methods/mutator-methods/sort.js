let num = [10,2,4,12];
num.sort();
console.log(num);


// numeric sort--ascending order

const numbers1 = [4,5,7,3,6];
numbers1.sort((a,b) => a-b);
console.log(numbers1);



// numeric sort decending order

const numbers2 = [4,5,7,3,6];
numbers2.sort((a,b) => b-a);
console.log(numbers2);

// default string sort
let fruits = ['apple', 'banana','strawberry', 'orange'];
fruits.sort();
console.log(fruits);


// decending order of string

let fruits1 = ['apple', 'banana', 'orange','cherry'];
fruits1.sort((a,b) =>b.localeCompare(a));
console.log(fruits1);

