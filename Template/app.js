// REQUIRES --------------------------------------------------------------------
const express = require('express'); // 'req' snippet.
var app = express(); // Typical local assignment.

// Parses GET input form data into a usable JavaScript object.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
// SETUP -----------------------------------------------------------------------
// DEPENDENCIES
app.set('view engine', 'ejs'); // 'as' snippet.
app.use(express.static(__dirname + '/public')); // 'static' snippet.

// LISTEN
var port = 3000;
app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
// DATABASE --------------------------------------------------------------------


// ROUTES ----------------------------------------------------------------------
// GET REQUESTS -----------------------
// '/' Root
app.get('/', (req, res) => {
  console.log("Someone requested 'root'.");
  res.render('index');
});
//-------------------------------------
// POST REQUESTS ----------------------

//-------------------------------------
// DEFAULT
// '*' Default
app.get('*', (req, res) => {
  console.log("Someone requested something that doesn't exist.");
  res.status(404);
  res.render('404');
});
