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
        return {
            send: function () {
                var args = Array.prototype.slice.call(arguments);
                result = util.format.apply(null, args);
                console.log(result);
            },
            value: function () {
                return result;
            }
        };
    })();

    describe('#sendTextMessage', function () {

        it('should write "Hello World"', function () {
            PS.sendTextMessage(Session, "Hello %s", "World");
            assert.equal("Hello World", Session.value());
        });

        it('should write "Hello Dave, we have 10 apples."', function () {
            PS.sendTextMessage(Session, "Hello %s, we have %d apples.", "Dave", 10);
            assert.equal("Hello Dave, we have 10 apples.", Session.value());
        });
    });

    describe('#sendTextMessageByType', function () {

        it('should write "Hello Dave!"', function () {
            PS.sendTextMessageByType(Session, "HELLO_NAME", "Dave");
            assert.equal("Hello Dave!", Session.value());
        });
    });
});