daysAlive();

class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

var person = {
  name: "Brandon",
  age: 28,
  city: "New Haven"
};

function daysAlive() {
  var years = prompt("How many years have you been alive?");
  var days = years * 365.25;
  document.getElementById('daysText').textContent = days;
}
