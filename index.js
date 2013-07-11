var through = require('through');

module.exports = function () {
  var rooms = {};
  
  return function (name, stream) {
    if (!rooms[name]) {
      var room = rooms[name] = {
        streams : []
      }

      rooms[name].stream = through(function (data) {
        room.streams.forEach(function (s) {
          s.write(data);
        });
      });
    }

    if (stream) {
      stream.pipe(rooms[name].stream).pipe(stream);
    }

    return rooms[name].stream;
  }
};
