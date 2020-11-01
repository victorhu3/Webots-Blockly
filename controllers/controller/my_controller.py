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

