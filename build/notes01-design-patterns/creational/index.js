"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const title = 'Creational Design Patterns in TypeScript';
const builder_example02_1 = __importDefault(require("./builder-example02"));
function default_1() {
    console.log(`\->${title}`);
    (0, builder_example02_1.default)();
}
exports.default = default_1;
