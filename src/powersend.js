
function PowerSend(picker) {
    this.picker = picker;
}

/**
 * Send a specific message. Message is delayed and typings indicator is stent.
 */
PowerSend.prototype.sendTextMessage = function (session, message) {
    var args = Array.prototype.slice.call(arguments);
    args = args.splice(1);
    session.send.apply(null, args);
}

module.exports = PowerSend;