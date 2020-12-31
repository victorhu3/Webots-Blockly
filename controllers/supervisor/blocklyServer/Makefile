ifeq ($(OS),Windows_NT)     
    detected_OS := Windows
else
    detected_OS := $(shell uname)  
endif

ifeq ($(detected_OS),Windows)
	LIBRARIES=-L. -L"ws2_32" -lws2_32 -lmswsock -lwsock32 -lboost_filesystem-mgw9-mt-s-x64-1_74 -lboost_date_time-mgw9-mt-s-x64-1_74
	INCLUDE=-I"C:\Users\Victor\Downloads\boost_1_74_0\boost_1_74_0"
	FLAGS=-DWINDOWS
else ifeq ($(detected_OS),Darwin)        # Mac OS X

else
	LIBRARIES=-L. -lboost_date_time -lboost_filesystem -lpthread
endif

blocklyServer: blocklyServer.cpp
	g++ $(INCLUDE) $(FLAGS) $^ $(LIBRARIES) -o $@ 
