
class PrintableInterface {
    constructor() {
        if(typeof this.print() !== "function") {
            throw new TypeError("Must override method");
        }
    }
}