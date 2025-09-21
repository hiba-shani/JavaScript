// We can store function inside objects that are called method




// example 1
const car = {
    brand: "toyota",
    start: function(){
        console.log("car started");
    }

}
car.start();

// example 2


// .this - keyword  it refers the object itself(used to access the properties and methods)
const person = {
    name: "shiljith",
    age: 24,
    greet:function() {
        console.log(`hello, my name is  ${this.name}`);
        
        
    }
}
person.greet();