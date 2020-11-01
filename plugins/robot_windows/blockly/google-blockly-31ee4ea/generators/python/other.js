Blockly.Python['other_start'] = function(block) {
  var code = 'from controller import Robot\n';
  code += 'from controller import GPS\n' + 'from controller import LightSensor\n' + 'from controller import Motor\n' + 'from controller import PositionSensor\n' +
          'from controller import Gyro\n\n';
  //extra functions for gyro
  code += 'internal_angle = 0\n\n' +
          '#updates angle variable according to angular velocity from gyro\n' +
          '#angleCurrent = anglePast + integral of angular velocity over one timeStep since last updated angle\n' +
          '#should be called every time main loop repeats\n' +
          'def updateGyro():\n' +
          ' global internal_angle\n' + 
          ' internal_angle += (timeStep / 1000.0) * (gyro.getValues())[1]\n\n' +
          '#returns current angle of robot relative to starting angle\n' +
          '#angle does not drop to 0 after exceeding 360\n' +
          '#angle % 360 will yield relative angle with maximum 360\n' +
          'def getAngle():\n' +
          ' return internal_angle * 180 / 3.1415\n\n';
   //extra functions for distance sensor
  code += 'def getDist(internal_distSensor):\n' +
          '    distTable = internal_distSensor.getLookupTable()\n' +
          '    distRawVal = internal_distSensor.getValue()\n' +
          '    if distRawVal <= distTable[len(distTable) - 1][1]: #rawVal too small --> maxDist\n' +
          '        return distTable[len(distTable) - 1][0]\n' +
          '    if distRawVal >= distTable[0][1]: #rawVal too large --> minDist\n' +
          '        return distTable[0][0]\n' +
          '\n' +
          '    i = 0\n' +
          '    for x in distTable:\n' +
          '        if x[1] <= distRawVal:\n' +
          '            break\n' +
          '        i += 1\n' +
          '    return (distTable[i-1][1]-distRawVal)/(distTable[i-1][1]-distTable[i][1]) * (distTable[i][0]-distTable[i-1][0]) + distTable[i-1][0]\n' + 
          'def getEncoders(posSensor):\n' +
          '  global curEnc\n' +
          '  curEnc = posSensor.getValue() / 3.1415 * 180.0\n' +
          '  if curEnc != curEnc:\n' +
          '    curEnc = 0\n' +
          '  return False\n\n' +
          'myRobot = Robot()\n' +
          'timeStep = 32\n' +
          'encObj = {}\n' +
          'lastEncReset = 0\n' +
          'lastTimeReset = 0\n' +
          'gyroEnable = False\n' +
          'curEnc = 0\n\n';
  return code;
};

Blockly.Python['other_end'] = function(block) {
  var code = '';
  return code;
};

//REMEMBER TO ADD UPDATE GYRO TO LOOP
