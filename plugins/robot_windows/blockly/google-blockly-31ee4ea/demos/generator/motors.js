var motor = 0;
var enc = 1;
function motorInd(motorName, ind){
  return 'motorObj[\"' + motorName + '\"][' + ind + ']';
};

Blockly.Python['motors_setupmotor'] = function(block) {
  var text_motorName = block.getFieldValue('motorName');
  // TODO: Assemble Python into code variable.
  var code = 'motor0 = myRobot.getMotor(\"' + text_motorName + '\")\n' + 
             'encoder0 = motor0.getPositionSensor()\n' +
             'motorEncTup = (motor0, encoder0)\n' +
             'motorObj[\"' + text_motorName + '\"] = motorEncTup\n' +
             motorInd(text_motorName, motor) + '.setPosition(float(\"inf\"))\n' + 
             motorInd(text_motorName, enc) + '.enable(timeStep)\n\n';
  return code;
};

Blockly.Python['motors_setspeed'] = function(block) {
  var text_motorName = block.getFieldValue('motorName');
  var number_motorSpeed = block.getFieldValue('motorSpeed');
  // TODO: Assemble Python into code variable.
  var code = motorInd(text_motorName, motor) + '.setVelocity(' + number_motorSpeed + ')\n';
  return code;
};

Blockly.Python['motors_resetencoders'] = function(block) {
  var text_motorName = block.getFieldValue('motorName');
  // TODO: Assemble Python into code variable.
  var code = 'getEncoders(' + motorInd(text_motorName, enc) + ')\n' + 
             'lastEncReset = curEnc\n';
  return code;
};

Blockly.Python['motors_getencoders'] = function(block) {
  var text_motorName = block.getFieldValue('motorName');
  // TODO: Assemble Python into code variable.
  var code = 'getEncoders(' + motorInd(text_motorName, enc) + ') or curEnc - lastEncReset'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['start'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from controller import Robot\n' + 
             'from controller import Motor\n\n' +
             'def getEncoders(posSensor):\n' +
             '  global curEnc\n' +
             '  curEnc = posSensor.getValue() / 3.1415 * 180.0\n' +
             '  if curEnc != curEnc:\n' +
             '    curEnc = 0\n' +
             '  return False\n\n' +
             'myRobot = Robot()\n' +
             'timeStep = 32\n' +
             'motorObj = {}\n' +
             'encObj = {}\n' +
             'lastEncReset = 0\n' +
             'curEnc = 0\n\n';
  return code;
};

//At setup:
// import all files
// motorObj = {}
// encObj = {}
// lastEncReset = 0
// curEnc = 0
// def getEncoders(posSensor):
//   global curEnc
//   curEnc = posSensor.getValue() / 3.1415 * 180.0
//   if curEnc != curEnc:
//     curEnc = 0
//   return False