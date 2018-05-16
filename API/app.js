// REQUIRES --------------------------------------------------------------------
const express = require('express'); // 'req' snippet.
var app = express(); // Typical local assignment.

// Parses GET input form data into a usable JavaScript object.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// We can use this to make API requests.
const request = require('request');
/*
OMDB API Key: thewdb
General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb
Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb
*/
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
// '/' Root: Search for movies.
app.get('/', (req, res) => {
  console.log("Someone requested 'search (the root)'.");
  res.render('search');
});
//-------------------------------------
// '/results'
app.get('/results', (req, res) => {
  //Get the search query from the root View.
  var search = req.query.search;
  if(search == 'undefined') search = '';
  console.log("Someone requested '/results' and searched for " + search);
  // Note: Use 'response', not 'res', or we accidentally overload.
  request('http://www.omdbapi.com/?s=' + search + '&apikey=thewdb', function(error, response, body) {
    if(!error && response.statusCode == 200) {
      var parsedBody = JSON.parse(body);
      // res.send(parsedBody); // Full JSON
      // res.send(parsedBody.Search[0]); // First result only.
      // res.send(parsedBody.Search[0].Title) // Title only.
      res.render('results', {viewResults: parsedBody});
    }
    else {
      console.log(error);
    }
  })
});

//-------------------------------------
// '/id'

//-------------------------------------
// '/title'

// POST REQUESTS ----------------------

//-------------------------------------
// DEFAULT
// '*' Default
app.get('*', (req, res) => {
  console.log("Someone requested something that doesn't exist.");
  res.status(404);
  res.render('404');
});
