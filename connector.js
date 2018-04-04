
class Connector {
    constructor() {
        this.con = new Connection("meine url");
        this.stateUsers = [];
        this.coordinatesUsers = [];
    }
    
    startTrolley() {
        
    }
    
    stopTrolley() {
        
    }
    
    setState(state) {
        
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