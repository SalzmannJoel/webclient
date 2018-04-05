
class Connector {
    constructor() {
        this.con = new Connection("SetURLHere");
        this.stateUsers = [];
        this.coordinatesUsers = [];
        this.stopRequest = false;
    }
    
    run() {
//        while(!this.stopRequest) {
//            this.con.request(0, -1);
//        }
        for(i=0; i<10; i++) {
            this.con.request(0, -1);
            console.log(this.con.fetchResponse());
        }
    }
    
    startTrolley() {
        this.con.request(1, -1);
        this.run();
    }
    
    stopTrolley() {
        this.stopRequest = true;
    }
    
    setState(state) {
        if(state > 0 && state <8) {
            this.state = state;
            this.stateUsers.forEach(function(item) {
                item.setState(state);
            });
        }
    }
    
    setFeedback(msg) {
        
    }
    
    registerStateUser(obj) {
        if(obj instanceof StateUserInterface || obj instanceof StateAndCoordinatesUserInterface) {
            this.stateUsers.push(obj);
            console.log("New stateUser in connector");
        }
    }
    
    registerCoordinatesUser(obj) {
        if(obj instanceof CoordinatesUserInterface || obj instanceof StateAndCoordinatesUserInterface) {
            this.coordinatesUsers.push(obj);
            console.log("New positionUser in connector");
        }
    }
}