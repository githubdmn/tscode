"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const title = 'Creational Design Patterns in TypeScript';
const factory_example03_1 = __importDefault(require("./factory-example03"));
function default_1() {
    console.log(`\->${title}`);
    (0, factory_example03_1.default)();
}
exports.default = default_1;
