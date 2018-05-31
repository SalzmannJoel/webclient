
class Audioplayer extends InterfaceStateUser {
    constructor() {
        super();
    }
    
    setState(state) {
        if(state > 0 && state < 8) {
            this.state = state;
            switch(state) {
                case State['DEVICE_STARTED']:
                    document.getElementById("audioItsMe").play();
                    document.getElementById("audioMain").play();
                    break;
                case State['DESTINATION_REACHED']:
                    document.getElementById("audioTheEnd").play();
                    break;
            }
        }
    }
}
