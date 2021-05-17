const http = require("http");

// create a server obj
http
  .createServer((req, resp) => {
    // write a resp to the browser
    resp.write("hello world");
    resp.end();
  })
  .listen(5000, () => console.log("server active"));
