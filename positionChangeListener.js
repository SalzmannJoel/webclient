
class PositionChangeListener {
    constructor() {
        if(typeof this.positionChanged(10.0,10.0) !== "function") {
            throw new TypeError("Must override method");
        }
    }
}