var motor = 0;
var enc = 1;

Blockly.Python['motors_setupmotor'] = function(block) {
  var variable_motorObj = Blockly.Python.variableDB_.getName(block.getFieldValue('motorObj'), Blockly.Variables.NAME_TYPE);
  var text_motorName = block.getFieldValue('motorName');
  // TODO: Assemble Python into code variable.
  var code = variable_motorObj + ' = myRobot.getMotor(\"' + text_motorName + '\")\n' + 
             'encObj[' + variable_motorObj + '] = ' + variable_motorObj + '.getPositionSensor()\n' +
             variable_motorObj + '.setPosition(float(\"inf\"))\n' + 
             'encObj[' + variable_motorObj + '].enable(timeStep)\n\n';
  return code;
};

Blockly.Python['motors_setspeed'] = function(block) {
  var variable_motorObj = Blockly.Python.variableDB_.getName(block.getFieldValue('motorObj'), Blockly.Variables.NAME_TYPE);
  var number_motorSpeed = block.getFieldValue('motorSpeed');
  // TODO: Assemble Python into code variable.
  var code = variable_motorObj + '.setVelocity(' + number_motorSpeed + ')\n';
  return code;
};

Blockly.Python['motors_resetencoders'] = function(block) {
  var variable_motorObj = Blockly.Python.variableDB_.getName(block.getFieldValue('motorObj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'getEncoders(encObj[' + variable_motorObj + '])\n' + 
             'lastEncReset = curEnc\n';
  return code;
};

Blockly.Python['motors_getencoders'] = function(block) {
  var variable_motorObj = Blockly.Python.variableDB_.getName(block.getFieldValue('motorObj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'getEncoders(encObj[' + variable_motorObj + ']) or curEnc - lastEncReset'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['time_delay'] = function(block) {
  var number_ms = block.getFieldValue('ms');
  // TODO: Assemble Python into code variable.
  var code = 'initTime = myRobot.getTime()\n' +
             'while myRobot.step(timeStep) != -1:\n' +
             '  if (myRobot.getTime() - initTime) * 1000.0 > ' + number_ms + ':\n' +
             '    break\n';
  return code;
};

Blockly.Python['time_gettime'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '(myRobot.getTime() - lastTimeReset) * 1000.0';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['time_resettime'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'lastTimeReset = myRobot.getTime()\n';
  return code;
};

//At setup:
// import all files
// motorObj = {}
// encObj = {}
// lastEncReset = 0
// lastTimeReset = 0
// curEnc = 0
// def getEncoders(posSensor):
//   global curEnc
//   curEnc = posSensor.getValue() / 3.1415 * 180.0
//   if curEnc != curEnc:
//     curEnc = 0
//   return False