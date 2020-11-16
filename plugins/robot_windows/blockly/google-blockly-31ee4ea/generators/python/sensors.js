Blockly.Python['sensors_initializegyro'] = function(block) {
  var text_sensortag = block.getFieldValue('sensorTag');
  var code = 'gyroEnable = True\ngyro = myRobot.getGyro(\'' + text_sensortag + '\')\ngyro.enable(timeStep)\n';
  return code;
};

Blockly.Python['sensors_initializegps'] = function(block) {
  var text_sensortag = block.getFieldValue('sensorTag');
  var code = 'gps = myRobot.getGPS(\'' + text_sensortag + '\')\ngps.enable(timeStep)\n';
  return code;
};

Blockly.Python['sensors_initializesensor'] = function(block) {//when multiple of these sensors can exist
  var dropdown_sensortype = block.getFieldValue('sensorType');
  var text_sensortag = block.getFieldValue('sensorTag');
  var variable_sensorname = Blockly.Python.variableDB_.getName(block.getFieldValue('sensorName'), Blockly.Variables.NAME_TYPE);
  var code = '';
  code += variable_sensorname + ' = myRobot.get';
  switch(dropdown_sensortype) {
    case 'lightSensor':
      code += 'Camera';
      break;
    case 'distanceSensor':
      code += 'DistanceSensor';
      break;
  }
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
  var code = 'getCookedDist(' + distSensor + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensors_getlightvals'] = function(block) {
  var lightSensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensorName'), Blockly.Variables.NAME_TYPE);
  var code = lightSensor + '.imageGetGray(' + lightSensor + '.getImage(),0,0,1)';
  return [code, Blockly.Python.ORDER_NONE];
};