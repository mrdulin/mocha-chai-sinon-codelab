const EventEmitter = require("events");

function main() {
  const emitter = new EventEmitter();
  let data = "";
  emitter
    .on("message", (payload) => {
      console.log("payload: ", payload);
      data += payload;
    })
    .on("end", () => {
      console.log("data: ", data);
    });
}

module.exports = main;
