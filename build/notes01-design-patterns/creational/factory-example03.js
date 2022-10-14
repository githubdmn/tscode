"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const title = '->->WindowsExample';
class NativeButton {
    render() {
        return 'Native rendering';
    }
    onClick() {
        return 'Native click';
    }
}
class HTMLButton {
    render() {
        return 'HTML rendering';
    }
    onClick() {
        return 'HTML click';
    }
}
class DialogFactory {
    render() {
        const product = this.createButton();
        return `Creator Factory: ${product.render()} and ${product.onClick()}`;
    }
}
class NativeDialogFactory extends DialogFactory {
    createButton() {
        return new NativeButton();
    }
}
class HTMLDialogFactory extends DialogFactory {
    createButton() {
        return new HTMLButton();
    }
}
function clientCode(creator) {
    console.log("Client: I'm not aware of the creator's class, but it still works.");
    console.log(creator.render());
}
exports.default = () => {
    console.log(title);
    console.log('App: Launched with the HTMLDialogFactory.');
    clientCode(new HTMLDialogFactory());
    console.log('');
    console.log('App: Launched with the NativeDialogFactory.');
    clientCode(new NativeDialogFactory());
};
