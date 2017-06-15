# MBF Powersend

Extend messaging functionalities in the Microsoft Bot Framework.

## Usage

Once the package is installed, you can initialize the package in this way.

```js
let PowerSend = require('mbf-powersend');
let picker = new PowerSend.MessagePicker('./corpus.json');
let sender = new PowerSend.PowerSend(picker);
``` 

### Select a random message from the speech database

```js
// Select a random `INTRO` sentence.
picker.pickMessage('INTRO')
```

### Send a message with typings

```js
// Send the message "Hello Dave! How are you?"
let user_name = "Dave";
sender.sendTextMessage(session, 'Hello %s! How are you?', user_name);
```

### Send a random message from the speech database

```js
// Send a random `INTRO` sentence.
let user_name = "Dave";
sender.sendTextMessage(session, 'INTRO');
```