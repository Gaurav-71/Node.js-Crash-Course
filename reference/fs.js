// file system demo

const fs = require("fs");
const path = require("path");

// create folder

function createFolder() {
  fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
    if (err) throw err;
    console.log("Folder created");
  }); // asynchronous func
}

// create and write to file

function writeFile() {
  fs.writeFile(
    // this overwites existing file
    path.join(__dirname, "/test", "hello.txt"),
    "Hello World !",
    (err) => {
      if (err) throw err;
      console.log("File Written");
      //append file, adding in callback since these are async functions
      fs.appendFile(
        path.join(__dirname, "/test", "hello.txt"),
        " I love node.js",
        (err) => {
          if (err) throw err;
          console.log("File Appended");
        }
      );
    }
  );
}

// read file

function readFile() {
  fs.readFile(
    path.join(__dirname, "/test", "hello.txt"),
    "utf-8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
}

function renameFile() {
  fs.rename(
    path.join(__dirname, "/test", "hello.txt"),
    path.join(__dirname, "/test", "helloWorld.txt"),
    (err) => {
      if (err) throw err;
      console.log("File renamed");
    }
  );
}

renameFile();
