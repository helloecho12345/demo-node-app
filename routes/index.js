// import express into routes file
const express = require('express');

// grab the router from express
const router = express.Router();

// use router to respond to any requests to the root URL http://localhost:3000 with an "It works!" message
router.get('/', (req, res) => {
  // tell route to use our new template using render method on Express's response object to send the rendered view to the client
  res.render('form');
  // res.send('It works!');
});

module.exports = router;