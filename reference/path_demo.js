const path = require("path"); // already included with node

console.log(
  "__filename ( From the wrapper function ) : ",
  __filename,
  "\npath.basename(__filename) ( File Name ) : ",
  path.basename(__filename),
  "\npath.dirname(__filename)) ( Directory Name ) : ",
  path.dirname(__filename),
  "\npath.extname(__filename) (File Extension)",
  path.extname(__filename),
  "\n\npath.parse(__filename) ( Returns as an object )",
  path.parse(__filename),
  "\n\npath.join(__dirname, 'test', 'hello.html') (Concatenate 2 dirs) : ",
  path.join(__dirname, "test", "hello.html")
);
