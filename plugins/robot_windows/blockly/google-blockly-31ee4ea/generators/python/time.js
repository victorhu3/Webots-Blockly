Blockly.Python['time_delay'] = function(block) {
  var value_ms = Blockly.Python.valueToCode(block, 'ms', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'initTime = myRobot.getTime()\n' +
             'while myRobot.step(timeStep) != -1:\n' +
             '  if (myRobot.getTime() - initTime) * 1000.0 > ' + value_ms + ':\n' +
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
