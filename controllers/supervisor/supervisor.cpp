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
#include <string>
#include <fstream>
#include <functional>
#include <thread>
#include <vector>
using namespace std;

// put in ifdef for WIN32
#define _WIN32_WINNT _WIN32_WINNT_WIN10         
#define _WINSOCK_DEPRECATED_NO_WARNINGS

#include <boost/beast/core.hpp>
#include <boost/beast/websocket.hpp>
#include <boost/asio/ip/tcp.hpp>
#include <boost/beast/core/buffers_to_string.hpp>

namespace beast = boost::beast;
namespace http = beast::http;           
namespace websocket = beast::websocket; 
namespace net = boost::asio;            
using tcp = boost::asio::ip::tcp;      

#include <boost/range/iterator_range.hpp>
#include <boost/filesystem.hpp>
namespace filesystem = boost::filesystem;

void write_py_file(const std::string& s){
    ofstream of("../my_controller/my_controller.py");
    of << s;
    of.close();
}

void saveToFile(const std::string& fileName, const std::string& s) {

    string path = "../Blockly_Programs/" + fileName;
    ofstream of(path);
    of << s;
    of.close();
}

// Echoes back all received WebSocket messages
void
do_session(tcp::socket socket)
{
    try
    {
        // Construct the stream by moving in the socket
        websocket::stream<beast::tcp_stream> ws(std::move(socket));
        // Set a decorator to change the Server of the handshake
        ws.set_option(websocket::stream_base::decorator(
            [](websocket::response_type& res)
            {
                res.set(http::field::server,
                    std::string(BOOST_BEAST_VERSION_STRING) +
                    " websocket-server-sync");
            }));
        // Accept the websocket handshake
        ws.accept();
        // This buffer will hold the incoming message
        beast::flat_buffer buffer;
        // Read a message
        
        while(true) {
        
          ws.read(buffer);
          auto p = buffer.cdata();
          auto s = beast::buffers_to_string(buffer.data());
      
          buffer.clear();
      
           if(s == "SEND_CODE") {
           
             ws.read(buffer);
             write_py_file(beast::buffers_to_string(buffer.data()));
           }
           else if(s == "SAVE") {
           
             ws.read(buffer);
             auto fileName = beast::buffers_to_string(buffer.data());
             buffer.clear();

             ws.read(buffer);
             auto xml = beast::buffers_to_string(buffer.data());
             saveToFile(fileName, xml);
           }
           else if (s == "LIST_SAVES") {

             filesystem::path p("./../Blockly_Programs");
             string files = "";

             for(auto& entry : boost::make_iterator_range(filesystem::directory_iterator(p), {} )) {

                string filePath = entry.path().string();
                string fileName = filePath.substr(filePath.find_last_of("/\\") + 1); 
                fileName.erase(fileName.size()-4, string::npos);
                if(fileName[0] != '.') files += fileName + " ";
             }
           
             ws.write(net::buffer(files));
           }
           else if(s == "RESTORE_SAVE") {

             ws.read(buffer);
             auto fileName = beast::buffers_to_string(buffer.data());
             buffer.clear();
             
             string filePath = "../Blockly_Programs/" + fileName;
             
             ifstream in(filePath, ios::binary | ios::ate);
             streamsize size = in.tellg();
             in.seekg(0, ios::beg);

             vector<char> fileBuff(size);
             in.read(fileBuff.data(), size);

             ws.write(net::buffer(fileBuff));

             in.close();
           }
           else if(s == "RESTORE_LAST") {

             ifstream in("../Blockly_Programs/.tmp.txt");
             if(!in.fail()) {
               
               string fileName;
               in >> fileName;
               in.close();

                fileName += ".xml";
                 string filePath = "../Blockly_Programs/" + fileName;
                 
                 ifstream in(filePath, ios::binary | ios::ate);

                 if(!in.fail()) { //Make this into a function already >:(

                     streamsize size = in.tellg();
                     in.seekg(0, ios::beg);

                     vector<char> fileBuff(size);
                     in.read(fileBuff.data(), size);

                     ws.write(net::buffer(fileBuff));

                     in.close();

                 }
                 else { //If file is not found, return empty
                   ws.write(net::buffer("")); 
                 }
             }
             else { //If the tmp file isn't found, return empty

                   ws.write(net::buffer("")); 
             }
           }
           else if(s == "SAVE_LAST") {

             ws.read(buffer);

             auto fileName = beast::buffers_to_string(buffer.data());
          
             saveToFile(".tmp.txt", fileName );
           }

           buffer.clear();
        }
        //write_py_file(s);
        // Echo the message back
        //ws.text(ws.got_text());
        //ws.write(buffer.data());
        //buffer.clear();
        //ws.close(websocket::close_reason("normal close"));
    }
    catch (beast::system_error const& se)
    {
        // This indicates that the session was closed
        if (se.code() != websocket::error::closed)
            cerr << "Error: " << se.code().message() << endl;
    }
    catch (exception const& e)
    {
        cerr << "Error: " << e.what() << endl;
    }
}

// This is the main program of your controller.
// It creates an instance of your Robot instance, launches its
// function(s) and destroys it at the end of the execution.
// Note that only one instance of Robot should be created in
// a controller program.
// The arguments of the main function can be specified by the
// "controllerArgs" field of the Robot node
int main(int argc, char **argv) {
   
  // create the Robot instance.
  Supervisor *supervisor = new Supervisor();

  Node *robot = supervisor->getFromDef("ROBOT");
  Field *controller = robot->getField("controller");

  // get the time step of the current world.
  int timeStep = (int)supervisor->getBasicTimeStep();

  auto const address = net::ip::make_address("127.0.0.1");
  unsigned short port = 8000;

  net::io_context ioc{ 1 };
  
  tcp::acceptor acceptor { ioc, {address, port} };
  
  tcp::socket socket {ioc};
  acceptor.accept(socket);
    
  thread(&do_session, move(socket)).detach();

  // You should insert a getDevice-like function in order to get the
  // instance of a device of the robot. Something like:
  //  Motor *motor = robot->getMotor("motorname");
  //  DistanceSensor *ds = robot->getDistanceSensor("dsname");
  //  ds->enable(timeStep);

  // Main loop:
  // - perform simulation steps until Webots is stopping the controller
  while ((supervisor->step(timeStep)) != -1) {

    cout << "hello" << endl;

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
