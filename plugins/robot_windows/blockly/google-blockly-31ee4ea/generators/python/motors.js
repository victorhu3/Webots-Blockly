var motor = 0;
var enc = 1;

Blockly.Python['motors_setupmotor'] = function(block) {
  var variable_motorObj = Blockly.Python.variableDB_.getName(block.getFieldValue('motorObj'), Blockly.Variables.NAME_TYPE);
  var text_motorName = block.getFieldValue('motorName');
  // TODO: Assemble Python into code variable.
  var code = variable_motorObj + ' = myRobot.getMotor(\"' + text_motorName + '\")\n' + 
             'encObj[' + variable_motorObj + '] = ' + variable_motorObj + '.getPositionSensor()\n' +
             variable_motorObj + '.setPosition(float(\"inf\"))\n' +
             variable_motorObj + '.setVelocity(0)\n' +
             'encObj[' + variable_motorObj + '].enable(timeStep)\n' +
             'encCount[' + variable_motorObj + '] = 0\n' +
             'lastEncReset[encObj[' + variable_motorObj + ']] = 0\n\n';
  return code;
};

Blockly.Python['motors_setspeed'] = function(block) {
  var variable_motorObj = Blockly.Python.variableDB_.getName(block.getFieldValue('motorObj'), Blockly.Variables.NAME_TYPE);
  var number_motorSpeed = block.getFieldValue('motorSpeed');
  // TODO: Assemble Python into code variable.
  var code = variable_motorObj + '.setVelocity((' + number_motorSpeed + ' / 100.0) * ' + variable_motorObj + '.getMaxVelocity())\n';
  return code;
};

Blockly.Python['motors_resetencoders'] = function(block) {
  var variable_motorObj = Blockly.Python.variableDB_.getName(block.getFieldValue('motorObj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'getEncoders(encObj[' + variable_motorObj + '])\n' + 
             'lastEncReset[encObj[' + variable_motorObj + ']] = encCount[encObj[' + variable_motorObj + ']]\n';
  return code;
};

Blockly.Python['motors_getencoders'] = function(block) {
  var variable_motorObj = Blockly.Python.variableDB_.getName(block.getFieldValue('motorObj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'getEncoders(encObj[' + variable_motorObj + ']) or encCount[encObj[' + variable_motorObj + ']] - lastEncReset[encObj[' + variable_motorObj + ']]'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};