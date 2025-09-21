 const person = {
    name :'amay',
    age : 21,
    isStudent : true
 }
    
console.log(person.name);
console.log(person.age);

// addind dartas
person.city = "calicut";

// modify data
person.age ="30"

console.log(person);

// remove property from an object
delete person.city
console.log("final person details is: ",person);



