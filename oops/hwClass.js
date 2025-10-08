class Vehicle {
    constructor(brand, year, model) {
        this.brand = brand;
        this.year = year;
        this.model = model;

    }
    displayInfo() {
        console.log(`Brand: ${this.brand}`);
        console.log(`year: ${this.year}`);
        console.log(`model: ${this.model}`);

    }
}

    class Car extends Vehicle {
    constructor(brand, model, year, color, fuelType) {
        super(brand, year, model);
        this.color = color;
        this.fuelType = fuelType;
    }
    displayCarInfo() {
        this.displayInfo();
        console.log(`color: ${this.color}`);
        console.log(`fuelType: ${this.fuelType}`);


    }
}

let myCar = new Car("Toyota", "Corolla", 2023, "White", "Petrol");
myCar.displayCarInfo();