# MBF Powersend

Extend messaging functionalities in the Microsoft Bot Framework.

## Usage

Once the package is installed, you can initialize the package in this way.

```js
let PowerSend = require('mbf-powersend');
let picker = new PowerSend.MessagePicker('./corpus.json');
let sender = new PowerSend.PowerSend(picker);
``` 

### Select a Message

#### Select a random message from the speech database

```js
// This function selects a random `INTRO` sentence and returns it as a string.
let message = picker.pickMessage('INTRO'); 
```

### Send a Message

All the following functions send a message using the default bot framework `send` function. 
In addition, they add the typings effect before sending the message.

### Send a message with typings

```js
// Send the message "Hello Dave! How are you?"
let user_name = "Dave";
sender.sendTextMessage(session, 'Hello %s! How are you?', user_name);
```

### Send a random message from a list of sentences.

```js
sender.sendAnyTextMessage(session, ["Hello!", "Greetings!"]);
// or
sender.sendAnyTextMessage(session, ["Hello %s!", "Welcome back %s!", "Nice to see you"], user_name);
// If strings have parameters you can specify their value in the function.
```

### Send a random message from the speech database

```js
// Send a random `INTRO` sentence.
sender.sendAnyTextMessage(session, 'INTRO');
// Or if you have parameters specified in the `json` file...
sender.sendAnyTextMessage(session, 'INTRO', user_name);
```