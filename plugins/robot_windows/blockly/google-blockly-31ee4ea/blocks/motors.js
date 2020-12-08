'use strict';

var motorColor = 120

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
		"colour": motorColor,
		"tooltip": "",
		"helpUrl": ""
	},

  { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#qe5635
		"type": "motors_setspeed",
		"message0": "setSpeed %1 %2 %%",
		"args0": [
			{
				"type": "field_variable",
				"name": "motorObj",
				"variable": "motorObj"
			},
			{
				"type": "input_value",
				"name": "motorSpeed"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": motorColor,
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
		"colour": motorColor,
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
		"colour": motorColor,
		"tooltip": "",
		"helpUrl": ""
	}
]);