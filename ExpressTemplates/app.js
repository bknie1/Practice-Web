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
app.get('/fallinlovewith/:item', (req, res) => {
  console.log("Someone has requested '/fallinlovewith/:item'");
  var item = req.params.item;

  // We have to pass our item to the template.
  // We pass an View model (object) that assigns this item to a View model member.
  res.render('fallinlovewith', {viewItem: item});
});
//--------------------------------------------
headlines = []; // Normally from a database.
headlines[0] = {
  headline: "53-Inch Child Thrown From Roller Coaster Regrets Nothing",
  link: "https://local.theonion.com/53-inch-child-thrown-from-roller-coaster-regrets-nothin-1826016389"
};

headlines[1] = {
  headline: "Man Surprised By How Often He Still Uses Bullying Skills He Learned In High School",
  link: "https://local.theonion.com/man-surprised-by-how-often-he-still-uses-bullying-skill-1826011976",
};

headlines[2] = {
  headline: "‘I Look Forward To Ending My Life,’ Says Assisted Suicide Advocate Before Being Shot Out Of Cannon At Brick Wall",
  link: "https://www.theonion.com/i-look-forward-to-ending-my-life-says-assisted-suici-1825956481",
};

app.get('/posts/', (req, res) => {
  // Pass object with all headlines from the 'database'.
  res.render('posts', {viewHeadlines: headlines});
});

app.get('/posts/:number', (req, res) => {
  console.log("Someone requested the " + req.params.number + " headline.");
  var headline = headlines[req.params.number - 1]; // Offset
  console.log(headline);

  if(!headline) {
    res.status(404);
    res.send("Error: 404 Page not Found");
  }
  res.render('posts', {viewHeadlines: headline});
});
//--------------------------------------------
// Default Route:
  // Should always be last, else it overrides other potential requests.
app.get('*', (req, res) => {
  res.status(404);
  res.send("404: Page Not Found");
});
