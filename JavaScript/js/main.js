// Click event with CSS Toggle Example
var fullList = document.getElementsByTagName('ul');
console.log('fullList', fullList[0]);
var listItems = fullList[0].children;
console.log('listItems', listItems);

fullList[0].addEventListener('mouseover', togglePink);

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', toggleYellow);
}

// Color Toggle
function togglePink() {
  console.log('Toggling pink on ' + this);
  this.classList.toggle('pink');
}

function toggleYellow() {
  console.log('Toggling yellow on ' + this);
  this.classList.toggle('yellow');
}

//------------------------------------------------------------------------------
daysAlive();

// Prompt, Selection, and Text Content Change Example
function daysAlive() {
  var years = prompt("How many years have you been alive?");
  var days = years * 365.25;
  document.getElementById('daysText').textContent = days;
}

// Click Event Example
var header = document.querySelector('h1');
header.addEventListener('click', function (e) {
  alert("Header clicked!");
});

//------------------------------------------------------------------------------

// ES6 Class Definition Example
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

// Old Class Definition Example: C Struct Style
var person = {
  name: "Brandon",
  age: 28,
  city: "New Haven"
};
