import {State} from "state";

class StatesUserInterface {
    constructor() {
        if(typeof this.setState(State) !== "function") {
            throw new TypeError("Must override method");
        }
    }
}