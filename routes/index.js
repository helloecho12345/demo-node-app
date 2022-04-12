// import express into routes file
const express = require('express');

// grab the router from express
const router = express.Router();

// use router to respond to any requests to the root URL http://localhost:3000 with an "It works!" message
router.get('/', (req, res) => {
  res.send('It works!');
});

module.exports = router;