let assert = require('assert');
let MessagePicker = require('../src/message_picker');

describe('MessagePicker', function() {
  describe('#getMessage', function() {
    it('should return "Hello"', function() {
        let M = new MessagePicker("./test/test_corpus.json");
        assert.equal("Hello", M.getMessage('HELLO',1));
    });
  });
});