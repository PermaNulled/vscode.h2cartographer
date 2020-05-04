const vscode = require('vscode');
const docClient = require('../Client');
const classFunc = require('../ClassFunc');
const item = require('../Items/Item');

function  provideCompletionItems(document, position, token, context) {
    var tab = GetCompletionFromArray(docClient.Func);
    //var currentlyOpenTabfilePath = vscode.window.activeTextEditor.document.fileName;
   
    //if (currentlyOpenTabfilePath.includes("Variants")) {
    //    tab = [...tab, ...GetCompletionFromArray(docClient.Func)];
    //}

    return tab;
}

function provideCompletionItemsClass(document, position, token, contex) {
    var tab = [];
    variable = new item.variable(document);
    a = Object.keys(classFunc);

    for (var i = 0; i < variable.list.length; i++) {
        if (document.lineAt(position).text.substr(0, position.character).endsWith(variable.list[i].name + ".")) {
            for (var j = 0; j < a.length; j++) {
                if (variable.list[i].value == a[j] + "()") {
                    for (var k = 0; k < eval("classFunc." + a[j] + ".length"); k++) {
                        var temp = "classFunc." + a[j] + "[" + k + "]";
                        tab.push(GetCompletion(eval(temp + ".prefix"), eval(temp + ".body"), eval(temp + ".detail"), eval(temp + ".description"), eval(temp + ".itemKind")));
                    }
                    return tab;
                }
            }
        }
    }
    /*
    var tab = [];
    if (document.lineAt(position).text.substr(0, position.character).endsWith('Packet.')) {
        for (var i = 0; i < docServer.Packet.length; i++) {
            tab.push(GetCompletion(docServer.Packet[i].prefix, docServer.Packet[i].body, docServer.Packet[i].detail, docServer.Packet[i].description, docServer.Packet[i].itemKind));
        }
        return tab;
    }
    */
    return undefined;

}


function GetCompletion(completion, insertText, detail, documentation, kind = vscode.CompletionItemKind.Keyword) {
    const Completion = new vscode.CompletionItem(completion);
    if (insertText != undefined)
        Completion.insertText = new vscode.SnippetString(insertText);
    if (detail != undefined)
        Completion.detail = detail;
    if (documentation != undefined)
        Completion.documentation = new vscode.MarkdownString("```squirrel\n" + documentation + "\n```");
    Completion.kind = kind;
    return Completion;
}

function GetCompletionFromArray(array) {
    var tab = [];
    for (var i = 0; i < array.length; i++) {
        tab.push(GetCompletion(array[i].prefix, array[i].body, array[i].detail, array[i].description, array[i].itemKind));
    }
    return tab;
}


module.exports = {
    provideCompletionItems, provideCompletionItemsClass
}