// import Express app created in app.js
const app = require('./app');

// tell app to listen on port 3000 for incoming connections and output a message to the terminal to indicate the server is running
const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});