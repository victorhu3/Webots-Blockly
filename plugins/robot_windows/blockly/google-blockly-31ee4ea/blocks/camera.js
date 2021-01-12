var cameraColour = '#AABBCC'
//"DESCRIPTION: \nPARAMETERS: | \nRETURN: : ",

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
		"colour": cameraColour,
		"tooltip": "DESCRIPTION: Initializes camera sensor\nPARAMETERS: Camera variable | Camera name\nRETURN: None",
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
	  "colour": cameraColour,
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
		"colour": cameraColour,
		"tooltip": "DESCRIPTION: Returns list of all Recognition Objects in camera view\nPARAMETERS: Camera variable\nRETURN: List of Recognition Objects",
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
		"colour": cameraColour,
		"tooltip": "DESCRIPTION: Returns Recognition Colors of a Recognition Object\nPARAMETERS: Recognition Object\nRETURN: 3-element list representing RGB values: Out of 255",
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
		"colour": cameraColour,
		"tooltip": "DESCRIPTION: Returns position of a Recognition Object\nPARAMETERS: Recognition Object\nRETURN: 3-element list representing XYZ coordinates relative to robot's forward line of vision: In meters",
		"helpUrl": ""
	},
	{
		"type": "camera_getobjang",
		"message0": "getAngleToObj %1",
		"args0": [
			{
				"type": "input_value",
				"name": "obj"
			}
		],
		"output": null,
		"colour": cameraColour,
		"tooltip": "DESCRIPTION: Returns angle offset of a Recognition Object\nPARAMETERS: Recognition Object\nRETURN: Angle relative to robot's forward line of vision: -90 to 90 degrees",
		"helpUrl": ""
	}
]);