
function PowerSend(picker) {
    this.picker = picker;
}

/**
 * Send a specific message. Message is delayed and typings indicator is stent.
 */
PowerSend.prototype.sendTextMessage = function (session, message) {
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
 * Send a category  message. Message is delayed and typings indicator is stent.
 */
PowerSend.prototype.sendTextMessageByType = function (session, category) {
    session.sendTyping();
    return new Promise(resolve => {
        setTimeout(() => {
            var args = Array.prototype.slice.call(arguments);
            args = args.splice(2);
            args.unshift(this.picker.pickMessage(category));
            session.send.apply(session, args);
            resolve();
        }, 1000);
    });
}

module.exports = PowerSend;