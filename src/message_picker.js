let fs = require('fs')

function MessagePicker(message_corpus_file) {
    this.message_corpus = JSON.parse(fs.readFileSync(message_corpus_file, 'utf8'));
}

MessagePicker.prototype.getMessage = function getMessage(category, id) {
    return this.message_corpus[category][id];
}

MessagePicker.prototype.pickMessage = function pickMessage(category) {
    let i = Math.floor(Math.random() * message_corpus[category].length)
    return this.message_corpus[category][i];
}

module.exports = MessagePicker;