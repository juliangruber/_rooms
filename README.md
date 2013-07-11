
# Rooms

## Usage

```js
var rooms = require('rooms')();

// get a stream from a room
rooms('my-room')

// add a stream to a room
stream.pipe(rooms('my-room')).pipe(stream)
// or
rooms('my-room', stream)
```
