'use strict';

var timeColor = 80

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
	{ //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#fya36y
		"type": "time_delay",
		"message0": "delay %1 ms",
		"args0": [
			{
				"type": "input_value",
				"name": "ms"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": timeColor,
		"tooltip": "",
		"helpUrl": ""
	},
	{ //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9iwcmr
		"type": "time_gettime",
		"message0": "getTime",
		"output": null,
		"colour": timeColor,
		"tooltip": "",
		"helpUrl": ""
	},
	{ //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ch66ck
		"type": "time_resettime",
		"message0": "resetTime",
		"previousStatement": null,
		"nextStatement": null,
		"colour": timeColor,
		"tooltip": "",
		"helpUrl": ""
	}
]);