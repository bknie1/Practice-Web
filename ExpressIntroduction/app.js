//- REQUIRES -------------------------------------------------------------------
const express = require('express');
var app = express();
//- SETUP ----------------------------------------------------------------------
var port = 3000;
app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
//- DATABASE -------------------------------------------------------------------

//- ROUTES ---------------------------------------------------------------------
// "/"
app.get('/', (req, res) => {
  console.log("Someone has requested '/'");
  res.send("Hello!");
});

// "/bye"
app.get('/goodbye', (req, res) => {
  console.log("Someone has requested 'goodbye'.");
  res.send('Goodbye!');
});

// Good Example with Parameters
  // Tells express to read in subreddit as a variable.
app.get('/search/:subject', (req, res) => {
  console.log("User requested a search.");
  console.log(req); // Contains params: { subject: 'cats' }

   // Accesses the value of our subject key from the request parameters.
  res.send("You want to search for " + req.params.subject);
});

// Default Route:
  // Should always be last, else it overrides other potential requests.
app.get('*', (req, res) => {
  res.send("Error: 404 Page not Found");
});
