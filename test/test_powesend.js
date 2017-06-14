let util = require('util');

let assert = require('assert');
let MessagePicker = require('../src/message_picker');
let PowerSend = require('../src/powersend');

describe('PowerSend', function () {

    let M = new MessagePicker("./test/test_corpus.json");
    let PS = new PowerSend(M);

    // Create a fake session
    var Session = (function () {
        var result = "";
        var typed =  false;
        return {
            sendTyping: function () { this.typed = true; },
            reset: function() { this.typed = false; },
            send: function () {
                var args = Array.prototype.slice.call(arguments);
                result = util.format.apply(null, args);
                console.log(result);
            },
            value: function () {
                return result;
            },
            isTyped: function() {
                return typed;
            }
        };
    })();

    describe('#sendTextMessage', function () {

        it('should write "Hello World"', function () {
            Session.reset();
            PS.sendTextMessage(Session, "Hello %s", "World").then(() => {
                assert.equal("Hello World", Session.value());
                assert.equal(true, Session.isTyped);
                done();
            }).catch(err => done(err));
        });

        it('should write "Hello Dave, we have 10 apples."', function () {
            Session.reset();
            PS.sendTextMessage(Session, "Hello %s, we have %d apples.", "Dave", 10).then(() => {
                assert.equal("Hello Dave, we have 10 apples.", Session.value());
                assert.equal(true, Session.isTyped);
                done();
            }).catch(err => done(err));
        });
    });

    describe('#sendTextMessageByType', function () {

        it('should write "Hello Dave!"', function () {
            Session.reset();
            PS.sendTextMessageByType(Session, "HELLO_NAME", "Dave").then(() => {
                assert.equal("Hello Dave!", Session.value());
                assert.equal(true, Session.isTyped);
                done();
            }).catch(err => done(err));
        });
    });
});