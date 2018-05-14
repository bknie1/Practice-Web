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
//--------------------------------------------
// "/bye"
app.get('/goodbye', (req, res) => {
  console.log("Someone has requested 'goodbye'.");
  res.send('Goodbye!');
});
//--------------------------------------------
// Tells express to read in subreddit as a variable.
app.get('/search/:subject', (req, res) => {
  console.log("User requested a search.");
  console.log(req); // Contains params: { subject: 'cats' }

   // Accesses the value of our subject key from the request parameters.
  res.send("You want to search for " + req.params.subject);
});
//--------------------------------------------
// Animal Sounds Route
var animalsDict = {};
/*jshint -W069 */
animalsDict['pig'] = { sound: 'oink!' };
animalsDict['cow'] = { sound: 'moo!' };
animalsDict['dog'] = { sound: 'woof!' };
/*jshint +W069 */

app.get('/speak/:animal', (req, res) => {
  var animal = req.params.animal;
  var sound = "The " + animal + " says " + animalsDict[animal].sound;
  console.log("The user requested /speak/" + animal + "/ responding with " + sound);
  res.send(sound);
});
//--------------------------------------------
app.get('/repeat/:word/:repeatNum', (req, res) => {
  var responseText = '';
  for (var i = 0; i < req.params.repeatNum; i++) {
    responseText += req.params.word + ' ';
  }
  res.send(responseText);
});
//--------------------------------------------
// Default Route:
  // Should always be last, else it overrides other potential requests.
app.get('*', (req, res) => {
  res.status(404);
  res.send("Error: 404 Page not Found");
});
