lm = None
rm = None


from controller import Robot
from controller import GPS
from controller import LightSensor
from controller import Motor
from controller import PositionSensor
from controller import Gyro

internal_angle = 0

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
 return internal_angle * 180 / 3.1415

def getDist(internal_distSensor):
    distTable = internal_distSensor.getLookupTable()
    distRawVal = internal_distSensor.getValue()
    if distRawVal <= distTable[len(distTable) - 1][1]: #rawVal too small --> maxDist
        return distTable[len(distTable) - 1][0]
    if distRawVal >= distTable[0][1]: #rawVal too large --> minDist
        return distTable[0][0]

    i = 0
    for x in distTable:
        if x[1] <= distRawVal:
            break
        i += 1
    return (distTable[i-1][1]-distRawVal)/(distTable[i-1][1]-distTable[i][1]) * (distTable[i][0]-distTable[i-1][0]) + distTable[i-1][0]
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

lm.setVelocity(3)
rm.setVelocity(1)
while myRobot.step(timeStep) != -1 and (getEncoders(encObj[lm]) or encCount[encObj[lm]] - lastEncReset[encObj[lm]]) < 300:
  if gyroEnable:
    updateGyro()
  print(getEncoders(encObj[lm]) or encCount[encObj[lm]] - lastEncReset[encObj[lm]])
getEncoders(encObj[rm])
lastEncReset[encObj[rm]] = encCount[encObj[rm]]
print(getEncoders(encObj[rm]) or encCount[encObj[rm]] - lastEncReset[encObj[rm]])

