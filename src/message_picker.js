let fs = require('fs')

function MessagePicker(message_corpus_file) {
    this.message_corpus = JSON.parse(fs.readFileSync(message_corpus_file, 'utf8'));
}

MessagePicker.prototype.getMessage = function getMessage(category, id) {
    return this.message_corpus[category][id];
}

MessagePicker.prototype.pickMessage = function pickMessage(category) {
    let messages;
    if( typeof category === 'string' ) {
        messages = this.message_corpus[category]
    } else {
        messages = category;
    }
    let i = Math.floor(Math.random() * messages.length)
    return this.messages[i];
}

module.exports = MessagePicker;