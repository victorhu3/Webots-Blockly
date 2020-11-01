from controller import Robot
from controller import Motor

def getEncoders(posSensor):
  global curEnc
  curEnc = posSensor.getValue() / 3.1415 * 180.0
  if curEnc != curEnc:
    curEnc = 0
  return False

myRobot = Robot()
timeStep = 32
motorObj = {}
encObj = {}
lastEncReset = 0
lastTimeReset = 0
curEnc = 0

motor0 = myRobot.getMotor("left wheel")
encoder0 = motor0.getPositionSensor()
motorEncTup = (motor0, encoder0)
motorObj["left wheel"] = motorEncTup
motorObj["left wheel"][0].setPosition(float("inf"))
motorObj["left wheel"][1].enable(timeStep)

motor0 = myRobot.getMotor("right wheel")
encoder0 = motor0.getPositionSensor()
motorEncTup = (motor0, encoder0)
motorObj["right wheel"] = motorEncTup
motorObj["right wheel"][0].setPosition(float("inf"))
motorObj["right wheel"][1].enable(timeStep)

motorObj["left wheel"][0].setVelocity(5)
motorObj["right wheel"][0].setVelocity(5)
initTime = myRobot.getTime()
while myRobot.step(timeStep) != -1:
  if (myRobot.getTime() - initTime) * 1000.0 > 1000:
    break

