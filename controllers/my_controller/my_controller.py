color = None
distSensor = None


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

gyroEnable = True
gyro = myRobot.getDevice('gyro')
gyro.enable(timeStep)
gps = myRobot.getDevice('gps')
gps.enable(timeStep)
color = myRobot.getDevice('color sensor')
color.enable(timeStep)
distSensor = myRobot.getDevice('distance sensor')
distSensor.enable(timeStep)
while myRobot.step(timeStep) != -1 and 1:
  if gyroEnable:
    updateGyro()
  print("Gyro:" + str((str((round((getAngle()),3))) + str(' degrees'))))
  print("GPS:" + str((str("x " + str((round(((gps.getValues())[-1 + 1]),3)))) + str((str("; y " + str((round(((gps.getValues())[0 + 1]),3)))) + str("; z " + str((round(((gps.getValues())[1 + 1]),3)))))))))
  print("getDist: " + str((str((round((distSensor.getValue()),3))) + str(' cm'))))
  print("getColor: " + str((str("red " + str((round(((getLSColor(color.getImageArray()))[-1 + 1]),3)))) + str((str("; green " + str((round(((getLSColor(color.getImageArray()))[0 + 1]),3)))) + str("; blue " + str((round(((getLSColor(color.getImageArray()))[1 + 1]),3)))))))))

gps.getValues()
