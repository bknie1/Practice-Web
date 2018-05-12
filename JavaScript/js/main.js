// Click event with CSS Toggle Example
var fullList = document.getElementsByTagName('ul');
console.log('fullList', fullList[0]);
var listItems = fullList[0].children;
console.log('listItems', listItems);

// Add Listeners:
fullList[0].addEventListener('mouseover', toggleColor('pink'));

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', toggleColor('yellow'));
}

// Listener functions to assign:
// REPETITIVE Color Toggle
function togglePink() {
   // event.target is more context appropriate than 'this'
  console.log('Toggling pink on ' + this);
  event.target.classList.toggle('pink');
  // this.classList.toggle('pink');
}
function toggleYellow() {
  console.log('Toggling yellow on ' + this);
  event.target.classList.toggle('yellow');
}

// CONDENSED Color Toggle
function toggleColor(color) {
  console.log("Toggling " + color);
  // We construct and return our function. Invoking immediately doesn't work!
  return function toggle () {
    event.target.classList.toggle(color);
  };
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
