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
	  "tooltip": "Enter sensor tag",
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
	  "tooltip": "Enter sensor tag",
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
	          "lightSensor",
	          "lightSensor"
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
	  "tooltip": "Choose sensor type; enter sensor tag; create a variable for this sensor",
	  "helpUrl": ""
	},
	{//blockly-demo.appspot.com/static/demos/blockfactory/index.html#frv8ow
	  "type": "sensors_getgpsvals",
	  "message0": "getGPSVals",
	  "output": null,
	  "colour": sensorColor,
	  "tooltip": "returns a list w/ x-val, y-val, z-val",
	  "helpUrl": ""
	},
	{//blockly-demo.appspot.com/static/demos/blockfactory/index.html#2fp54a
	  "type": "sensors_getgyrovals",
	  "message0": "getGyroVals",
	  "output": null,
	  "colour": sensorColor,
	  "tooltip": "returns angle",
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
	  "tooltip": "returns distance in cm",
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
	  "tooltip": "Paramaeters: color sensor variable \n Output: returns array of size 3 with rgb values represented by integer between 0 and 255",
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
	  "tooltip": "Paramaeters: color sensor variable \n Output: returns grayscale value represented by integer between 0 and 255",
	  "helpUrl": ""
	}
]);
