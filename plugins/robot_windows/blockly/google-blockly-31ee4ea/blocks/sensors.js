'use strict';

var sensorColor = 60

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
	{//blockly-demo.appspot.com/static/demos/blockfactory/index.html#9g4iqu
	  "type": "sensors_initializegyro",
	  "message0": "initializeGyro %1",
	  "args0": [
	    {
	      "type": "field_input",
	      "name": "sensorTag",
	      "text": ""
	    }
	  ],
	  "previousStatement": null,
	  "nextStatement": null,
	  "colour": sensorColor,
	  "tooltip": "DESCRIPTION: Initializes gyro  \nPARAMETERS: Sensor tag  \nRETURN: None",
	  "helpUrl": ""
	},
	{//blockly-demo.appspot.com/static/demos/blockfactory/index.html#of94vp
	  "type": "sensors_initializegps",
	  "message0": "initializeGPS %1",
	  "args0": [
	    {
	      "type": "field_input",
	      "name": "sensorTag",
	      "text": ""
	    }
	  ],
	  "previousStatement": null,
	  "nextStatement": null,
	  "colour": sensorColor,
	  "tooltip": "DESCRIPTION: Initializes GPS  \nPARAMETERS: Sensor tag  \nRETURN: None",
	  "helpUrl": ""
	},
	{//blockly-demo.appspot.com/static/demos/blockfactory/index.html#ezrcan
	  "type": "sensors_initializesensor",
	  "message0": "initializeOtherSensor %1 %2 %3",
	  "args0": [
	    {
	      "type": "field_dropdown",
	      "name": "sensorType",
	      "options": [
	        [
	          "colorSensor",
	          "colorSensor"
	        ],
	        [
	          "distanceSensor",
	          "distanceSensor"
	        ]
	      ]
	    },
	    {
	      "type": "field_input",
	      "name": "sensorTag",
	      "text": ""
	    },
	    {
	      "type": "field_variable",
	      "name": "sensorName",
	      "variable": "sensor1"
	    }
	  ],
	  "previousStatement": null,
	  "nextStatement": null,
	  "colour": sensorColor,
	  "tooltip": "DESCRIPTION: Initializes distance or color sensor  \nPARAMETERS: Sensor type | Sensor tag | Sensor variable  \nRETURN: None",
	  "helpUrl": ""
	},
	{//blockly-demo.appspot.com/static/demos/blockfactory/index.html#frv8ow
	  "type": "sensors_getgpsvals",
	  "message0": "getGPSVals",
	  "output": null,
	  "colour": sensorColor,
	  "tooltip": "DESCRIPTION: Returns GPS-based location of robot as a list \nPARAMETERS: None  \nRETURN: List w/ x-val, y-val, z-val",
	  "helpUrl": ""
	},
	{//blockly-demo.appspot.com/static/demos/blockfactory/index.html#2fp54a
	  "type": "sensors_getgyrovals",
	  "message0": "getGyroVals",
	  "output": null,
	  "colour": sensorColor,
	  "tooltip": "DESCRIPTION: Returns current angle of robot relative to its starting angle \nPARAMETERS: None  \nRETURN: Angle in degrees (angle can exceed 360 degrees if the robot made more than one full rotation)",
	  "helpUrl": ""
	},
	{//blockly-demo.appspot.com/static/demos/blockfactory/index.html#s4uci3
	  "type": "sensors_getdistvals",
	  "message0": "getDist %1",
	  "args0": [
	    {
	      "type": "field_variable",
	      "name": "sensorName",
	      "variable": "sensor1"
	    }
	  ],
	  "output": null,
	  "colour": sensorColor,
	  "tooltip": "DESCRIPTION: Returns distance based on the inputed distance sensor \nPARAMETERS: Distance sensor variable  \nRETURN: distance in cm",
	  "helpUrl": ""
	},
	{//blockly-demo.appspot.com/static/demos/blockfactory/index.html#7wopkw
	  "type": "sensors_getcolor",
	  "message0": "getColor %1",
	  "args0": [
	    {
	      "type": "field_variable",
	      "name": "sensorName",
	      "variable": "sensor1"
	    }
	  ],
	  "output": null,
	  "colour": sensorColor,
	  "tooltip": "DESCRIPTION: Returns red, green, blue values based on the inputed color sensor \nPARAMETERS: Color sensor variable  \nRETURN: List w/ red, green, and blue values where each value in the list is an integer between 0 and 255",
	  "helpUrl": ""
	},
	{//blockly-demo.appspot.com/static/demos/blockfactory/index.html#7wopkw
	  "type": "sensors_getgray",
	  "message0": "getGray %1",
	  "args0": [
	    {
	      "type": "field_variable",
	      "name": "sensorName",
	      "variable": "sensor1"
	    }
	  ],
	  "output": null,
	  "colour": sensorColor,
	  "tooltip": "DESCRIPTION: Returns brightness based on the inputed color sensor \nPARAMETERS: Color sensor variable  \nRETURN: brightness as an integer value between 0 and 255",
	  "helpUrl": ""
	}
]);
