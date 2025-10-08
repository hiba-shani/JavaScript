class Animal {
    constructor(name) {
        this.name = name;

    }
    speak() {
        console.log(`${this.name} makes a sound`);

    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);//call the parent class constructor
        this.breed = breed;
    }
    //override speak method(polymorphism)
    speak() {
        console.log(`${this.name} ${this.breed} barks`);

    }
}
const dog = new Dog("rex", "germen Shepherd");
dog.speak();