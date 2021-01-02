lm = None
rm = None
ls = None
savedAngle = None


from controller import Robot
from controller import GPS
from controller import LightSensor
from controller import Motor
from controller import PositionSensor
from controller import Gyro

kernel_size = 10
internal_angle = 0.0

def getLSColor(camImg):
 global kernel_size
 rgb = [0] * 3
 for x in range(0,kernel_size):
  for y in range(0,kernel_size):
   for i in range(0,3):
    rgb[i] += camImg[x][y][i]
 for i in range(0,3):
  rgb[i] = int(rgb[i]/(kernel_size*kernel_size))
 return rgb
def getLSGray(camImg):
 global kernel_size
 gray = 0
 for x in range(0,kernel_size):
  for y in range(0,kernel_size):
   for i in range(0,3):
    gray += camImg[x][y][i]
 gray = int(gray/(3*kernel_size*kernel_size))
 return gray

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
myRobot.step(timeStep)

lm = myRobot.getDevice("left wheel")
encObj[lm] = lm.getPositionSensor()
lm.setPosition(float("inf"))
lm.setVelocity(0)
encObj[lm].enable(timeStep)
encCount[lm] = 0
lastEncReset[encObj[lm]] = 0

rm = myRobot.getDevice("right wheel")
encObj[rm] = rm.getPositionSensor()
rm.setPosition(float("inf"))
rm.setVelocity(0)
encObj[rm].enable(timeStep)
encCount[rm] = 0
lastEncReset[encObj[rm]] = 0

ls = myRobot.getDevice('light sensor')
ls.enable(timeStep)
gyroEnable = True
gyro = myRobot.getDevice('gyro')
gyro.enable(timeStep)
for count in range(4):
  lm.setVelocity((30 / 100.0) * lm.getMaxVelocity())
  rm.setVelocity((30 / 100.0) * rm.getMaxVelocity())
  initTime = myRobot.getTime()
  while myRobot.step(timeStep) != -1:
    if (myRobot.getTime() - initTime) * 1000.0 > 2000:
      break
  while myRobot.step(timeStep) != -1 and (getLSGray(ls.getImageArray())) > 15:
    if gyroEnable:
      updateGyro()
    print(getLSColor(ls.getImageArray()))
  initTime = myRobot.getTime()
  while myRobot.step(timeStep) != -1:
    if (myRobot.getTime() - initTime) * 1000.0 > 1000:
      break
  lm.setVelocity((0 / 100.0) * lm.getMaxVelocity())
  rm.setVelocity((0 / 100.0) * rm.getMaxVelocity())
  initTime = myRobot.getTime()
  while myRobot.step(timeStep) != -1:
    if (myRobot.getTime() - initTime) * 1000.0 > 500:
      break
  lm.setVelocity((30 / 100.0) * lm.getMaxVelocity())
  rm.setVelocity(((-30) / 100.0) * rm.getMaxVelocity())
  savedAngle = getAngle()
  while myRobot.step(timeStep) != -1 and (((savedAngle - (getAngle())) % 360)) < 85:
    if gyroEnable:
      updateGyro()
    pass
  lm.setVelocity((0 / 100.0) * lm.getMaxVelocity())
  rm.setVelocity((0 / 100.0) * rm.getMaxVelocity())
  initTime = myRobot.getTime()
  while myRobot.step(timeStep) != -1:
    if (myRobot.getTime() - initTime) * 1000.0 > 500:
      break
