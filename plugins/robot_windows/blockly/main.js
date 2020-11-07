function convertCode() {

    var code = Blockly.Python.workspaceToCode(workspace);
    window.robotWindow.send(code);
}
function realTimeUpdate() {
    var code = Blockly.Python.workspaceToCode(workspace);
    document.getElementById('textCode').innerHTML = code;
}

var title = document.getElementById("projectTitle");

function saveBlocks() {
    if(typeof(Storage)!=="undefined") {
        var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
        localStorage.setItem(title.textContent, Blockly.Xml.domToText(xml));
    }
}

function restore() {
    Blockly.mainWorkspace.clear();
    if(typeof(Storage)!=="undefined") {
        var xml = Blockly.Xml.textToDom(localStorage.getItem(this.textContent));
        console.log(xml);
        Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
    } else {
        console.log("error");
    }
    title.textContent = this.textContent; 
}

function receiveMessage(value) {

    console.log(value);
}

var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("closeButton")[0];
var saveList = document.getElementById("saveList");
function openModal() {

   // localStorage.clear();

    saveList.innerHTML = "";
    modal.style.display = "block";
    for(i = 0; i< localStorage.length; i++) {
        
        key = localStorage.key(i);
        console.log(key);
        var link = document.createElement("a");

        link.title = key;
        link.onclick = restore;
        link.style.display = "block";
        link.style.fontSize = "15px";
        link.style.marginTop = "20px";
        link.textContent = key;
        
        
        saveList.appendChild(link);
    }
    if(localStorage.length == 0) {
        
        var text = document.createElement("p");
        text.innerHTML = "<b>No saved projects</b>";
        saveList.appendChild(text);
    }
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
const blocklyResize = new ResizeObserver(onResize);
blocklyResize.observe(container);

