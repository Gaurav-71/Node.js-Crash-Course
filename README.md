# Node.js-Crash-Course

Reference Video Link : https://www.youtube.com/watch?v=fBNz5xF-Kx4&amp;list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&amp;index=1

### `npm init`

Used to create a package.json file for project

### `npm install -D nodemon`

Adds a dev dependency to automatically restart server
-D flag is used to indicate it is a Dev dependency only

Add the following code in package.json to use nodemon

"scripts": {
"start": "node index",
"dev": "nodemon index"
},

### `node filename`

Command to run the code in the terminal

## Heroku Deployment

`heroku login`

`heroku create`

`git push heroku main`

`heroku open`

Link : https://lit-scrubland-52003.herokuapp.com/
