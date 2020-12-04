lm = None
distSensor = None
rm = None


from controller import Robot
from controller import GPS
from controller import LightSensor
from controller import Motor
from controller import PositionSensor
from controller import Gyro

internal_angle = 0.0

#updates angle variable according to angular velocity from gyro
#angleCurrent = anglePast + integral of angular velocity over one timeStep since last updated angle
#should be called every time main loop repeats
def updateGyro():
 global internal_angle
 internal_angle += (timeStep / 1000.0) * (gyro.getValues())[1]

#returns current angle of robot relative to starting angle
#angle does not drop to 0 after exceeding 360
#angle % 360 will yield relative angle with maximum 360
def getAngle():
 global internal_angle
 return internal_angle * 180.0 / 3.1415

def getCookedDist(internal_sensor):
    lookupTable = internal_sensor.getLookupTable()
    rawVal = internal_sensor.getValue()
    if rawVal <= lookupTable[len(lookupTable) - 2]: #rawVal too small --> maxDist
        return lookupTable[len(lookupTable) - 3]
    if rawVal >= lookupTable[1]: #rawVal too large --> minDist
        return lookupTable[0]
    i = 0
    for x in range(0, len(lookupTable), 3):
        if lookupTable[x + 1] <= rawVal:
            break
        i += 1
    return (lookupTable[(i-1)*3+1]-rawVal)/(lookupTable[(i-1)*3+1]-lookupTable[i*3+1]) * (lookupTable[i*3]-lookupTable[(i-1)*3]) + lookupTable[(i-1)*3]

def getEncoders(posSensor):
  global encCount
  encCount[posSensor] = posSensor.getValue() / 3.1415 * 180.0
  if encCount[posSensor] != encCount[posSensor]:
    encCount[posSensor] = 0
  return False

myRobot = Robot()
timeStep = 32
encObj = {}
lastTimeReset = 0
gyroEnable = False
encCount = {}
lastEncReset = {}

lm = myRobot.getMotor("left wheel")
encObj[lm] = lm.getPositionSensor()
lm.setPosition(float("inf"))
lm.setVelocity(0)
encObj[lm].enable(timeStep)
encCount[lm] = 0
lastEncReset[encObj[lm]] = 0

rm = myRobot.getMotor("right wheel")
encObj[rm] = rm.getPositionSensor()
rm.setPosition(float("inf"))
rm.setVelocity(0)
encObj[rm].enable(timeStep)
encCount[rm] = 0
lastEncReset[encObj[rm]] = 0

distSensor = myRobot.getDistanceSensor('distance sensor')
distSensor.enable(timeStep)
for count in range(4):
  lm.setVelocity(3)
  rm.setVelocity(3)
  initTime = myRobot.getTime()
  while myRobot.step(timeStep) != -1:
    if (myRobot.getTime() - initTime) * 1000.0 > 3000:
      break
  while myRobot.step(timeStep) != -1 and (getCookedDist(distSensor)
  ) < 0.365:
    if gyroEnable:
      updateGyro()
    pass
  initTime = myRobot.getTime()
  while myRobot.step(timeStep) != -1:
    if (myRobot.getTime() - initTime) * 1000.0 > 850:
      break
  lm.setVelocity(0)
  rm.setVelocity(0)
  initTime = myRobot.getTime()
  while myRobot.step(timeStep) != -1:
    if (myRobot.getTime() - initTime) * 1000.0 > 500:
      break
  lm.setVelocity(3)
  rm.setVelocity(-3)
  getEncoders(encObj[lm])
  lastEncReset[encObj[lm]] = encCount[encObj[lm]]
  while myRobot.step(timeStep) != -1 and (getEncoders(encObj[lm]) or encCount[encObj[lm]] - lastEncReset[encObj[lm]]) < 153:
    if gyroEnable:
      updateGyro()
    pass
  lm.setVelocity(0)
  rm.setVelocity(0)
  initTime = myRobot.getTime()
  while myRobot.step(timeStep) != -1:
    if (myRobot.getTime() - initTime) * 1000.0 > 500:
      break

print(getCookedDist(distSensor))