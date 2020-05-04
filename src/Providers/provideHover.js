const vscode = require('vscode');
const docClient = require('../Client');

function provideHover(document, position, token) {
   
    const range = document.getWordRangeAtPosition(position);
    const word = document.getText(range);
    for (var i = 0; i < docClient.Func.length; i++) {
        if (word == docClient.Func[i].prefix) {
            return new vscode.Hover({
                language: "squirrel",
                value: docClient.Func[i].description
            });
        }
    }

}

module.exports = {
    provideHover,
}