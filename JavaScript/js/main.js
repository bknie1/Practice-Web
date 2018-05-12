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
// Button Example
var btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
  document.querySelector('h1').textContent = "Button clicked.";
});
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
// Game Score Logic
var score1 = 0;
var score2 = 0;
var gameOver = false;
var addP1 = document.querySelector('#add-p1');
var addP2 = document.querySelector('#add-p2');
var reset = document.querySelector('#reset');

addP1.addEventListener('click', incrementScore('p1'));
addP2.addEventListener('click', incrementScore('p2'));
reset.addEventListener('click', resetScore);

function incrementScore(player) {
  console.log('Increment Score event assigned.');
    return player == 'p1' ? function increment() {
      if(!gameOver) {
        var currentScore = document.querySelector('#score-input').value;
        score1 += Number(currentScore);
        console.log('P1 scored.', currentScore);
        document.querySelector('#p1-score').textContent = score1;
        console.log("Player 1: " + score1 + " Player 2: " + score2);
        if(score1 < 5) return;
        gameOver = true;
        }
        document.querySelector('#game-status').textContent = "Game over!";

    } : function increment() {
      if(!gameOver) {
        var currentScore = document.querySelector('#score-input').value;
        console.log('P2 scored.', currentScore);
        score2 += Number(currentScore);
        document.querySelector('#p2-score').textContent = score2;
        console.log("Player 1: " + score1 + " Player 2: " + score2);
        if(score2 < 5) return;
        gameOver = true;
      }
      document.querySelector('#game-status').textContent = "Game over!";
    };
}

function resetScore() {
  console.log('Resetting game.');
  score1 = 0;
  score2 = 0;
  gameOver = false;

  document.querySelector('#game-status').textContent = "Playing to 5.";
  document.querySelector('#p1-score').textContent = score1;
  document.querySelector('#p2-score').textContent = score2;
}
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
