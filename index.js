var through = require('through');

module.exports = function () {
  var rooms = {};
  
  return function (name) {
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

    return rooms[name].stream;
  }
};
