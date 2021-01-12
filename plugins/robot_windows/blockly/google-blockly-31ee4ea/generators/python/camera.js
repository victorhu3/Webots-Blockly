Blockly.Python['camera_initializecamera'] = function(block) {
  var variable_cam = Blockly.Python.variableDB_.getName(block.getFieldValue('cam'), Blockly.Variables.NAME_TYPE);
  var text_camname = block.getFieldValue('camName');
  // TODO: Assemble Python into code variable.
  var code = variable_cam + ' = myRobot.getDevice(\'' + text_camname + '\')\n' +
						 variable_cam + '.recognitionEnable(timeStep)\n';
  return code;
};

Blockly.Python['camera_getrecognitionobjects'] = function(block) {
  var variable_cam = Blockly.Python.variableDB_.getName(block.getFieldValue('cam'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_cam + '.getRecognitionObjects()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['camera_getnumobj'] = function(block) {
  var variable_cam = Blockly.Python.variableDB_.getName(block.getFieldValue('cam'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_cam + '.getRecognitionNumberOfObjects()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['camera_getobjcolors'] = function(block) {
  var value_obj = Blockly.Python.valueToCode(block, 'obj', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_obj + '.get_colors()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['camera_getobjpos'] = function(block) {
  var value_obj = Blockly.Python.valueToCode(block, 'obj', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_obj + '.get_position()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['camera_getobjang'] = function(block) {
  var value_obj = Blockly.Python.valueToCode(block, 'obj', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'getObjAng(' + value_obj + '.get_position())';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/*
Solid {
  translation -1.26 0 0
  scale 3 3 3
  children [
    Shape {
      geometry Cone {
        bottomRadius 0.05
        height 0.1
      }
    }
  ]
  recognitionColors [
    0 0 0
  ]
}
*/