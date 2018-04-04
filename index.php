<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>PREN Webclient</title>
        <link rel="stylesheet" href="style.css"/>
        <script type="text/javascript" src="stateUser.js"></script>
        <script type="text/javascript" src="coordinatesUser.js"></script>
        <script type="text/javascript" src="stateAndCoordinatesUserInterface.js"></script>
        <script type="text/javascript" src="logprinter/logPrinterModel.js"></script>
        <script type="text/javascript" src="connection.js"></script>
        <script type="text/javascript" src="connector.js"></script>
    </head>
    <body>
        <div id="pagetitle">
            <h1>Mission PREN T-30</h1>
        </div>
        <div id="stateview">
            
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
            </div>
            <div id="logview">
                <h2>Log</h2>
                <div id="logEntries">
                    
                </div>
            </div>
        </div>
        <script type="text/javascript">
            //main
            let connector = new Connector();
            let logprinter = new LogPrinterModel();
            connector.registerStateUser(logprinter);
        </script>
    </body>
</html>
