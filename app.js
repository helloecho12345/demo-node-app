// import express module and routes file into application
const express = require('express');
// require Node's native Path module which provides utilities for working with file and directory paths and helps build the path to our views folder
const path = require('path');
const routes = require('./routes/index');

// creating a new Express app using the Express function and assigning it to an app variable
const app = express();

// using Path module -  __dirname returns the directory in which the currently executing script resides
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// tells app that whenever it receives a request from forward slash anything, it should use the routes file
app.use('/', routes);

// export app variable so that it can be imported and used in other files
module.exports = app;