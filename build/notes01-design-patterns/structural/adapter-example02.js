"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const title = '->->Adapter payment exmaple';
var PaymentType;
(function (PaymentType) {
    PaymentType[PaymentType["ThirdParty"] = 0] = "ThirdParty";
    PaymentType[PaymentType["Propietary"] = 1] = "Propietary";
})(PaymentType || (PaymentType = {}));
class Payment {
    constructor(id, total) {
        this.id = id;
        this.total = total;
    }
    SubmitPayment() {
        console.log(`Proprietary Payment Amount: ${this.total} - ID: ${this.id}`);
    }
}
exports.default = () => {
    console.log(`${title}\n`);
};
