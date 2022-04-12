// import express into routes file
const express = require('express');

// grab the router from express
const router = express.Router();

const { body, validationResult } = require('express-validator/check');

// use router to respond to any requests to the root URL http://localhost:3000 with an "It works!" message
router.get('/', (req, res) => {
  // tell route to use our new template using render method on Express's response object to send the rendered view to the client
  // pass in an appropriate title for the template to display
  res.render('form', { title: 'Registration Form'});
  // res.send('It works!');
});

router.post('/', 
  [
    // using body method to validate two properties on req.body
    body('name')
      .isLength({ min: 1})
      .withMessage('Please enter a name'),
    body('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
    ],
    (req, res) => {
      // call validationResult method to see if validation passed or failed
      const errors = validationResult(req);
        if (errors.isEmpty()) {
          res.send('Thank you for your registration!');
        } else {
          res.render('form', {
            title: 'Registration Form',
            errors: errors.array(),
            data: req.body,
          });
        }
    }
  );
// router.post('/', (req, res) => {
  // log the submitted data to the terminal
  console.log(req.body);
  res.render('form', { title: 'Registration Form'});
});

// middleware a.k.a router-level middleware
router.METHOD(route, (req, res) => {
  // the callback receives a req and res parameter, where req is an object full of info that is coming in
  // and res is an object full of methods for sending data back to the user
  // callback function
});

module.exports = router;