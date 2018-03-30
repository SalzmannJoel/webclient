import {State} from "state";


class PositionChangeListener {
    constructor() {
        if(typeof this.stateChanged(State) !== "function") {
            throw new TypeError("Must override method");
        }
    }
}