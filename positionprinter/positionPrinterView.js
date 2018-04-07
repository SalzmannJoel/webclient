
class PositionPrinterView {
    constructor() {
        this.canvas = document.getElementById("positionviewCanvas");
        this.ctx = this.canvas.getContext("2d");
    }
    
    moveToStart() {
        
    }
    
    moveToEnd() {
        
    }
    
    moveTo(x, y) {
        console.log("move to: "+x+", "+y);
    }
    
    print(x, y) {
        console.log("new coordinates: "+x+", "+y);
    }
    
    printX(x) {
        console.log("new x: "+x);
    }
    
    printY(y) {
        console.log("new y: "+y);
    }
    
}