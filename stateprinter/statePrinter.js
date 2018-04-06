
class StatePrinter extends StateChangeListener {
    constructor() {
        super();
        this.view = new StatePrinterView();
        this.model = new StatePrinterModel();
    }
    
    stateChanged(state) {
        this.view.printState(state);
    }
    
}