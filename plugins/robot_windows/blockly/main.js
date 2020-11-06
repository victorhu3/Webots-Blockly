function convertCode() {

    var code = Blockly.Python.workspaceToCode(workspace);
    console.log(code);
    window.robotWindow.send(code);
}
function realTimeUpdate() {
    var code = Blockly.Python.workspaceToCode(workspace);
    document.getElementById('textCode').innerHTML = code;
}

function saveBlocks() {
    if(typeof(Storage)!=="undefined") {
        var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
        localStorage.setItem("test", Blockly.Xml.domToText(xml));
        console.log(xml);
    }
}

function restore() {
    Blockly.mainWorkspace.clear();
    if(typeof(Storage)!=="undefined") {
        var xml = Blockly.Xml.textToDom(localStorage.getItem("test"));
        console.log(xml);
        Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
    } else {
        console.log("error");
    }
}

function receiveMessage(value) {

    console.log(value);
}

const onResize = function(e) {
    Blockly.svgResize(workspace);
}

window.onload = function() {
    window.robotWindow = webots.window("Blockly");
    window.robotWindow.receive = receiveMessage;
   
    var container = document.getElementById("blocklyContainer");
    const blocklyResize = new ResizeObserver(onResize);
    blocklyResize.observe(container);
}

