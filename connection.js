class Connection {
    constructor(host) {
        this.host = host;
        this.lastResponse = "";
    }
    
    request(index) {
        
    }
    
    fetchResponse() {
        return this.lastResponse;
    }
}