Blockly.Python['other_start'] = function(block) {
  var code = 'from controller import Robot\n';
  code += 'from controller import GPS\n' + 'from controller import LightSensor\n' + 'from controller import Motor\n' + 'from controller import PositionSensor\n' +
          'from controller import Gyro\n' + 'import math\n\n' + 'kernel_size = 10\n' + 'internal_angle = 0.0\n\n'
  //extra functions for color sensor
  code += 'def getLSColor(camImg):\n' +
			' global kernel_size\n' +
			' rgb = [0] * 3\n' +
			' for x in range(0,kernel_size):\n' +
			'  for y in range(0,kernel_size):\n' +
			'   for i in range(0,3):\n' +
			'    rgb[i] += camImg[x][y][i]\n' +
			' for i in range(0,3):\n' +
			'  rgb[i] = int(rgb[i]/(kernel_size*kernel_size))\n' +
			' return rgb\n' +
			'def getLSGray(camImg):\n' +
			' global kernel_size\n' +
			' gray = 0\n' +
			' for x in range(0,kernel_size):\n' +
			'  for y in range(0,kernel_size):\n' +
			'   for i in range(0,3):\n' +
			'    gray += camImg[x][y][i]\n' +
			' gray = int(gray/(3*kernel_size*kernel_size))\n' +
			' return gray\n\n'
  //extra functions for gyro
  code += '#updates angle variable according to angular velocity from gyro\n' +
          '#angleCurrent = anglePast + integral of angular velocity over one timeStep since last updated angle\n' +
          '#should be called every time main loop repeats\n' +
          'def updateGyro():\n' +
          ' global internal_angle\n' +
          ' internal_angle += (timeStep / 1000.0) * (gyro.getValues())[1]\n\n' +
          '#returns current angle of robot relative to starting angle\n' +
          '#angle does not drop to 0 after exceeding 360\n' +
          '#angle % 360 will yield relative angle with maximum 360\n' +
          'def getAngle():\n' +
          ' global internal_angle\n' +
          ' return internal_angle * 180.0 / 3.1415\n\n';
   //extra functions for distance sensor
  code += /*'def getCookedDist(internal_sensor):\n' +
          '    lookupTable = internal_sensor.getLookupTable()\n' +
          '    rawVal = internal_sensor.getValue()\n' +
          '    if rawVal <= lookupTable[len(lookupTable) - 2]: #rawVal too small --> maxDist\n' +
          '        return lookupTable[len(lookupTable) - 3]\n' +
          '    if rawVal >= lookupTable[1]: #rawVal too large --> minDist\n' +
          '        return lookupTable[0]\n' +
          '    i = 0\n' +
          '    for x in range(0, len(lookupTable), 3):\n' +
          '        if lookupTable[x + 1] <= rawVal:\n' +
          '            break\n' +
          '        i += 1\n' +
          '    return (lookupTable[(i-1)*3+1]-rawVal)/(lookupTable[(i-1)*3+1]-lookupTable[i*3+1]) * (lookupTable[i*3]-lookupTable[(i-1)*3]) + lookupTable[(i-1)*3]\n' +
          '\n' +*/
          'def getEncoders(posSensor):\n' +
          '  global encCount\n' +
          '  encCount[posSensor] = posSensor.getValue() / 3.1415 * 180.0\n' +
          '  if encCount[posSensor] != encCount[posSensor]:\n' +
          '    encCount[posSensor] = 0\n' +
          '  return False\n\n' +
					'def getObjAng(coord):\n' +
					'    ang = math.degrees(math.atan(coord[0]/math.fabs(coord[2])))\n' +
					'    return ang\n\n' +
          'myRobot = Robot()\n' +
          'timeStep = 32\n' +
          'encObj = {}\n' +
          'lastTimeReset = 0\n' +
          'gyroEnable = False\n' +
          'encCount = {}\n' +
          'lastEncReset = {}\n' +
					'myRobot.step(timeStep)\n\n';
  return code;
};

Blockly.Python['other_end'] = function(block) {
  var code = '';
  return code;
};

Blockly.Python['other_text'] = function(block) {
  // Text value.
  var code = Blockly.Python.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//REMEMBER TO ADD UPDATE GYRO TO LOOP