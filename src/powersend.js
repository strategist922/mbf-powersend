
function PowerSend(picker) {
    this.picker = picker;
}

/**
 * Send a specific message. Message is delayed and typings indicator is stent.
 * @param {Session} session The Microsoft Bot Framework Session.
 * @param {string} message The message you want to send.
 * @param {...string} parameters Parameters for the message.
 * @return {Promise}
 */
PowerSend.prototype.sendTextMessage = function (session, message) {
    // TODO: This can be simplified by calling sendAnyTextMessage with [message] as parameter.
    // However we need to take into account the variadic arguments. So I will keep this for later.
    session.sendTyping();
    return new Promise(resolve => {
        setTimeout(() => {
            var args = Array.prototype.slice.call(arguments);
            args = args.splice(1);
            session.send.apply(session, args);
            resolve();
        }, 1000);
    });

}


/**
 * Send a random message from the source. Message is delayed and typings indicator is stent.
 * 
 * @param {Session} session The Microsoft Bot Framework Session.
 * @param {string | [string]} category_or_list A category from the corpus OR a list of strings.
 * @param {...string} parameters Parameters for the selected message.
 */
PowerSend.prototype.sendAnyTextMessage = function (session, category_or_list) {
    let messages = category_or_list;
    session.sendTyping();
    return new Promise(resolve => {
        setTimeout(() => {
            var args = Array.prototype.slice.call(arguments);
            args = args.splice(2);
            args.unshift(this.picker.pickMessage(messages));
            session.send.apply(session, args);
            resolve();
        }, 1000);
    });
}

module.exports = PowerSend;