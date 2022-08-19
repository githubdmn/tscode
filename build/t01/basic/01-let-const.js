"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function vars() {
    let text;
    text = 'A value of type defined can be assigned after initialisation';
    console.log(text);
    text = 'And value can be changed later on';
    console.log(text);
    const message = 'The const value must be initialized beforehand';
    console.log(message);
}
function default_1() {
    vars();
}
exports.default = default_1;
