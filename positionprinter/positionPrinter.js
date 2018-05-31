
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
    
    convertCoordinates(x, y) {
        //ToDo: Convert coordinates
        //x between 0 and 350
        //y between 0 and 110
        //cube starts at 65
        this.view.moveTo(x, y);
    }
    
    coordinatesChanged(x, y) {
        this.convertCoordinates(x, y);
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