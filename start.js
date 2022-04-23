// Dotenv will load connection details from the configuration file into Node's process.env
// Make sure the .dotenv is added to the .gitignore as you do not want your configuration details on Git
require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// import Express app created in app.js
const app = require('./app');

// tell app to listen on port 3000 for incoming connections and output a message to the terminal to indicate the server is running
const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});