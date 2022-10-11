"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const title = 'Car builder example \n';
class Car {
    listParts() {
        console.log(`Car parts: ${this.doors} and ${this.engine}\n`);
    }
}
class CarBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.product = new Car();
    }
    makeDoors(doors) {
        this.product.doors = doors;
    }
    makeEngine(engine) {
        this.product.engine = engine;
    }
    getCar() {
        const result = this.product;
        this.reset();
        return result;
    }
}
class Director {
    setCar(carBuilder) {
        this.carBuilder = carBuilder;
    }
    buildMinimalViableCar() {
        this.carBuilder.makeDoors(2);
        this.carBuilder.makeEngine('50hp electric');
    }
    buildFullFeaturedCar() {
        this.carBuilder.makeDoors(5);
        this.carBuilder.makeEngine('150hp diesel');
    }
}
function clientCode(director) {
    const carBuilder = new CarBuilder();
    director.setCar(carBuilder);
    console.log('Standard basic product:');
    director.buildMinimalViableCar();
    carBuilder.getCar().listParts();
    console.log('Standard full featured product:');
    director.buildFullFeaturedCar();
    carBuilder.getCar().listParts();
    // Remember, the Builder pattern can be used without a Director class.
    /*
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
    onsole.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
  
    // Remember, the Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
    */
}
exports.default = () => {
    console.log(title);
    const director = new Director();
    clientCode(director);
};
