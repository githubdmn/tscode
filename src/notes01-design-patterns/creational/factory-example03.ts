const title = '->->WindowsExample';

interface Button {
  render(): string;
  onClick(): string;
}

class NativeButton implements Button {
  public render(): string {
    return 'Native rendering';
  }
  public onClick(): string {
    return 'Native click';
  }
}

class HTMLButton implements Button {
  public render(): string {
    return 'HTML rendering';
  }
  public onClick(): string {
    return 'HTML click';
  }
}

abstract class DialogFactory {
  public abstract createButton(): Button;

  public render(): string {
    const product = this.createButton();
    return `Creator Factory: ${product.render()} and ${product.onClick()}`;
  }
}

class NativeDialogFactory extends DialogFactory {
  public createButton(): Button {
    return new NativeButton();
  }
}

class HTMLDialogFactory extends DialogFactory {
  public createButton(): Button {
    return new HTMLButton();
  }
}

function clientCode(creator: DialogFactory) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works.",
  );
  console.log(creator.render());
}

export default (): void => {
  console.log(title);
  console.log('App: Launched with the HTMLDialogFactory.');
  clientCode(new HTMLDialogFactory());
  console.log('');
  console.log('App: Launched with the NativeDialogFactory.');
  clientCode(new NativeDialogFactory());
};
