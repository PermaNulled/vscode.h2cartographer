const doc = require("./Items/Item");
const vscode = require("vscode");
/*
var Sound = [
    new doc.documentationItem(
        "playingTime",
        "playingTime",
        "Sound length in miliseconds.",
        "int Sound.playingTime",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "volume",
        "volume",
        "You can only set sound volume from minimum 0 to maximum 1.",
        "float Sound.volume",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "looping",
        "looping",
        "Sound looping",
        "bool Sound.looping",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "balance",
        "balance",
        "Sound balance. You can only set sound balance from minimum -1 to maximum 1.",
        "int Sound.balance",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "play",
        "play()",
        "Plays sound.",
        "void Sound.play()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "stop",
        "stop()",
        "Stop playing sound.",
        "void Sound.stop()",
        vscode.CompletionItemKind.Method),
]
var Sound3d = [
    new doc.documentationItem(
        "playingTime",
        "playingTime",
        "Sound length in miliseconds.",
        "int Sound3D.playingTime",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "volume",
        "volume",
        "You can only set sound volume from minimum 0 to maximum 1.",
        "float Sound3D.volume",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "looping",
        "looping",
        "Sound looping",
        "bool Sound3D.looping",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "balance",
        "balance",
        "Sound balance. You can only set sound balance from minimum -1 to maximum 1.",
        "int Sound3D.balance",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "obstruction",
        "obstruction",
        "test",
        "int Sound3D.obstruction",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "radius",
        "radius",
        "test",
        "int Sound3D.radius",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "coneAngle",
        "coneAngle",
        "test",
        "int Sound3D.coneAngle",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "reverbLevel",
        "reverbLevel",
        "test",
        "int Sound3D.reverbLevel",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "ambient",
        "ambient",
        "test",
        "int Sound3D.ambient",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "pitchOffset",
        "pitchOffset",
        "test",
        "int Sound3D.pitchOffset",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "play",
        "play()",
        "Plays sound.",
        "void Sound3D.play()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "stop",
        "stop()",
        "Stop playing sound.",
        "void Sound3D.stop()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "stop",
        "stop()",
        "Stop playing sound.",
        "void Sound3D.stop()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setTargetVob",
        "setTargetVob($0)",
        "test",
        "void Sound3d.setTargetVob(Vob vob)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setTargetPlayer",
        "setTargetPlayer($0)",
        "test",
        "void Sound3d.setTargetPlayer(int id)",
        vscode.CompletionItemKind.Method),
]
var Draw = [
    new doc.documentationItem(
        "visible",
        "visible",
        "Show or hide draw",
        "bool Draw.visible",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "text",
        "text",
        "Draw text",
        "string Draw.text",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "font",
        "font",
        "Draw font.",
        "string Draw.font",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "width",
        "width",
        "Draw width",
        "int Draw.width",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "widthPx",
        "widthPx",
        "Draw width in pixels",
        "int Draw.widthPx",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "height",
        "height",
        "Draw height",
        "int Draw.height",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "heightPx",
        "heightPx",
        "Draw height in pixels",
        "int Draw.heightPx",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "top",
        "top()",
        "Moves the draw to the top. This method can be useful when draw is behind some texture and you want it to be on the texture.",
        "void Draw.top()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setColor",
        "setColor($1, $2, $0)",
        "Changes color of the draw",
        "void Draw.setColor(int r, int g, int b)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getColor",
        "getColor()",
        "Gets color of the draw.",
        "table Draw.getColor()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setAlpha",
        "setAlpha($0)",
        "Changes alpha of the draw",
        "void Draw.setAlpha(int alpha)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getAlpha",
        "getAlpha()",
        "Gets alpha of the draw",
        "int Draw.getAlpha()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPosition",
        "setPosition($1, $0)",
        "Sets draw position in virtual",
        "void Draw.setPosition(int x, int y)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPosition",
        "getPosition()",
        "Gets draw position in virtual",
        "table Draw.getPosition()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPositionPx",
        "setPositionPx($1, $0)",
        "Sets draw position in pixel",
        "void Draw.setPositionPx(int x, int y)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPositionPx",
        "getPositionPx()",
        "Gets draw position in pixel",
        "table Draw.getPositionPx()",
        vscode.CompletionItemKind.Method),
]
var Draw3d = [
    new doc.documentationItem(
        "visible",
        "visible",
        "Show or hide draw",
        "bool Draw3d.visible",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "font",
        "font",
        "Draw font.",
        "string Draw3d.font",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "top",
        "top()",
        "Moves the draw to the top. This method can be useful when draw is behind some texture and you want it to be on the texture.",
        "void Draw3d.top()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setColor",
        "setColor($1, $2, $0)",
        "Changes color of the draw",
        "void Draw3d.setColor(int r, int g, int b)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getColor",
        "getColor()",
        "Gets color of the draw.",
        "table Draw3d.getColor()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setAlpha",
        "setAlpha($0)",
        "Changes alpha of the draw",
        "void Draw3d.setAlpha(int alpha)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getAlpha",
        "getAlpha()",
        "Gets alpha of the draw",
        "int Draw3d.getAlpha()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "insertText",
        "insertText($0)",
        "test",
        "void Draw3d.insertText(string text)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "removeText",
        "removeText($0)",
        "test",
        "void Draw3d.removeText(int position)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "updateText",
        "updateText($1, $0)",
        "test",
        "void Draw3d.updateText(int position, string text)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getText",
        "getText()",
        "test",
        "string Draw3d.getText()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setWorldPosition",
        "setWorldPosition($1, $2, $0)",
        "test",
        "void Draw3d.setWorldPosition(float x, float y, float z)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getWorldPosition",
        "getWorldPosition()",
        "test",
        "table {x, y, z} Draw3d.getWorldPosition()",
        vscode.CompletionItemKind.Method),
]
var Texture = [
    new doc.documentationItem(
        "visible",
        "visible",
        "Show or hide texture",
        "bool Texture.visible",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "file",
        "file",
        "test",
        "string Texture.file",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "top",
        "top()",
        "test",
        "void Texture.top()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setColor",
        "setColor($1, $2, $0)",
        "Set a texture color on the screen.",
        "void Texture.setColor(int r, int g, int b)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getColor",
        "getColor()",
        "Gets color of the texture.",
        "table {r, g, b} Texture.getColor()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setAlpha",
        "setAlpha($0)",
        "Set a texture alpha on the screen.",
        "void Texture.setAlpha(int alpha)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getAlpha",
        "getAlpha()",
        "Gets alpha of the texture.",
        "table Texture.getAlpha()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPosition",
        "setPosition($1, $0)",
        "Set a texture position the screen.",
        "void Texture.setPosition(int x, int y)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPositionPx",
        "setPositionPx($1, $0)",
        "Set a texture position in pixels on the screen.",
        "void Texture.setPositionPx(int x, int y)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPosition",
        "getPosition()",
        "Gets position of the texture.",
        "table {x, y} Texture.getPosition()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPositionPx",
        "getPositionPx()",
        "Gets position in pixels of the texture.",
        "table {x, y} Texture.getPositionPx()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setSize",
        "setSize($1, $0)",
        "Set a texture size on the screen.",
        "void Texture.setSize(int width, int height)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setSizePx",
        "setSizePx($1, $0)",
        "Set a texture size in pixels on the screen.",
        "void Texture.setSizePx(int width, int height)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getSize",
        "getSize()",
        "Gets size of the texture.",
        "table {width, height} Texture.getSize()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getSizePx",
        "getSizePx()",
        "test",
        "table {width, height} Texture.getSizePx()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setRectPx",
        "setRectPx($1, $2, $3, $0)",
        "test",
        "void Texture.setRectPx(int x, int y, int widht, int height)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getRect",
        "getRect()",
        "test",
        "table {width, height} Texture.getRect()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getRectPx",
        "getRectPx()",
        "test",
        "table {width, height} Texture.getRectPx()",
        vscode.CompletionItemKind.Method),
]
var Vob = [
    new doc.documentationItem(
        "collision",
        "collision",
        "This property contains bool value, you can modify it to change VOB collision.",
        "bool Vob.collision",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "getPosition",
        "getPosition()",
        "Returns VOB position.",
        "table Vob.getPosition()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPosition",
        "setPosition($1, $2, $0)",
        "Sets VOB postion.",
        "void Vob.setPosition(float x, float y, float z)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getRotation",
        "getRotation()",
        "Returns VOB rotation.",
        "table Vob.getRotation()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setRotation",
        "setRotation($1, $,2 $0)",
        "Sets VOB rotation.",
        "void Vob.setRotation(float x, float y, float z)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getVisual",
        "getVisual()",
        "Gets VOB visual.",
        "string Vob.getVisual()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setVisual",
        "setVisual($0)",
        "Sets VOB visual.",
        "bool Vob.setVisual(string instance)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "floor",
        "floor()",
        "Sets the object Y position (height) relative to the mesh world.",
        "void Vob.floor()",
        vscode.CompletionItemKind.Method),
]
var Packet = [
    new doc.documentationItem(
        "send",
        "send($1, $0)",
        "Send packet to player.",
        "void Packet.send(int pid, int reliability)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "sendToAll",
        "sendToAll($0)",
        "Send packet to all connected players.",
        "void Packet.sendToAll(int reliability)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "reset",
        "reset()",
        "Remove value(s) from packet.",
        "void Packet.reset()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "writeBool",
        "writeBool($0)",
        "Insert bool value to packet.",
        "void Packet.writeBool(bool value)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "writeChar",
        "writeChar($0)",
        "Insert char value to packet. (1 byte)",
        "void Packet.writeChar(char value)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "writeInt8",
        "writeInt8($0)",
        "Insert number to packet. (1 byte)",
        "void Packet.writeInt8(int value)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "writeUInt8",
        "writeUInt8($0)",
        "Insert number to packet. (1 byte)",
        "void Packet.writeUInt8(int value)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "writeInt16",
        "writeInt16($0)",
        "Insert number to packet. (2 byte)",
        "void Packet.writeInt16(int value)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "writeUInt16",
        "writeUInt16($0)",
        "Insert number to packet. [2 bytes]",
        "void Packet.writeUInt16(int value)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "writeUInt32",
        "writeUInt32($0)",
        "Insert number to packet. [4 bytes]",
        "void Packet.writeUInt32(int value)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "writeFloat",
        "writeFloat($1, $0)",
        "Insert float number to packet. (4 bytes)",
        "void Packet.writeFloat(float value)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "writeString",
        "writeString($1, $0)",
        "Insert string value to packet.",
        "void Packet.writeString(string value)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "readBool",
        "readBool()",
        "Get bool value from packet.",
        "bool Packet.readBool()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "readChar",
        "readChar()",
        "Gets char value from packet. (1 byte)",
        "char Packet.readChar()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "readInt8",
        "readInt8()",
        "Get number from packet. (1 byte)",
        "int Packet.readInt8()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "readUInt8",
        "readUInt8()",
        "Get number from packet. (1 byte)",
        "int Packet.readUInt8()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "readInt16",
        "readInt16()",
        "Get number from packet. (2 byte)",
        "int Packet.readInt16()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "readUInt16",
        "readUInt16($1, $0)",
        "Get number from packet. [2 bytes]",
        "int Packet.readUInt16()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "readInt32",
        "readInt32()",
        "Get number from packet. (4 byte)",
        "int Packet.readInt32()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "readUInt32",
        "readUInt32()",
        "Get number from packet. [4 bytes]",
        "int Packet.readUInt32()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "readFloat",
        "readFloat()",
        "Get float number from packet. (4 bytes)",
        "float Packet.readFloat()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "readString",
        "readString()",
        "Get string value from packet.",
        "string Packet.readString()",
        vscode.CompletionItemKind.Method),
]
var queue = [
    new doc.documentationItem(
        "len",
        "len()",
        "Method gets current queue length.",
        "int queue.len()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "front",
        "front()",
        "Method gets first element from the queue class.",
        "element queue.front()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "back",
        "back()",
        "Method gets last element from the queue.",
        "element queue.back()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "push",
        "push($0)",
        "Method push an element to the end of the queue.",
        "void queue.push(element value)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "pop",
        "pop()",
        "Method removes first element from the queue.",
        "void queue.pop()",
        vscode.CompletionItemKind.Method),
]

var test = [
    new doc.documentationItem(
        "test",
        "test",
        "test",
        "test",
        vscode.CompletionItemKind.Property),
    new doc.documentationItem(
        "test",
        "test($0)",
        "test",
        "test",
        vscode.CompletionItemKind.Method),
]*/
module.exports = {
    
}