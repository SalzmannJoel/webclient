
class CoordinatesUserInterface {
    constructor() {
        if(typeof this.setCoordinates(10.0,10.0) !== "function") {
            throw new TypeError("Must override method");
        }
    }
}