const http = require("http");
const path = require("path");
const fs = require("fs");

function inefficientMethod() {
  const server = http.createServer((req, resp) => {
    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "public", "index.html"),
        (err, content) => {
          if (err) throw err;
          resp.writeHead(200, { "Content-Type": "text/html" });
          resp.end(content);
        }
      );
    }

    if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "public", "about.html"),
        (err, content) => {
          if (err) throw err;
          resp.writeHead(200, { "Content-Type": "text/html" });
          resp.end(content);
        }
      );
    }

    // serve json content
    if (req.url === "/api/users") {
      const users = [
        { name: "u1", age: 30 },
        { name: "u2", age: 40 },
      ];
      resp.writeHead(200, { "Content-Type": "application.json" });
      resp.end(JSON.stringify(users));
    }
  });
}

const server = http.createServer((req, resp) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  // get extension of the file
  let ext = path.extname(filePath);

  // set initial content type
  let contentType = "text/html";

  // set content type
  switch (ext) {
    case ".js":
      contentType = "text/javascript";
    case ".css":
      contentType = "text/css";
    case ".json":
      contentType = "application/json";
    case ".png":
      contentType = "image/png";
    case ".jpg":
      contentType = "image/jpg ";
  }

  // read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            resp.writeHead(200, { "Content-Type": contentType });
            resp.end(content, "utf-8");
          }
        );
      } else {
        // some server error
        resp.writeHead(500);
        resp.end("Server error : " + err.code);
      }
    } else {
      // success
      resp.writeHead(200, { "Content-Type": contentType });
      resp.end(content);
    }
  });
});

const PORT = process.env.PORT || 5000; // searches for env var on deployment location or selects 5000 if not found

server.listen(PORT, () => console.log("Server running on port : ", PORT));

////////// previous examples

function person() {
  // example for person
  const Person = require("./person");
  const p1 = new Person("John Doe", 30);
  p1.greeting();
}

function loggerFunction() {
  // example for logger
  const Logger = require("./logger");
  const logger = new Logger();
  logger.on("message", (data) => {
    console.log("Called Listner : ", data);
  });
  logger.log("Hello World !");
}
