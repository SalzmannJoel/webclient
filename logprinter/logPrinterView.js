
class LogPrinterView {
    constructor() {
        this.output = document.getElementById("logEntries");
    }
    
    printX(x) {
        let pTag = document.createElement('p');
        let content = "Die x-Koordinate hat sich verändert und ist neu: "+x;
        pTag.textContent = content;
        this.output.appendChild(pTag);
    }
    
    printY(y) {
        let pTag = document.createElement('p');
        let content = "Die y-Koordinate hat sich verändert und ist neu: "+y;
        pTag.textContent = content;
        this.output.appendChild(pTag);
    }
    
    print(x, y) {
        let pTag = document.createElement('p');
        let content = "Die Koordinaten haben sich verändert und sind neu: "+x+", "+y;
        pTag.textContent = content;
        this.output.appendChild(pTag);
    }
    
    printState(state) {
        let pTag = document.createElement('p');
        let content = "Der Status hat sich verändert und ist neu: "+state;
        pTag.textContent = content;
        this.output.appendChild(pTag);
    }
}