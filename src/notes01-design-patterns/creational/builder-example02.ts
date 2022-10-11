const title = 'Car builder example \n';

class Car {
  public doors: number;
  public engine: string;

  public listParts(): void {
    console.log(`Car parts: ${this.doors} and ${this.engine}\n`);
  }
}

interface Builder {
  makeDoors(doors: number): void;
  makeEngine(engine: string): void;
}

class CarBuilder implements Builder {
  private product: Car;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Car();
  }

  public makeDoors(doors: number): void {
    this.product.doors = doors;
  }

  public makeEngine(engine: string): void {
    this.product.engine = engine;
  }

  public getCar(): Car {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private carBuilder: CarBuilder;

  public setCar(carBuilder: CarBuilder): void {
    this.carBuilder = carBuilder;
  }

  public buildMinimalViableCar(): void {
    this.carBuilder.makeDoors(2);
    this.carBuilder.makeEngine('50hp electric');
  }

  public buildFullFeaturedCar(): void {
    this.carBuilder.makeDoors(5);
    this.carBuilder.makeEngine('150hp diesel');
  }
}

function clientCode(director: Director) {
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

export default (): void => {
  console.log(title);
  const director = new Director();
  clientCode(director);
};
