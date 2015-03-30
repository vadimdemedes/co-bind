# co-bind

Function#bind for generator functions. Supports all the same features as native .bind().


### Installation

```javascript
$ npm install co-bind --save
```


### Usage

```javascript
const bind = require('co-bind');

function * test () {
	
}

let newTest = bind(test, context, 'hello', 'world'); // bind (fn, context[, arg1[, arg2[, ...]]])
```


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/co-bind.svg?style=svg)](https://circleci.com/gh/vdemedes/co-bind)

```
$ npm test
```


### License

WTFPL.
