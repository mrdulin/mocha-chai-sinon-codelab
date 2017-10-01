const Socket = {
  connect: function() {
    socket = new WebSocket("ws://localhost:12345");
    socket.onopen = function() {
      console.log("connected to the server");
    };

    socket.onmessage = function(message) {
      console.log("Received:", message.data);
    };
    return socket;
  }
};

module.exports = Socket;
