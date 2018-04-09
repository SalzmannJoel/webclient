
class Connector {
    constructor(host) {
        this.host = host;
        this.lastResponse = "";
    }
    
    request(action, index) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(self) {
            if (this.readyState === 4 && this.status === 200) {
                    self.lastResponse = this.responseText;
               }
            };
        xhttp.open("GET", this.host+"/api?action="+action+"&index="+index, true);
        xhttp.send();
    }
    
    fetchResponse() {
        return this.lastResponse;
    }
}