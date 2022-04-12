// import express into routes file
const express = require('express');

// grab the router from express
const router = express.Router();

// use router to respond to any requests to the root URL http://localhost:3000 with an "It works!" message
router.get('/', (req, res) => {
  // tell route to use our new template using render method on Express's response object to send the rendered view to the client
  // pass in an appropriate title for the template to display
  res.render('form', { title: 'Registration Form'});
  // res.send('It works!');
});

router.post('/', (req, res) => {
  res.render('form', { title: 'Registration Form'});
})

module.exports = router;