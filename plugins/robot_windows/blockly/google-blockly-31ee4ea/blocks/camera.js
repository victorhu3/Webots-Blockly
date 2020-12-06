Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
	{
		"type": "camera_initializecamera",
		"message0": "initializeCamera %1 %2",
		"args0": [
			{
				"type": "field_variable",
				"name": "cam",
				"variable": "camera"
			},
			{
				"type": "field_input",
				"name": "camName",
				"text": "cameraName"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 230,
		"tooltip": "",
		"helpUrl": ""
	},
	
	{
	  "type": "camera_getrecognitionobjects",
	  "message0": "getRecognitionObjects %1",
	  "args0": [
		{
		  "type": "field_variable",
		  "name": "cam",
		  "variable": "camera"
		}
	  ],
	  "output": null,
	  "colour": 230,
	  "tooltip": "",
	  "helpUrl": ""
	},
	
	{
		"type": "camera_getnumobj",
		"message0": "getNumRecognitionObj %1",
		"args0": [
			{
				"type": "field_variable",
				"name": "cam",
				"variable": "camera"
			}
		],
		"output": null,
		"colour": 230,
		"tooltip": "",
		"helpUrl": ""
	},
	
	{
		"type": "camera_getobjcolors",
		"message0": "getObjColor %1",
		"args0": [
			{
				"type": "input_value",
				"name": "obj"
			}
		],
		"output": null,
		"colour": 230,
		"tooltip": "",
		"helpUrl": ""
	},
	
	{
		"type": "camera_getobjpos",
		"message0": "getObjPos %1",
		"args0": [
			{
				"type": "input_value",
				"name": "obj"
			}
		],
		"output": null,
		"colour": 230,
		"tooltip": "",
		"helpUrl": ""
	}
]);