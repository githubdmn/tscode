const title = '->->Logistics example';

/**
 * The Transport interface declares
 * the operations that all concrete
 * products must implement.
 */
interface Transport {
  deliver(): string;
}

/**
 * Concrete Products (Truck and Ship)
 * provide various implementations
 * of the Transport interface.
 */
class Truck implements Transport {
  public deliver(): string {
    return 'Truck is delivering';
  }
}

class Ship implements Transport {
  public deliver(): string {
    return 'Ship is delivering';
  }
}

abstract class LogisticsFactory {
  public abstract createTransport(): Transport;

  public planDelivery(): string {
    // Call the factory method to create a Product object.
    const product = this.createTransport();
    // Now, use the product.
    return `Creator: The same creator's code has just worked with ${product.deliver()}`;
  }
}

class RoadLogisticsFactory extends LogisticsFactory {
  public createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogisticsFactory extends LogisticsFactory {
  public createTransport(): Transport {
    return new Ship();
  }
}

function clientCode(creator: LogisticsFactory) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works.",
  );
  console.log(creator.planDelivery());
}

export default (): void => {
  console.log(title);
  console.log('App: Launched with the RoadLogisticsFactory.');
  clientCode(new RoadLogisticsFactory());
  console.log('');

  console.log('App: Launched with the SeaLogisticsFactory.');
  clientCode(new SeaLogisticsFactory());
};
