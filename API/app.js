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

// API DEMO
// https://developer.yahoo.com/weather/
const request = require('request');
console.log("Sunset time for Hawaii:");
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, res, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the raw JSON.
  var parsedBody = JSON.parse(body);
  console.log('Parsed body:\n', parsedBody);
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
