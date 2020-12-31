var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("closeButton")[0];
var saveList = document.getElementById("saveList");

var title = document.getElementById("projectTitle");

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

const SocketCommand = {
    //kind of like an enum I guess
    SEND_CODE: "SEND_CODE",
    SAVE: "SAVE",
    LIST_SAVES: "LIST_SAVES",
    RESTORE_SAVE: "RESTORE_SAVE",
    RESTORE_LAST: "RESTORE_LAST", //last submitted or saved file
    RESTORE_LAST_NAME: "RESTORE_LAST_NAME",
    SAVE_LAST: "SAVE_LAST",
   
};

var currCommand = null; //stores the current command we are in the middle of processing 

if("WebSocket" in window) { //check if websockets are supported
    
    var ws = new WebSocket("ws://localhost:8001/test.py");
    ws.onopen = function() {

        document.getElementById("submit").disabled = false;
        document.getElementById("save").disabled = false;
        document.getElementById("restore").disabled = false;

        currCommand = SocketCommand.RESTORE_LAST_NAME;
        ws.send(currCommand);

    };
    ws.onmessage = function (evt) {

        var msg = evt.data;
        
        switch(currCommand) {

            case SocketCommand.LIST_SAVES:
          
                var files = msg.split("\n");

                saveList.innerHTML = "";
                modal.style.display = "block";
                for(i = 0; i< files.length; i++) {
                    
                    var link = document.createElement("a");

                    link.title = files[i];
                    link.onclick = restore;
                    link.style.display = "block";
                    link.style.fontSize = "15px";
                    link.style.marginTop = "20px";
                    link.style.cursor = "pointer";
                    link.textContent = files[i];

                    var css = 'a:hover{ text-decoration: underline;color: blue }';
                    var style = document.createElement('style');

                    if (style.styleSheet) {
                        style.styleSheet.cssText = css;
                    } else {
                        style.appendChild(document.createTextNode(css));
                    }
                   link.appendChild(style); 

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
                closeModal();

                if(msg != "\0") { //If msg isn't empty
                    var xml = Blockly.Xml.textToDom(msg);
                    Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
                }
            break;
            case SocketCommand.RESTORE_LAST_NAME:

                if(msg != "\0") {
               
                    title.textContent = msg;
                    ws.send(SocketCommand.RESTORE_LAST);
                    currCommand = SocketCommand.RESTORE_SAVE; //Restoring last save will use RESTORE_SAVE in the switch statement
                }

            break;
        }
    };
    ws.onclose = function () {
        console.log("Connection Closed");
    }

} else {

    alert("WebSocket is not supported");
}

function saveLast() {

    currCommand = SocketCommand.SAVE_LAST;
    ws.send(currCommand);

    ws.send(title.textContent);
}

function convertCode() {

    currCommand = SocketCommand.SEND_CODE;

    var code = Blockly.Python.workspaceToCode(workspace);
    ws.send(SocketCommand.SEND_CODE);
    ws.send(code);

    saveLast();
}
function realTimeUpdate() {
    var code = Blockly.Python.workspaceToCode(workspace);
    document.getElementById('textCode').innerHTML = code;
}

function saveBlocks() {

    currCommand = SocketCommand.SAVE;

    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    ws.send(SocketCommand.SAVE);
    ws.send(title.textContent+".xml");
    ws.send(Blockly.Xml.domToText(xml));
    
    saveLast();
}

function restore() {

    currCommand = SocketCommand.RESTORE_SAVE;
    ws.send(currCommand);

   ws.send(this.innerText + ".xml");
   title.textContent = this.innerText;
}

function receiveMessage(value) {

    console.log(value);
}

function onResize(e) {
    Blockly.svgResize(workspace);
}

document.getElementById("submit").onclick = convertCode;
document.getElementById("save").onclick = saveBlocks;
document.getElementById("restore").onclick = openModal;

document.getElementById("submit").disabled = true;
document.getElementById("save").disabled = true;
document.getElementById("restore").disabled = true;

document.getElementById("projectTitle").addEventListener("keydown", (e) => {
    if(e.key === "Enter") e.preventDefault();
});

window.onload = function() {
    window.robotWindow = webots.window("Blockly");
    window.robotWindow.receive = receiveMessage;
}

var container = document.getElementById("blocklyContainer");

