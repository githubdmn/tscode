const title = '->->Adapter payment exmaple';

interface IPayment {
  id: string;
  total: number;
  SubmitPayment: Function;
}

class Payment implements IPayment {
  public id: string;
  public total: number;
  constructor(id: string, total: number) {
    this.id = id;
    this.total = total;
  }
  public SubmitPayment() {
    console.log(`Proprietary Payment Amount: ${this.total} - ID: ${this.id}`);
  }
}

interface IThirdPartyPayment {
  id: number;
  amount: number;
  SendPayment: Function;
}

class ThirdPartyPayment implements IThirdPartyPayment {
  public id: number;
  public amount: number;
  constructor(id: number, amount: number) {
    this.id = id;
    this.amount = amount;
  }
  public SendPayment() {
    console.log(`3rd Party Payment Amount: ${this.amount} - ID: ${this.id}`);
  }
}

enum PaymentType {
  ThirdParty,
  Propriatery,
}

class PaymentAdapter implements IPayment {
  public id: string;
  public total: number;
  public paymentType: PaymentType;

  constructor(id: string, total: number, paymentType: PaymentType) {
    this.id = id;
    this.total = total;
    this.paymentType = paymentType;
  }

  public SubmitPayment() {
    if (this.paymentType === PaymentType.ThirdParty) {
      const amount = this.total;
      const id = parseInt(this.id);
      const payment = new ThirdPartyPayment(id, amount);
      payment.SendPayment();
    } else if (this.paymentType === PaymentType.Propriatery) {
      const id = this.id.toString();
      const payment = new Payment(id, this.total);
      payment.SubmitPayment();
    } else {
      throw new Error('Invalid payment type');
    }
  }
}

export default (): void => {
  console.log(`${title}\n`);
  const paymentA: IPayment = new PaymentAdapter(
    'aaa',
    47.99,
    PaymentType.Propriatery,
  );
  paymentA.SubmitPayment();
  const paymentB: IPayment = new PaymentAdapter(
    'bbb',
    99.99,
    PaymentType.ThirdParty,
  );
  paymentB.SubmitPayment();
};
