// REQUIRES --------------------------------------------------------------------
const express = require('express'); // 'req' snippet.
var app = express(); // Typical local assignment.

// Parses GET input form data into a usable JavaScript object.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// We can use this to make API requests.
const request = require('request');
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
var campgrounds = [
  {
    name: 'Happy Camp',
    image: 'https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg'
  },
  {
    name: 'Salmon Creek',
    image: 'https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg'
  },
  {
    name: 'Respite Falls',
    image: 'https://farm5.staticflickr.com/4123/4943676109_b93d9c1203.jpg'
  }
];

// ROUTES ----------------------------------------------------------------------
// GET REQUESTS -----------------------
// '/' Root
app.get('/', (req, res) => {
  console.log("Someone requested 'root'.");
  res.render('index');
});
//-------------------------------------
// '/campgrounds'
app.get('/campgrounds', (req, res) => {
  console.log("Someone requested 'campgrounds'.");
  res.render('campgrounds', {viewCampgrounds: campgrounds});
});
//-------------------------------------
// '/campgrounds/new'
app.get('/campgrounds/new', (req, res) => {
  console.log("Someone requested 'new' (campground).");
  res.render('new');
});
//-------------------------------------
// POST REQUESTS ----------------------
app.post('/campgrounds', (req, res) => {
  // Get campground data from a form.
  newName = req.body.name;
  newImage = req.body.image;

  console.log("Someone wants to add " + newName, newImage);
  if(newName != undefined || newImage != undefined) {
    campgrounds.push(
      {
        name: newName,
        image: newImage
      }
    );
    res.redirect('/campgrounds');
  }
  else {
    console.log("Error: Could not add campground.");
  }
  // Add a campground to our array.
});

//-------------------------------------
// DEFAULT
// '*' Default
app.get('*', (req, res) => {
  console.log("Someone requested something that doesn't exist.");
  res.status(404);
  res.render('404');
});
