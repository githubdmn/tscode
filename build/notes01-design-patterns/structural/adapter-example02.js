"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const title = '->->Adapter payment exmaple';
class Payment {
    constructor(id, total) {
        this.id = id;
        this.total = total;
    }
    SubmitPayment() {
        console.log(`Proprietary Payment Amount: ${this.total} - ID: ${this.id}`);
    }
}
class ThirdPartyPayment {
    constructor(id, amount) {
        this.id = id;
        this.amount = amount;
    }
    SendPayment() {
        console.log(`3rd Party Payment Amount: ${this.amount} - ID: ${this.id}`);
    }
}
var PaymentType;
(function (PaymentType) {
    PaymentType[PaymentType["ThirdParty"] = 0] = "ThirdParty";
    PaymentType[PaymentType["Propriatery"] = 1] = "Propriatery";
})(PaymentType || (PaymentType = {}));
class PaymentAdapter {
    constructor(id, total, paymentType) {
        this.id = id;
        this.total = total;
        this.paymentType = paymentType;
    }
    SubmitPayment() {
        if (this.paymentType === PaymentType.ThirdParty) {
            const amount = this.total;
            const id = parseInt(this.id);
            const payment = new ThirdPartyPayment(id, amount);
            payment.SendPayment();
        }
        else if (this.paymentType === PaymentType.Propriatery) {
            const id = this.id.toString();
            const payment = new Payment(id, this.total);
            payment.SubmitPayment();
        }
        else {
            throw new Error('Invalid payment type');
        }
    }
}
exports.default = () => {
    console.log(`${title}\n`);
    const paymentA = new PaymentAdapter('aaa', 47.99, PaymentType.Propriatery);
    paymentA.SubmitPayment();
    const paymentB = new PaymentAdapter('bbb', 99.99, PaymentType.ThirdParty);
    paymentB.SubmitPayment();
};
