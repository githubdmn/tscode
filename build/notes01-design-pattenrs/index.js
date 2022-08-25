"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = __importDefault(require("./basic"));
const creational_1 = __importDefault(require("./creational"));
const structural_1 = __importDefault(require("./structural"));
const behavioral_1 = __importDefault(require("./behavioral"));
const title = 'Design Patterns in TypeScript - Creational, Structural and Behavioral';
function default_1() {
    console.log(`\t${title}`);
    (0, basic_1.default)();
    (0, creational_1.default)();
    (0, structural_1.default)();
    (0, behavioral_1.default)();
}
exports.default = default_1;
