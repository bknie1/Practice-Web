// REQUIRES --------------------------------------------------------------------
const express = require('express'); // 'req' snippet.
var app = express(); // Typical local assignment.

// Parses GET input form data into a usable JavaScript object.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
// SETUP -----------------------------------------------------------------------
app.set('view engine', 'ejs'); // 'as' snippet.
app.use(express.static(__dirname + '/public')); // 'static' snippet.

var port = 3000;
app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
// DATABASE --------------------------------------------------------------------
// Not yet! Temp stuff.
var friends = ['Phil', 'James', 'Vik', 'Chrissy', 'Matt'];
// ROUTES ----------------------------------------------------------------------
  // GET
  // '/' Root
  app.get('/', (req, res) => {
    console.log("Someone requested 'root'.");
    res.render('index');
  });
  //-------------------------------------
  // 'friends'
  app.get('/friends', (req, res) => {
    console.log("Someone requested 'friends'.");
    res.render('friends', {viewFriends: friends});
  });

  //-------------------------------------
  // POST
  app.post('/addfriend', (req, res) => {
    console.log("Someone requested 'addfriend'.");
    var newFriend = req.body.name;
    console.log(newFriend); //{ 'Han' }
    if(newFriend) {
      console.log("Adding new friend: " + newFriend);
      friends.push(newFriend);
    } else console.log("Error: Name not found.");
    res.redirect('/friends');
  });
  //-------------------------------------
  // DEFAULT
  // '*' Default
  app.get('*', (req, res) => {
    console.log("Someone requested something that doesn't exist.");
    res.status(404);
    res.send("404: Page not found.");
  });
