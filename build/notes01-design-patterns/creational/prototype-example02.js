"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const title = '->->Protorype example SHAPES\n';
class Shape {
    constructor(source) {
        this.x = source.x;
        this.y = source.y;
        this.color = source.color;
    }
}
class Rectangle extends Shape {
    constructor(source) {
        super(source);
        this.width = source.width;
        this.height = source.height;
    }
    clone() {
        const clone = Object.create(this);
        clone.width = this.width;
        clone.height = this.height;
        return clone;
    }
}
class Circle extends Shape {
    constructor(source) {
        super(source);
        this.radius = source.radius;
    }
    clone() {
        const clone = Object.create(this);
        clone.radius = this.radius;
        return clone;
    }
}
class Application {
}
exports.default = () => {
    console.log(title);
};
