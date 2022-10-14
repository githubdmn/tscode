"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const title = 'Structural Design Patterns in TypeScript';
const adapter_example02_1 = __importDefault(require("./adapter-example02"));
function default_1() {
    console.log(`\t${title}`);
    (0, adapter_example02_1.default)();
}
exports.default = default_1;
