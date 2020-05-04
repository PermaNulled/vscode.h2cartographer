const vscode = require('vscode');

class documentationItem {

    constructor(prefix, body,detail, description, itemKind) {
        this.prefix = prefix;
        this.body = body;
        this.detail = detail;
        this.description = description;
        this.itemKind = itemKind;
    }
}

class functiona {

    constructor(document) {
        var myArray;
        var regex = /(local)?\s*function\s*([A-z0-9]+)?\s*\(((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*)\)\s*\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*\}/gm;
        this.list = [];
        while (myArray = regex.exec(document.getText())) {
            this.list.push(new functionItem(myArray[0], myArray[1], myArray[2], myArray[3]));
        }
    }

    GetFunctionCompletionArray() {
        var tab = [];
        for (var i = 0; i < this.list.length; i++) {
            tab.push(new vscode.CompletionItem(this.list[i].name, vscode.CompletionItemKind.Function));
        }
        return tab;
    }
}
class functionItem {
    constructor(body, local, name, parameteres) {
        this.body = body;
        this.local = local;
        this.name = name;
        this.parameteres = parameteres;
    }
}

class variable {

    constructor(document) {
        var myArray;
        var regex = /(local|static)?\s*([a-zA-Z_]+)\s*=\s*([a-zA-Z0-9 ()"_,]+)/gm;
        this.list = [];
        while (myArray = regex.exec(document.getText())) {
            this.list.push(new variableItem(myArray[0], myArray[1], myArray[2], myArray[3]));
        }
    }

    GetVariableCompletionArray() {
        var tab = [];
        for (var i = 0; i < this.list.length; i++) {
            tab.push(new vscode.CompletionItem(this.list[i].name, vscode.CompletionItemKind.Variable));
        }
        return tab;
    }
}

class variableItem {

    constructor(body, local, name, value) {
        this.body = body;
        this.local = local;
        this.name = name;
        this.value = value;
    }
}

module.exports = {
    documentationItem, variable, functiona
}