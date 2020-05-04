// Declare variables
const vscode = require('vscode');
const hover = require('./Providers/provideHover');
const completion = require('./Providers/provideCompletionItems');

function activate(context) {
    //#region Hover
    vscode.languages.registerHoverProvider('squirrel', {
        provideHover(document, position, token) {
            return hover.provideHover(document, position, token);
        }
    });
    //#endregion Hover

    //#region Completion
    vscode.languages.registerCompletionItemProvider('squirrel', {
        provideCompletionItems(document, position, token, context) {
            return completion.provideCompletionItems(document, position, token, context);
        }
    });
    vscode.languages.registerCompletionItemProvider('squirrel', {
        provideCompletionItems(document, position, token, contex) {
            return completion.provideCompletionItemsClass(document, position, token, context);
        }
    }, '.');
    //#endregion Completion
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
}