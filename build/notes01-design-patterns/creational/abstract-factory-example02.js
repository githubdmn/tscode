"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VictorianChair {
    material() {
        return 'Wood';
    }
    name() {
        return 'Victoria';
    }
}
class ModernChair {
    material() {
        return 'Metal';
    }
    name() {
        return 'New';
    }
}
class VictorianCoffeeTable {
    material() {
        return 'Wood';
    }
    name() {
        return 'Victor';
    }
    size() {
        return '100x50x70';
    }
    comesWith(chair) {
        return `This table comes with ${chair.name()}`;
    }
}
class ModernCoffeeTable {
    material() {
        return 'Glass';
    }
    name() {
        return 'Fresh';
    }
    size() {
        return '110x60x40';
    }
    comesWith(chair) {
        return `This table comes with ${chair.name()}`;
    }
}
class VictorianFactory {
    createChair() {
        return new VictorianChair();
    }
    createCoffeeTable() {
        return new VictorianCoffeeTable();
    }
}
class ModernFactory {
    createChair() {
        return new ModernChair();
    }
    createCoffeeTable() {
        return new ModernCoffeeTable();
    }
}
function clientCode(factory) {
    const productA = factory.createChair();
    const productB = factory.createCoffeeTable();
    console.log(productB.name());
    console.log(productB.comesWith(productA));
}
exports.default = () => {
    console.log('Client: Testing client code with the first factory type...');
    clientCode(new VictorianFactory());
    console.log('');
    console.log('Client: Testing the same client code with the second factory type...');
    clientCode(new ModernFactory());
};
