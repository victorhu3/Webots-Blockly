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
                if(fileName[0] != '.') files += fileName + '\n';
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
           else if(s == "RESTORE_LAST_NAME") {

            
             ifstream in("../Blockly_Programs/.tmp.txt");
             if(!in.fail()) {
               
               string fileName;
               in >> fileName;
               in.close();
               ws.write(net::buffer(fileName));
             }
             else {

                ws.write(net::buffer(""));
             }
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
        ws.close(websocket::close_reason("normal close"));
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

int main() {

  auto const address = net::ip::make_address("127.0.0.1");
  unsigned short port = 8001;
  net::io_context ioc{ 1 };
    
  while(true) {
    //Set reuse address to false to prevent multiple instances of blocklyServer on Windows
#ifdef WINDOWS
    tcp::acceptor acceptor { ioc, {address, port}, false };
#elif
    tcp::acceptor acceptor { ioc, {address, port}, true };
#endif
    tcp::socket socket {ioc};
    acceptor.accept(socket);
      
    thread(&do_session, move(socket)).detach();
  }
}
