const eventEmitter = require("events");
const uuid = require("uuid");

class Logger extends eventEmitter {
  log(msg) {
    // call event
    this.emit("message", { id: uuid.v4(), msg }); // msg is same as msg:msg
  }
}

module.exports = Logger;
