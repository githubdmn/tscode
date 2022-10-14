const title = '->->Adapter payment exmaple';

enum PaymentType {
  ThirdParty,
  Propietary,
}

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

export default (): void => {
  console.log(`${title}\n`);
};
