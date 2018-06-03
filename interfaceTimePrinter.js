/**
 * This interface should be implemented by classes
 * which are able to print the time, typically controllers.
 * @type InterfaceTimePrinter
 */
class InterfaceTimePrinter {
    constructor() {
        if(this.printTime === undefined) {
            throw new TypeError("Must override method");
        }
    }
}