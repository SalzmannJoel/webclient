
class PositionPrinter extends CoordinatesAndStateChangeListener {
    constructor() {
        super();
        this.view = new PositionPrinterView();
        this.model = new PositionPrinterModel();
        this.model.registerCoordinatesChangeListener(this);
        this.model.registerStateChangeListener(this);
        this.view.moveToStart();
    }
    
    registrateModel(provider) {
        provider.registerCoordinatesUser(this.model);
        provider.registerStateUser(this.model);
    }
    
    coordinatesChanged(x, y) {
        this.view.moveTo(x, y);
    }
    
    stateChanged(state) {
        if(state === State["PACKAGE_PICKED_UP"]) {
            this.model.setCubePicketUp(true);
        } else if(state === State["PACKAGE_DROPPED"]) {
            this.model.setCubePicketUp(false);
        }
        this.view.printState(state);
    }
}