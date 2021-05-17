const eventEmitter = require("events");

class MyEmmitter extends eventEmitter {}

// init obj
const myEmmitter = new MyEmmitter();

// create event listener
myEmmitter.on("event", () => console.log("Event fired"));

// init event
myEmmitter.emit("event");
