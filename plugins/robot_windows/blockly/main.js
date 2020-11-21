var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("closeButton")[0];
var saveList = document.getElementById("saveList");

const SocketCommand = {
    //kind of like an enum I guess
    SEND_CODE: "SEND_CODE",
    SAVE: "SAVE",
    LIST_SAVES: "LIST_SAVES",
    RESTORE_SAVE: "RESTORE_SAVE",
};

var currCommand = null; //stores the current command we are in the middle of processing 

if("WebSocket" in window) { //check if websockets are supported
    
    var ws = new WebSocket("ws://localhost:8000/test.py");
    ws.onopen = function() {

    //    ws.send("testing");
    };
    ws.onmessage = function (evt) {

        var msg = evt.data;
        
        switch(currCommand) {

            case SocketCommand.LIST_SAVES:
          
                var files = msg.split(" ");

                saveList.innerHTML = "";
                modal.style.display = "block";
                for(i = 0; i< files.length; i++) {
                    
                    var link = document.createElement("a");

                    link.title = files[i];
                    link.onclick = restore;
                    link.style.display = "block";
                    link.style.fontSize = "15px";
                    link.style.marginTop = "20px";
                    link.textContent = files[i];
                    
                    
                    saveList.appendChild(link);
                }
                if(files.length == 1) {
                    
                    var text = document.createElement("p");
                    text.innerHTML = "<b>No saved projects</b>";
                    saveList.appendChild(text);
                }
            break;
            case SocketCommand.RESTORE_SAVE:
           
                //alert(msg);
                Blockly.mainWorkspace.clear();

                var xml = Blockly.Xml.textToDom(msg);
                Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
            break;
        }
    };
    ws.onclose = function () {
        console.log("Connection Closed");
    }

} else {

    alert("WebSocket is not supported");
}
function convertCode() {

    currCommand = SocketCommand.SEND_CODE;

    var code = Blockly.Python.workspaceToCode(workspace);
    ws.send(SocketCommand.SEND_CODE);
    ws.send(code);
}
function realTimeUpdate() {
    var code = Blockly.Python.workspaceToCode(workspace);
    document.getElementById('textCode').innerHTML = code;
}

var title = document.getElementById("projectTitle");

function saveBlocks() {

    currCommand = SocketCommand.SAVE;

    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    ws.send(SocketCommand.SAVE);
    ws.send(title.textContent+".xml");
    ws.send(Blockly.Xml.domToText(xml));
    //console.log(xml);
}

function restore() {

    currCommand = SocketCommand.RESTORE_SAVE;
    ws.send(currCommand);

   ws.send(this.textContent + ".xml");
   title.textContent = this.textContent;
}

function receiveMessage(value) {

    console.log(value);
}

function openModal() {

    currCommand = SocketCommand.LIST_SAVES;
    ws.send(currCommand);

    saveList.innerHTML = "";
    var text = document.createElement("p");
    text.innerHTML = "<b>Loading...</b>";
    saveList.appendChild(text);

}
function closeModal() {
    modal.style.display="none";
}

closeButton.onclick = closeModal;
window.onclick = function(e) {

    if(e.target == modal) {
        closeModal();
    }
}
function onResize(e) {
    Blockly.svgResize(workspace);
}

document.getElementById("submit").onclick = convertCode;
document.getElementById("save").onclick = saveBlocks;
document.getElementById("restore").onclick = openModal;

document.getElementById("projectTitle").addEventListener("keydown", (e) => {
    if(e.key === "Enter") e.preventDefault();
});

window.onload = function() {
    window.robotWindow = webots.window("Blockly");
    window.robotWindow.receive = receiveMessage;
}

var container = document.getElementById("blocklyContainer");

