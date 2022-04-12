// import express module and routes file into application
const express = require('express');
const routes = require('./routes/index');

// creating a new Express app using the Express function and assigning it to an app variable
const app = express();

// tells app that whenever it receives a request from forward slash anything, it should use the routes file
app.use('/', routes);

// export app variable so that it can be imported and used in other files
module.exports = app;