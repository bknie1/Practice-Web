//- REQUIRES -------------------------------------------------------------------
const express = require('express');
var app = express();
//- SETUP ----------------------------------------------------------------------
app.set('view engine', 'ejs'); // We use embedded js files.

var port = 3000;
app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
//- DATABASE -------------------------------------------------------------------

//- ROUTES ---------------------------------------------------------------------
// "/"
app.get('/', (req, res) => {
  console.log("Someone has requested '/'");
  res.render('home');
});
//--------------------------------------------
var images = {}
images['']

app.get('/fallinlovewith/:item', (req, res) => {
  console.log("Someone has requested '/fallinlovewith/:item'");
  var item = req.params.item;

  // We have to pass our item to the template.
  // We pass an View model (object) that assigns this item to a View model member.
  res.render('fallinlovewith', {viewItem: item});
});
//--------------------------------------------
// Default Route:
  // Should always be last, else it overrides other potential requests.
app.get('*', (req, res) => {
  res.status(404);
  res.send("Error: 404 Page not Found");
});
