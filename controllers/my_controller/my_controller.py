left_wheel = None
right_wheel = None


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
  global curEnc
  curEnc = posSensor.getValue() / 3.1415 * 180.0
  if curEnc != curEnc:
    curEnc = 0
  return False

myRobot = Robot()
timeStep = 32
encObj = {}
lastEncReset = 0
lastTimeReset = 0
gyroEnable = False
curEnc = 0

left_wheel = myRobot.getMotor("left wheel")
encObj[left_wheel] = left_wheel.getPositionSensor()
left_wheel.setPosition(float("inf"))
encObj[left_wheel].enable(timeStep)

right_wheel = myRobot.getMotor("right wheel")
encObj[right_wheel] = right_wheel.getPositionSensor()
right_wheel.setPosition(float("inf"))
encObj[right_wheel].enable(timeStep)

gyroEnable = True
gyro = myRobot.getGyro('gyro')
gyro.enable(timeStep)
for count in range(2):
  getEncoders(encObj[left_wheel])
  lastEncReset = curEnc
  getEncoders(encObj[right_wheel])
  lastEncReset = curEnc
  print('Hiiiiiii')
  print(getEncoders(encObj[left_wheel]) or curEnc - lastEncReset)
  left_wheel.setVelocity(5)
  right_wheel.setVelocity(5)
  # Hello
  while myRobot.step(timeStep) != -1 and not (getEncoders(encObj[left_wheel]) or curEnc - lastEncReset) > 400:
    if gyroEnable:
      updateGyro()
    pass
  getEncoders(encObj[left_wheel])
  lastEncReset = curEnc
  getEncoders(encObj[right_wheel])
  lastEncReset = curEnc
  left_wheel.setVelocity(5)
  right_wheel.setVelocity(-5)
  while myRobot.step(timeStep) != -1 and not (getEncoders(encObj[left_wheel]) or curEnc - lastEncReset) > 167:
    if gyroEnable:
      updateGyro()
    print(getEncoders(encObj[left_wheel]) or curEnc - lastEncReset)
left_wheel.setVelocity(0)
right_wheel.setVelocity(0)

