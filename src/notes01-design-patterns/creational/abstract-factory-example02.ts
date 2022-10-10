interface AbstractChair {
  material(): string;
  name(): string;
}

class VictorianChair implements AbstractChair {
  public material(): string {
    return 'Wood';
  }
  public name(): string {
    return 'Victoria';
  }
}

class ModernChair implements AbstractChair {
  public material(): string {
    return 'Metal';
  }
  public name(): string {
    return 'New';
  }
}

interface AbstractCoffeeTable {
  material(): string;
  name(): string;
  size(): string;
  comesWith(collaborator: AbstractChair): string;
}

class VictorianCoffeeTable implements AbstractCoffeeTable {
  public material(): string {
    return 'Wood';
  }
  public name(): string {
    return 'Victor';
  }
  public size(): string {
    return '100x50x70';
  }
  public comesWith(chair: AbstractChair): string {
    return `This table comes with ${chair.name()}`;
  }
}

class ModernCoffeeTable implements AbstractCoffeeTable {
  public material(): string {
    return 'Glass';
  }
  public name(): string {
    return 'Fresh';
  }
  public size(): string {
    return '110x60x40';
  }
  public comesWith(chair: AbstractChair): string {
    return `This table comes with ${chair.name()}`;
  }
}

interface AbstractFactory {
  createChair(): AbstractChair;
  createCoffeeTable(): AbstractCoffeeTable;
}

class VictorianFactory implements AbstractFactory {
  public createChair(): AbstractChair {
    return new VictorianChair();
  }
  public createCoffeeTable(): AbstractCoffeeTable {
    return new VictorianCoffeeTable();
  }
}

class ModernFactory implements AbstractFactory {
  public createChair(): AbstractChair {
    return new ModernChair();
  }
  public createCoffeeTable(): AbstractCoffeeTable {
    return new ModernCoffeeTable();
  }
}
function clientCode(factory: AbstractFactory) {
  const productA = factory.createChair();
  const productB = factory.createCoffeeTable();

  console.log(productB.name());
  console.log(productB.comesWith(productA));
}

export default (): void => {
  console.log('Client: Testing client code with the first factory type...');
  clientCode(new VictorianFactory());

  console.log('');

  console.log(
    'Client: Testing the same client code with the second factory type...',
  );
  clientCode(new ModernFactory());
};
