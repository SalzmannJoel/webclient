<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>PREN Webclient</title>
        <link rel="stylesheet" href="style.css"/>
        <script type="text/javascript" src="state.js"></script>
        <script type="text/javascript" src="stateUserInterface.js"></script>
        <script type="text/javascript" src="coordinatesUserInterface.js"></script>
        <script type="text/javascript" src="stateAndCoordinatesUserInterface.js"></script>
        <script type="text/javascript" src="timePrinterInterface.js"></script>
        <script type="text/javascript" src="stateAndCoordinatesUserAndTimePrinterInterface.js"></script>
        <script type="text/javascript" src="stateChangeListener.js"></script>
        <script type="text/javascript" src="positionChangeListener.js"></script>
        <script type="text/javascript" src="positionAndStateChangeListener.js"></script>
        <script type="text/javascript" src="logprinter/logPrinterModel.js"></script>
        <script type="text/javascript" src="logprinter/logPrinterView.js"></script>
        <script type="text/javascript" src="logprinter/logPrinter.js"></script>
        <script type="text/javascript" src="connector.js"></script>
        <script type="text/javascript" src="controlUnit.js"></script>
    </head>
    <body>
        <div id="pagetitle">
            <h1>Mission PREN T-30</h1>
        </div>
        <div id="stateview">
            <canvas id="stateViewCanvas" width="1000" height="200">
                
            </canvas>
        </div>
        <div id="controlview">
            <div class="buttonwrapper">
                <button onclick="startTrolley()">Start</button>
            </div>
            <div class="buttonwrapper">
                <button onclick="stopTrolley()">Stopp</button>
            </div>
        </div>
        <div class="viewwrapper">
            <div id="positionview">
                <h2>Position</h2>
                <canvas id="positionViewCanvas" width="500" height="500">
                    
                </canvas>
            </div>
            <div id="logview">
                <h2>Log</h2>
                <div id="logEntries">
                    
                </div>
            </div>
        </div>
        <script type="text/javascript">
            //main
            let cpu = new ControlUnit(false);
            let logprinter = new LogPrinter();
            logprinter.registrateModel(cpu);
            cpu.parseResponse({"index":10, "history":[{"x":10,"y":20,"message":"Sali Joel","state":"DEVICE_STOPPED"},{"x":11,"y":22,"message":"Tschau Joel","state":"DEVICE_STARTED"}]});
            
            
            function startTrolley() {
                connector.startTrolley();
            }
            
            function stopTrolley() {
                connector.stopTrolley();
            }
        </script>
    </body>
</html>
