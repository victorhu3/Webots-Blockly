// File:          supervisor.cpp
// Date:
// Description:
// Author:
// Modifications:

// You may need to add webots include files such as
// <webots/DistanceSensor.hpp>, <webots/Motor.hpp>, etc.
// and/or to add some other includes
#include <webots/Supervisor.hpp>
using namespace webots;

#include <iostream>
#include <fstream>
using namespace std;

#ifdef WINDOWS
#include <windows.h>
#else
#include <unistd.h>
#include <sys/types.h>
#endif

// This is the main program of your controller.
// It creates an instance of your Robot instance, launches its
// function(s) and destroys it at the end of the execution.
// Note that only one instance of Robot should be created in
// a controller program.
// The arguments of the main function can be specified by the
// "controllerArgs" field of the Robot node
int main(int argc, char **argv) {

#ifdef WINDOWS

STARTUPINFO si;
    PROCESS_INFORMATION pi;

    ZeroMemory( &si, sizeof(si) );
    si.cb = sizeof(si);
    ZeroMemory( &pi, sizeof(pi) );

    char *exe =  "./blocklyServer/blocklyServer.exe";
    if( !CreateProcess( NULL, exe, NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi )) 
    {
        cout << "Could not create process: " << GetLastError() << endl;
        return 1;
    }

    CloseHandle( pi.hProcess );
    CloseHandle( pi.hThread );
    return 0;

#else
  pid_t pid;
  pid = fork();
  
  if(pid < 0) {
    cout << "Fork failed" << endl;
  }
  else if (pid == 0) {
  
    char *args[] = {"./blocklyServer/blocklyServer", NULL};
    execvp(args[0], args);
    return 0;
  }
#endif
  
  // create the Robot instance.
  Supervisor *supervisor = new Supervisor();

  Node *robot = supervisor->getFromDef("ROBOT");
  Field *controller = robot->getField("controller");
  // get the time step of the current world.
  int timeStep = (int)supervisor->getBasicTimeStep();


  // You should insert a getDevice-like function in order to get the
  // instance of a device of the robot. Something like:
  //  Motor *motor = robot->getMotor("motorname");
  //  DistanceSensor *ds = robot->getDistanceSensor("dsname");
  //  ds->enable(timeStep);

  // Main loop:
  // - perform simulation steps until Webots is stopping the controller
  while ((supervisor->step(timeStep)) != -1) {


    string message = supervisor->wwiReceiveText();
    if(message.length() != 0) {
      cout << message << endl;
      
      ofstream out("../my_controller/my_controller.py");
      
      out << message << endl;

      out.close();
      
      supervisor->simulationReset();
      robot->restartController();
    }
  }

  // Enter here exit cleanup code.

  delete supervisor;
  return 0;
}
