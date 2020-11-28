'use strict';

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT

	{ //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2p6m9t
		"type": "motors_setupmotor",
		"message0": "setupMotor %1 %2",
		"args0": [
			{
				"type": "field_variable",
				"name": "motorObj",
				"variable": "motorObj"
			},
			{
				"type": "field_input",
				"name": "motorName",
				"text": "motorName"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 300,
		"tooltip": "",
		"helpUrl": ""
	},

  { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#6xnpm9
		"type": "motors_setspeed",
		"message0": "setSpeed %1 %2",
		"args0": [
			{
				"type": "field_variable",
				"name": "motorObj",
				"variable": "motorObj"
			},
			{
				"type": "field_number",
				"name": "motorSpeed",
				"value": 0
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 300,
		"tooltip": "",
		"helpUrl": ""
	},

	{ //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#juezom
		"type": "motors_resetencoders",
		"message0": "resetEncoders %1",
		"args0": [
			{
				"type": "field_variable",
				"name": "motorObj",
				"variable": "motorObj"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 270,
		"tooltip": "",
		"helpUrl": ""
	},

	{ //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#zvuud7
		"type": "motors_getencoders",
		"message0": "getEncoders %1",
		"args0": [
			{
				"type": "field_variable",
				"name": "motorObj",
				"variable": "motorObj"
			}
		],
		"output": null,
		"colour": 270,
		"tooltip": "",
		"helpUrl": ""
	},
	{ //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gtvgd9
		"type": "time_delay",
		"message0": "delay %1",
		"args0": [
			{
				"type": "field_number",
				"name": "ms",
				"value": 0
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 230,
		"tooltip": "",
		"helpUrl": ""
	},
	{ //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9iwcmr
		"type": "time_gettime",
		"message0": "getTime",
		"output": null,
		"colour": 230,
		"tooltip": "",
		"helpUrl": ""
	},
	{ //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ch66ck
		"type": "time_resettime",
		"message0": "resetTime",
		"previousStatement": null,
		"nextStatement": null,
		"colour": 230,
		"tooltip": "",
		"helpUrl": ""
	}
]);
