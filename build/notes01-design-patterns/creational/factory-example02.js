"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const title = '->->Logistics example';
/**
 * Concrete Products (Truck and Ship)
 * provide various implementations
 * of the Transport interface.
 */
class Truck {
    deliver() {
        return 'Truck is delivering';
    }
}
class Ship {
    deliver() {
        return 'Ship is delivering';
    }
}
class LogisticsFactory {
    planDelivery() {
        // Call the factory method to create a Product object.
        const product = this.createTransport();
        // Now, use the product.
        return `Creator: The same creator's code has just worked with ${product.deliver()}`;
    }
}
class RoadLogisticsFactory extends LogisticsFactory {
    createTransport() {
        return new Truck();
    }
}
class SeaLogisticsFactory extends LogisticsFactory {
    createTransport() {
        return new Ship();
    }
}
function clientCode(creator) {
    console.log("Client: I'm not aware of the creator's class, but it still works.");
    console.log(creator.planDelivery());
}
exports.default = () => {
    console.log(title);
    console.log('App: Launched with the RoadLogisticsFactory.');
    clientCode(new RoadLogisticsFactory());
    console.log('');
    console.log('App: Launched with the SeaLogisticsFactory.');
    clientCode(new SeaLogisticsFactory());
};
