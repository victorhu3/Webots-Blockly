Blockly.Python['sensors_initializegyro'] = function(block) {
  var text_sensortag = block.getFieldValue('sensorTag');
  var code = 'gyroEnable = True\ngyro = myRobot.getDevice(\'' + text_sensortag + '\')\ngyro.enable(timeStep)\n';
  return code;
};

Blockly.Python['sensors_initializegps'] = function(block) {
  var text_sensortag = block.getFieldValue('sensorTag');
  var code = 'gps = myRobot.getDevice(\'' + text_sensortag + '\')\ngps.enable(timeStep)\n';
  return code;
};

Blockly.Python['sensors_initializesensor'] = function(block) {//when multiple of these sensors can exist
  var dropdown_sensortype = block.getFieldValue('sensorType');
  var text_sensortag = block.getFieldValue('sensorTag');
  var variable_sensorname = Blockly.Python.variableDB_.getName(block.getFieldValue('sensorName'), Blockly.Variables.NAME_TYPE);
  var code = '';
  code += variable_sensorname + ' = myRobot.getDevice';
  code += '(\'' + text_sensortag + '\')\n' + variable_sensorname + '.enable(timeStep) \n';
  return code;
};

Blockly.Python['sensors_getgpsvals'] = function(block) {
  var code = 'gps.getValues()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensors_getgyrovals'] = function(block) {
  var code = 'getAngle()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensors_getdistvals'] = function(block) {
  var distSensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensorName'), Blockly.Variables.NAME_TYPE);
  var code = distSensor + '.getValue()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensors_getcolor'] = function(block) {
  var colorSensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensorName'), Blockly.Variables.NAME_TYPE);
  var code = 'getLSColor(' + colorSensor + '.getImageArray())';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensors_getgray'] = function(block) {
  var colorSensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensorName'), Blockly.Variables.NAME_TYPE);
  var code = 'getLSGray(' + colorSensor + '.getImageArray())';
  return [code, Blockly.Python.ORDER_NONE];
};