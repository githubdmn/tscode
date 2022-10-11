"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const title = 'Creational Design Patterns in TypeScript';
const builder_example01_1 = __importDefault(require("./builder-example01"));
function default_1() {
    console.log(`\->${title}`);
    (0, builder_example01_1.default)();
}
exports.default = default_1;
