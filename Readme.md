# Web Development Practice
A space to take web development notes, post snippets, and link resources.

 1. [Front End Basics](#front-end)
 2. [HTML](#html)
 3. [CSS](#css)
 4. [JavaScript](#javascript)
 5. [ECMA](#ecma)
 6. [jQuery](#jquery)
 7. [Back End Basics](#back-end)
 8. [RESTful Routing](#RESTful-routing)
 9. [Databases](#Databases)
 10. [Authentication](#Authentication)
 11. [Node.js](#node.js)
 12. [Express and EJS Templating](#express-and-ejs-templating)
 13. [Server Side Frameworks](#server-side-frameworks)
 14. [APIs and Packaging Data](#apis-and-packaging-data)
 15. [Full Stack](#full-stack)

## Front End

### Design

#### Separation of Concerns
  - Structure: Our HTML.
  - Behavior: Our JavaScript.
  - Presentation: Our CSS.

There will be some overlap but we want to encapsulate and delegate as much code to where it belongs. Yes, we can modify style with JavaScript, but the bulk of our style should be determined by the CSS. In this case, it would be a good practice to define a styled CSS class and use JavaScript to toggle that style on or off.

### HTML
HTML is the nouns of our page. It is our subject matter, but by itself, cannot act.

#### Snippets
[HTML5 Boilerplate](https://html5boilerplate.com/)

### CSS
CSS is the adjectives of our page. We can use CSS to describe our HTML and make things look cool.

#### CSS Frameworks and Tools
[Bootstrap](https://getbootstrap.com/)

[Bulma](https://bulma.io/)

[Evergreen UI](https://evergreen.segment.com/)

[Semantic UI](https://semantic-ui.com/)

[Sass](https://sass-lang.com/)

#### Inspiration
[Jen Simmons Layout Lab](http://labs.jensimmons.com/)

#### Resources
##### Layouts
[Bootswatch](https://bootswatch.com/)

##### Colors
[Flat UI Colors](https://flatuicolors.com/)

[Paletton](http://paletton.com/)

##### Lorem Ipsum Placeholder Text
[Bacon Ipsum](https://baconipsum.com/)

[Hipster Ipsum](https://hipsum.co/)

##### Fonts
[CSS Font Stack](https://www.cssfontstack.com/)

[Font Awesome](https://fontawesome.com/?from=io)

[Google Fonts](https://fonts.google.com/)

##### Images
[Unsplash (Creative Commons)](https://unsplash.com/)

### JavaScript
JavaScript is the verbs of our page. It's how we act on all of what we've constructed! JavaScript has implicit, immutable type data.

#### Basics
##### Primitive Data
  - Numbers: Integers, floating points, fractions; anything.
  - Strings
  - Booleans
  - Null and Undefined Values
    - Null: Declared and initialized as 'nothing'.
    - Undefined: Declared, but not initialized.

##### Built in I/O Methods
  - Alert("Foobar"): Text pop up.
  - Prompt: Text box pop up.
    - e.g. var name = prompt("What is your name?")
  - Console.Log("Foobar"): Log printing.

##### Data Structures
  - Arrays
  - Objects

Simple, Non-Class, Dictionary-like Object Example
```js
var person = {
  name: "Brandon",
  age: 28,
  city: "New Haven"
};
```
You can access values by name. e.g. person["name"]. Or, we can use the more typical '.' notation: person.name. However, this isn't very modular. Ideally, we create a Class Person and instantiate instances of Person using a constructor that takes the appropriate parameters.

JavaScript's new ES6 (EcmaScript 6) does support classes as we know and love them in other OO languages. However, we don't define members up front; we do it all in the constructor. This means that person can be as simple or as complex as we want.

```js
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}
```
##### The Domain Object Model (DOM)
When we use JavaScript, it interprets the entirety of our page as one big **object tree**. Typing 'document' yields the HTML, but typing **console.dir(document)** yields the entirety of this object tree we want to interact with. We can also use console.dir() to examine selected objects further.

We use selectors to discriminate between different parts of our tree. Each object in our tree has its own properties, too. For example, elements like paragraph, or header, have text contents.

#### Commands

##### Vanilla Selectors
  - document.getElementById: By #id
  - document.getElementByClassName: By .class
  - document.getElementByTagName: By <tag>
  - document.getElementByName: By name attribute.
  - document.QuerySelector: Returns first matching object.
  - document.QuerySelectorAll: Returns all matching objects.

##### Actionable Design
We can define a style using CSS and add or remove that style using actions in JavaScript. It's best to compartmentalize the bulk of styling within the CSS. Instead, we can use classes to toggle styles.

  - element.classList.add("className")
  - element.classList.remove("className")
  - element.classList.toggle("className"): If added, remove, if removed, add it back.

##### Text Content
How we edit the text attribute in our elements or tags.

  - element.textContent: Returns the stored text data.
  - element.textContent = "fubar": Assigns new text data.

##### Manipulating Attributes
Key: value pairs in our elements or tags.

  - element.getAttribute("href"): Returns the stored website URL.
  - element.setAttribute("href", "www.duckduckgo.com"): Replaces the attribute's value with DuckDuckGo.

##### Callback Functions
In JavaScript, functions are first class objects. When you return a function from another function, we delay invocation. JavaScript is writing itself on the fly so if you invoke too early it won't know what to do.

###### Example
This is the ugly, repetitive way to invoke two different class toggles on an object.
```js
// Repetitive Color Toggle

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
```
Instead, we can reduce repetition by crafting an appropriate function on the fly. In other programming languages I would simply pass color and invoke the toggle command. But, because JavaScript is eager, it tries to run it immediately without considering my specific argument.

Instead, we have to delay invocation with a callback: We create a one-off function or anonymous function that uses our argument (color). Once it's constructed, it's returned, and ready to be invoked.

The moral is that if you're too eager to invoke with a parameter it's going to fail. You have to write a callback.
```js
// Condensed Color Toggle
function toggleColor(color) {
  console.log("Toggling " + color);
  // We construct and return our function. Invoking immediately doesn't work!
  return function toggle () {
    event.target.classList.toggle(color);
  };
}
```

##### Event Listeners
We have to add event listeners to our elements in order for them to respond to key clicks, mouse clicks, mouse overs, etc. If our even listeners 'hear' something they will trigger a defined function.

  - element.addEventListener(type, function)

  ```js
  button.addEventListener("click", function() {
    console.log("Button clicked.")
  });

  document.getElementById("myBtn").addEventListener("click", myFunction);

  function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
  ```
Types of events may include:
  - click
  - mouseover
  - mouseout
  - resize for window resizing.

###### Bubbling and Capturing Events
There are two ways events propagate in our DOM. In **Bubbling**, the inner element's event is handled before each outer element. In **Capturing**, or alternatively, **Tunneling**, is when we handle the outer most element's event before any inner events.

- addEventListener(event, function, useCapture)

useCapture is an optional boolean parameter and can be set to true. By default, our events bubble unless we specify otherwise.

##### Hoisting
In JavaScript, declared variables are hoisted to the top of their current scope. This means variables can be used before they have been declared. However, it is likely already habit to declare your variables at the top of your scope, so while this exists, most developers don't know about it because they declare at the top anyway.

#### ECMA
ES helped craft JavaScript standards so we don't struggle with cross browser compatability. Every year, new features are added that are likely incompatible with older stacks.

##### ES 2015
These additions were included in ES 2015.

###### const
Allows you to create constant variables. However, objects are not immutable; you can still modify arrays.

###### let
Allows you to declare variables in a specific scope. let thisData for each iteration inside a loop will be specific to that loop; thisData is inaccessible outside of that loop. This allows for some more direct control over where/when objects live or die. Let defined objects are technically hoisted, but JavaScript knows to disallow access to this information; the let variable is in a "temporal deadzone (TDZ)".

You cannot redeclare the same variable using the let keyword multiple times.

Use Case for let
```
for(var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000)
}

// Prints 0 1 2 3 4 5 5 5 5 5. Why?
```
Our 5 is printed five times. This is because our loop has already finished and, because i was hoisted/incremented (nearly instantly) outside of setTimeout, by the time we get to setTimout's logic, i has already been incremented to 5!

We used to solve this by doing:
```
for(var i = 0; i < 5; i++) {
  function(j) {
    setTimeout(function() {
      console.log(i);
    }, 1000)
  }) (i)
}
// 0 1 2 3 4
```
This way, we force our loop to wait for each iteration of setTimeout to finish. But this is pretty ugly. Let will allow us to manipulate our scope:

```
for(let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000)
}
```

This works out of the box because we are only allowed to reference i within setTimeout. i is in a "temporal deadzone (TDZ)" and cannot be accessed until ready.

###### Template Strings
We can use a short hand version for string concatenation.

```
var firstName = "Joe";
var lastName = "Bob";

console.log("Hello " + firstName + " " + lastname + "!");

// Or, with template strings:

console.log('Hello $(firstName) $(lastName)'); // Better!
```

The back ticks allow us to spread this operation across multiple lines.

###### Arrow Functions
A more concise alternative to using the word function. There are some "gotchas". Arrow functions are different from regular functions; they don't get their own "this" keyword. Rather, the keyword "this" has its original meaning from the enclosing text.

```
// ES 2015
var add = function(a, b) {
  return a + b;
}

// ES5
var add = (a, b) => {
  return a + b;
}

// ES5 One Liner
var add = (a, b) => a + b;

// Use Case with ES5
[1, 2, 3].map(function(value) {
  return value * 2;
} // [2, 4, 6]

// Simplified with ES2015
[1, 2, 3].map(value => value * 2;


// Double and filter values that are divisible by 3.
// Use Case with ES5
function doubleAndFilter(arr) {
  return arr.map(function(value) {
    return value * 2;
  }).filter(function(value) {
    return value % 3 === 0;
  })
};

doubleAndFilter([5, 10, 15, 20]); // [30]

// Simplified with ES2015
var doubleAndFilter = arr => arr.map(value => val * 2).filter(num => num % 3 === 0);

doubleAndFilter([5, 10, 15, 20]); // [30]
```

There are some "gotchas" to consider.
```
var instructor = {
  firstName: "Elie",
  sayHi: function() {
    setTimeout(function() {
      console.log("Hello " + this.firstName);
    }, 1000);
  }
} // Hello undefined! Why? Because "this" is working exclusively in the scope of the block.

var instructor = {
  firstName: "Elie",
  sayHi: function() {
    setTimeout(function() {
      console.log("Hello " + this.firstName);
    }.bind(this), 1000);
  }
} // Hello Elie! Because we bind "this" to the scope of setTimeout.

// Why this? If we were to change the name of our instructor to something else, it will still work.
```
sayHi() won't work if you turn it into an arrow function because it does not get its own keyword argument. It can't actually access the keyword "arguments". However, it can access "arguments" if the arrow function is inside another standard function. JavaScript is weird.

##### Default Parameters
```
function add(a = 0, b = 0) {
  return a + b;
}
```
If no argument given, we can use defaults.

##### For ... Of Loop
ES2015 gives us a new primitive data type called "symbol". It has an iterator that helps JavaScript iterate. It cannot be used for objects.

```
var arr = [1, 2, 3, 4, 5];

for(let val of arr) {
  console.log(val);
}
```

##### Rest

New operator in ES 2015. Collects the remaining arguments in a function and returns them in an array.

```
function printArgs(a, b, ... c) {
  console.log(a);
  console.log(b);
  console.log(c);
} // No ... here!

printArgs(1, 2, 3, 4, 5); // 1, 2, (3) [3, 4, 5]

// ES5
function sumArgs() {
  var total = 0;
  for(var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// Fancy ES5
function sumArgs() {
  var argsArray = [].slice.call(arguments); // What we would like to slice with arguments.
  return argsArray.reduce(function(accumulator, nextValue) { // Reduce to sum all values.
    return accumulator + nextValue;
  }
}

// With the Rest Operator: Get all args from arguments then add them up.
var sumArgs = (...args) => args.reduce(acc, next) => acc + next);
```

##### Spread
When "..." are used outside the parameters to a function, its a spread. It allows us to spread each value out (as a comma separated value). Useful when you have an array but what youa re working with expects comma separated values.

```
// ES5
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var combined = arr1.concat(arr2);

// ES 2015
var combined = [...arr1, ...arr2];

// ES5 w/ Apply
var arr = [3, 2, 4, 1, 5];
Math.max(arr); // NaN
Math.max.apply(this, arr); // 5

// ES 2015: Spread out and find.
Math.max(...arr); // 5

function sumValues(a, b, c) {
  return a + b + c;
}

var nums = [12, 15, 20];

// ES5
sumValues.apply(this, nums); // 47

// ES2015: Spread and pass.
sumValues(...nums); // 47
```
##### Objects
Objects exist in ES5, but we can write them differently in ES2015.

```
// ES5
var instructor = {
  sayHello: function() {
    return "Hello!";
  }
}

// ES 2015
var instructor = {
  sayHello() {
    return "Hello";
  }
}
```

##### Computed Property Names
```
// ES5
var first = "Elie";
var instructor = {};

instructor[first] = "That's me!";

instructor.Elie; // "That's me!"

// ES2015
var first = "Elie";
var instructor = {
  [firstName: "That's me!"
}

instructor.Elie; // "That's me!"
```

##### Object Destructuring
Exacting values from data stored in objects and arrays. Destructuring allows us to unpack values into distinct variables.

```

var instructor = {
  firstName: "Elie",
  lastName: "Schoppik"
}

// ES5
var firstName = instructor.firstName;
var lastName = instructor.lastName;

// ES2015
var {firstName, lastName} = instructor;
```

The catch is that we have to name our variable names the same as they are in the object unless we specify.
```
// ES2015 with specific variable names.
var {firstName: first, lastName: last} = instructor;
first; // Elie
last: // Schoppik
```

This is a very common tool used in React.

```
function displayInfo( {name, favColor } ) {
  return [name, favColor];
}

var instructor = {
  name: "Elie",
  favColor: "Purple"
};

displayInfo(instructor); // ["Elie", "Purple"]
```
##### Array Destructuring
We can use destructuring on arrays, too.

```
var arr = [1, 2, 3];

var a = arr[0];
var b = arr[1];
var c = arr[2];

// ES2015
var [a, b, c] = arr;

function returnNumbers(a, b) {
  return [a, b];
}

var [first, second] = returnNumbers(5, 10);

// Swapping values
function swap(a, b) {
  // a is temp stored, b assigned, a assigned to old b, return.
}

// ES2015
function swap(a, b,) {
  return [a, b] = [b, a]; // Similar to Python
}

swap(10, 5);
```

##### Instance Methods

##### Class Methods

##### Inheritence

##### Super

##### Maps

##### Sets

##### Promises
A new constructor. A one time, guaranteed return of some future value. We don't know what the value of the async operation will be, or when it will finish executing, so we create a placeholder. When it is figured out it is fulfilled/resolved or rejected.

A metaphor would be ordering food, being given a receipt, and waiting for the food. The receipt is the promise that you will receive your food. If you stand in the way, you are blocking/being syncronous. If you move out of the way and wait, you are being asynchronous!

These are created using the "new" keyword.

The returned value from a promise will always contain a .then and .catch method which are functions to be executed when the promise is resolved or rejected. Since each promise always returns something that has a .then, we call it thenable. We can chain promises together and return promises from one promise to another.

```
// Simple Example
function displayAtRandomTime() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if(Math.random() > .5) {
        resolve("Yes!");
      } else {
        reject("No!");
      }
    }
  }
}
```

##### Generators

#### jQuery
jQuery is similar to vanilla JavaScript, but its a library that allows us to do everything a little faster with less code. It is very selector heavy, but doesn't feature the component templates of newer libraries. Still, the selector syntax ($) is easy to pickup and makes some JavaScript commands less verbose.

##### $() Selector
Use **$()** to select elements. This is similar to QuerySelectorAll in vanilla JavaScript. E.g. $('img'), $('.myClass'), $('#myID'), $("li a").

  - $('element')
  - $('element.class')
  - $('#id')
  - $(element:first-of-type)
    - The first occurrence of an element.
    - First of Type is a CSS selector.
    - Alternatively, we can use 'first', but it's a little slower because it is a jQuery type; it's extra/non-native.

Use **.css()** to style elements. We can either style one key: value pair at a time or by passing in a CSS formatted snippet as a single argument. Note, we can't use dashes, so where we would write *font-size* in CSS, we have to use camel case, *fontSize*, in JavaScript.

###### Selector Examples
```js
// Selects all divs.
$('div').css("background", "purple");
// Selects all divs with class highlight.
$('div.highlight').css("width", "200px");
// Selects div with ID third.
$('#third').css("border", "4px solid orange");
// Selects the first div only.
$("div:first-of-type").css("color", "pink");
```

##### Common Methods

Given:
```html
<h1>Let's Learn jQuery</h1>
<input type="text" placeholder="Your Name">

<ul>
  <li>Skittles</li>
  <li>Starburst</li>
  <li>Twix</li>
</ul>
```

  - val()
    - Retrieves the current value.
    - Sets the current value if given a second arg.
    ```js
    $('input').val()
    // "123"

    $('input').val('456')
    // "456"
    ```

  - text()
    ```js
    $('h1').text()
    // "Let's Learn jQuery"

    $('h1').text("New text!")
    // Replaces with "New text!"
    ```

  - attr()
    - Gets the value of an attribute of the first matched element.
    ```js
    ('input').attr('placeholder')
    // "Your Name"

    ('input').attr('placeholder', "Not Your Name")
    // "Not Your Name", replaced!
    ```

  - html()
    - Gets the HTML content of the first matched element.
    - Sets the HTML of all elements captured.
    ```js
    $('li').html()
    // "Skittles"

    $('li').html("<li>I hacked your list.</li>")
    // I hacked your list. (Replaces all li contents.)
    ```

  - addClass()
  - removeClass()
  - toggleClass()

    ```js
    $('li').toggleClass("alert");
    // w.fn.init(3) [li, li, li, prevObject: w.fn.init(1)]
    $('li').toggleClass("alert");
    // w.fn.init(3) [li.alert, li.alert, li.alert, prevObject: w.fn.init(1)]
    $('li').removeClass("alert");
    // w.fn.init(3) [li, li, li, prevObject: w.fn.init(1)]
    $('li').addClass("alert");
    // w.fn.init(3) [li.alert, li.alert, li.alert, prevObject: w.fn.init(1)]
    ```

#### Hover/Mouse Over Event Listener Setup and Style Examples
jQuery has a variety of ways to set up event listeners. However, most of the time you will likely be using these with **on()** being the most used.

  - click()
  - keypress()
    - Fires between down and up.
    - Indicates which character was entered.
      - charcode
      - keycode
      - which
        - The code of they key press.
        - jQuery docs cite 'which' a lot.
    - We need to have an argument so we can retrieve information about our key press.
      - Often 'event', or 'e'.
  - keydown()
    - Fires on key down.
    - Returns a code for key pressed; not character.
    - Requires event arg.
  - keyup()
    - Fires on key up.
    - also returns a code for key pressed; not character.
    - Requires event arg.
  - on()
    - **The most common jQuery event command.**
    - Unlike click(), or keypress(), we can specify different kinds of input.
      - click
      - dblclick
      - dragstart
      - scroll
      - And more!

**Note about click() vs. on()**: Using a second argument, on() can be used to fire on current and all future children. This means we only have to assign an event listener using on() once if we know the target element and its parent. However, if we create new elements, and we used click(function(e) ), we have to call click(function(e) ) again to add that assignment manually.

Therefore, it is **usually preferable** to use **on()** instead of **click()**.

```js
// A simple click listener.
$('#next-button').click(function() {
  alert("Next button clicked.");
});
```

```js
// An Enter (key code 13) key press listener.
$('input').keypress(function(event) {
  if(event.which == 13) {
    console.log('You hit enter!');
  }
});
// Note, we pass event (e for short) so we can get data about our key press.
```

```js
// On is the most versatile as there are tons of different types of first parameter input we can listen for.
$('#next-button').on('dblclick', function() {
  alert("Next button was double clicked.");
});
```

```js
var listItems = $('li');

listItems.hover(function() {
  $(this).css("color", "green");
  },
  function() {
    $(this).css("color", "black");
});

/* Alternatively, separate mouse enter and leave events
accomplishes the same result. */

$(listItems).mouseenter(function () {
    $(this).css("color", "#00FF00");
});
$(listItems).mouseleave(function () {
    $(this).css("color", "#000000");
});

// We can also send one, CSS formatted arg.
$('h1').css({
  fontSize: "72px",
  border: "3px dashed purple",
  background: "rgba(89, 45, 20, 0.5)"
});
```

#### jQuery Effects
jQuery has a ton of different effects. You can apply effects to selected elements:

  - .fadeOut(duration, endFunction)
    - function on complete is optional.

  Example:
  ```html
  <div class="square">This will get faded.</div>
  <div class="square">This will get faded, too.</div>
  <div class="square">You guessed it.</div>
  ```

  ```css
  .square {
    background-color: teal;
    float: left;
    height: 100px;
    width: 100px;
  }
  ```

  ```js
  $('.square').on('click', function(event) {
    $(this).fadeOut('slow', function() {
      console.log('Faded square.');
    });
  });
  ```

#### Frameworks and Libraries
[jQuery](https://jquery.com/)

[React](https://reactjs.org/)

[Vue.js](https://vuejs.org/)

## Back End
### Internet Basics
#### Steps
  1. When we enter a URL, we find the right site address. (Readable URL to IP Address)
  2. Next, we request the fastest path possible from your computer to that address.
  3. The site server responds, builds us the appropriate content (using information from the back end).
  4. The browser renders the page from HTML, CSS, and JavaScript.

### Static vs. Dynamic Sites
#### Static
Everything basic websites are; there isn't any information on the back end. **Everything is constructed at load time** from the same HTML, CSS, and JavaScript. Things don't really change around.

#### Dynamic
Sites that are compiled on the server side. **The server constructs the page before its sent back as a response.** For example, when we refresh reddit, we get different content every time, because its being constructed from scratch for us every time.

### Stacks and Back End Technologies

#### Generic Stack Components
  - Back End: Language/App, Server, Database
    - Ruby, Python, Scala, Java, JavaScript, PHP, C#
    - Postgres, SQLite, MySQL, MongoDB
  - Front End: HTML, CSS, JS

We can use [stackshare.io](http://www.stackshare.io) to see what different companies use.

#### My Stack
  - Back: Node.js, Express, MongoDB
  - Front: HTML, CSS, JS/jQuery

##### reddit Stack Example
  - Back: Python/Flask, nginx, Postgres
  - Front: HTML, CSS, JS

##### Airbnb Stack Example
  - Back: Ruby/Ruby on Rails, nginx, mySQL
  - Front: HTML, CSS/Sass, JS/React

#### Potential Back End Features
  - User Account Management
  - Constructing Views for the User
  - Adding/removing posts to a database.
  - Adding new comments.
  - Sort/Rank Posts
  - Create a subreddit.
  - Add to newsletter.

#### Interaction Flow Example
  1. Front: Ask for reddit homepage.
  2. Back: Get top posts from DB and send back homepage content.
  3. Front: Browser renders page.
  4. Front: User searches for 'cats'.
  5. Back: Finds all posts about cats.
  6. Back: Sends the HTML for the results page.
  7. Front: Browser renders page.

### HTTP
The Hyper Text Transfer Protocol dictates the request/response cycle. We navigate the internet by making requests and getting responses with the data we're interested in.

A free tool, [Postman](https://www.getpostman.com/), let's us trace this cycle. It's primarily for developers but can help us understand how the cycle works.

We can simply visit Google.com and that's technically a request. But we can make requests from other browsers, apps, the CLI, the back end, a mobile app, scripts, and more.

#### HTTP Verbs
These are some of the types of requests we can make. Just because these requests are made doesn't necessarily mean they happen; they are merely protocol messages with intentions.

  - GET
    - Retrieving information. Asking for data to come back.
      - e.g. Making a GET request on Google.com, without parameters, will merely return the HTML, CSS, and JS required to construct the page.
    - You can send some data with a GET request using forms.
      - e.g. reddit.com/search?q=corgis
  - POST
    - Sending information.
    - You can't make these from a search bar.
    - You can make them using HTML forms.
  - PUT
    - To update or edit things; like a Facebook post.
  - PATCH
    - To update or edit things.
  - DELETE
    - Deletes something.
  - And other, less common ones.

##### GET Example

```
reddit.com/search?q=corgis
```
**var q = 'corgis'**

The reddit server is looking for the data stored in the q variable send with the request. We can keep adding arguments:

```
reddit.com/search?q=corgis?city=newhaven
```
**var city = 'newhaven'**

But reddit isn't looking for a variable named city so nothing will happen.

##### Headers
Headers are included with every request. Important ones include:
  - Content-Type
    - What are you sending? Usually text/html but you can do others.
  - Date/Time
  - Status
    - The status code.
      - e.g. 200, good request.
      - e.g. 404, not found.

### RESTful Routing

REST: Respresentational State Transfer

A mapping between HTTP routes and CRUD (Create, Read, Update, Destroy). Our routes are attached to HTTP methods. We can follow this route naming pattern in order to make our application clear, concise, and even discoverable.

#### Cheat Sheet
This is a quick cheat sheet for HTTP methods and RESTful routing. We follow these patterns and actions when we write routes.

| **URL** | **HTTP Verb** |  **Action**|
|------------|-------------|------------|
| /cats/         | GET       | index  
| /cats/new      | GET       | new   
| /cats          | POST      | create   
| /cats/:id      | GET       | show       
| /cats/:id/edit | GET       | edit       
| /cats/:id      | PATCH/PUT | update    
| /cats/:id      | DELETE    | destroy  

## Databases
Both SQL and NoSQL database schemas usually lean on associations to relate some data to some other data.

### SQL vs. NoSQL
SQL requires that your tables be complete up front. If you try to add an attribute later, you will have to update all previous entities to that table; either by NULLing them, or adding some placeholder data.

NoSQL does not require complete tables. However, you may query two entities, and find that one has more information than the other. NoSQL does not force you to refactor old entitities. Also, there is no strict consistency enforcement. NoSQL is more flexible, but may create more technical debt.

### Associations

#### SQL
In SQL, we use JOIN tables to associate data e.g. User and Email tables would have a JOIN table where we associate some User's emails with that User.

#### NoSQL
In NoSQL, we can have embedded associations or object reference associations.
- Embedded associations mean we write the entire object to some other object. For example, each User has an array of emails, and that array consists of complete email objects.
- Object reference associations mean we have a User with an array of Email object references, rather than entire Emails. We simply point to where each email is located rather than having a complete copy.

There is a use case for both. For example, if some data is unique to some user, we may not need to point to a reference that could be shared. However, if we are tagging Games with genre labels, multiple games may use the same tag, and so referencing shared tags may be more practical.

Different use cases require different database and schema architecture.

## Authentication

### Middleware
Middleware are the actions that occur after an HTTP request is made, but before a route has completed. Authentication often lives in the middleware; we need to determine access before we grant it, or redirect in the absence of access.

### Sessions
HTTP is stateless; it makes one time requests. We can use Sessions to make HTTP stateful. There is some information saved in an encoded HTTP message that the server can recognize. The server can crack the code and determine if say, a user is signed in. Every time we make a request, we remind the server that some user is signed in, and to react accordingly.

As soon as that user signs out, the information is removed from the session, and they may no longer have access to certain information.

#### Passport
Passport can be used to streamline authentication in Node.js apps. See below for a demo.

```js
const User = require("./models/user"); // Includes passportLocalMongoose Plugin e.g. userSchema.plugin(passportLocal)
const passport = require("passport"); // Passport JS
const localStrategy = require("passport-local"); // Passport Local: Username, Password
const passportLocalMongoose = require("passport-local-mongoose"); // Catered to Mongoose

app.use(require("express-session")({
	secret: "YOURDECODINGKEYHERE",
	resave: false,
	saveUninitialized: false
}));

passport.use(new localStrategy(User.authenticate())); // Allows local authentication.
app.use(passport.initialize()); // Required for passport use.
app.use(passport.session()); // Required for session use.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("/register", (req, res) => {
	let username = req.body.usernameInput;
	let password = req.body.passwordInput;
	
	// New user, not saved to the DB yet.
	// Notice that we don't save the password to the User; this is unsafe.
	// Instead, we hash and save it using our Passport-Local-Mongoose register() call.
	
	User.register(new User({username: username}), password, (err, user) => {
		if(err) {
			console.log(`Error: ${err}`);
		}
		
		passport.authenticate("local")(req, res, () => {
			res.redirect("/secret");
		});
	});
});

// Compares this Sign In information to what's in our DB.
app.post("/signin", passport.authenticate("local"), {
	successRedirect: "/secret",
	failureRedirect: "/"
}, (req, res) => {
 // Handled by the middleware.
});
```

### Node.js
Up until recently JavaScript was a browser only language. It's a way for us to write JavaScript on the server side.

#### app.js
Note: Not to be confused with app = express(). app.js is our starting file.

'app' dictates our serving behavior. When we run app.js our server will start. The server will listen for incoming requests.
  - Setup
    - Sets up logging and parsing of data.
  - Database
    - Sets up our database with different model schema.
  - Routes
    - Handles the different arguments we attach to our domain.
      - app.get(route, function)
        - Handles incoming get requests.
      - app.post(route, function)
        - Handles incoming post requests.
      - app.listen(port, function)
        - Most important! Its required to receive outside requests!
      - e.g. reddit.com/search, 'search' takes us down a route that accepts a string, that we assign to 'q', as a search argument.

#### app.js Setup
First, we need to require() express. Then, we need to declare a port to be used. Finally, we have to listen for requests to our app on that port. Without a listener, our web app won't do anything!

**Note:** Get requests will be explained below.

##### Full Example
```js
//- REQUIRES -------------------------------------------------------------------
const express = require('express');
var app = express();
//- SETUP ----------------------------------------------------------------------
var port = 3000;
app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
//- DATABASE -------------------------------------------------------------------
// Nothing yet!
//- ROUTES ---------------------------------------------------------------------
// "/"
app.get('/', (req, res) => {
  console.log("Someone has requested '/'");
  res.send("Hello!");
});

// "/bye"
app.get('/goodbye', (req, res) => {
  console.log("Someone has requested 'goodbye'.");
  res.send('Goodbye!');
});
```

#### Simple Node.js and Express.js GET Example
```js
app.get("/", function(req, res) {
  res.render("home")
});
```
When the user sends a GET request with a 'root' (/) route (e.g. google.com/, or localhost:3000/), we render a page called 'home' in the response. 'home' is a **View** we constructed.

get() takes two parameters:
  - The URL/Path, **Route**
  - A callback function with the request and response.
    - **Request** contains all the information about the request that was made.
    - **Response** contains the information we're going to respond with.

##### Routes
The route is the URL path the user requested. Depending on the URL, we route the user to different kinds of information.

###### * : Splat/Star Route Matcher and Default Route
```js
app.get('*', (req, res) => {
  res.send("Error: 404 Page not Found");
});
```
Serves as a catch-all, **default route**. This way, if we receive a request we aren't familiar with or ready to handle, we can default to this Splat/Star route. For example, a formatted 404 page.

Must be placed last in our route list because we iterate top down. Because its a catch all/wildcard, if this default route is first, it will always be valid, and we won't reach the other potential routes.

**Route order matters! The default route should always be the last route in our list of routes**.

###### Route Parameters
We can pass custom arguments to a route to reduce route repetition and instead use logic to serve the user.

####### reddit Example
Reddit has thousands of popular subreddits; topic forums the user can visit. There are not routes for each subreddit. Instead, the route takes an argument, the user's preferred subreddit, and generates a View of information from that particular subreddit.

If a **route** requires a **parameter**, that information will be transmitted in the **request**. Request owns a dictionary, **params**, that contains passed **key: value pairs**. For example, if I have a route:

```
/r/:subreddit
```
And if I pass *r/soccer/*, My request contains a member, params, that contains
```
params: { subreddit: 'soccer' }
```
I pass my request into my inner function and I can freely access this data to construct an appropriate View.

```js
// Bad Example without Parameters; only specific routes.
app.get('/r/soccer', (req, res) => {
 // ...
});
app.get('/r/games/comments/3puds5/hello/', (req, res) => {
 // ...
});

// Good Example with Parameters
  // Tells express to read in subreddit as a variable.
app.get('/search/:subreddit', (req, res) => {
  console.log("User requested a subreddit.");
  console.log(req); // Contains params: { subreddit: 'soccer' }

   // Accesses the value of our subreddit key from the request parameters.
  res.send("You want go to " + req.params.subreddit);
  // Yields 'You want to go to soccer'
});

```

##### Response
Response has a variety of different response methods.
  - render
    - Renders a View.
  - send
    - Sends a message.

#### Dynamic Node.js and Express.js GET Example
```js
app.get("/dogs", function(req, res) {
  // Get all dogs from the database.
  Dog.find({}, function(err, dogs) {
    // Render dogs.
    res.render("dogs", {dogs: dogs});
  });
});
```
The user routes to /dogs. We request a list of dogs from the database and pass that ViewModel information to our View.

In the View, we use ExpressJS (<% ... %>) embedded code. For each dog, we create a list item with that dog's information.

Finally, we respond with that constructed, multi-dog View. The user sees a list of dogs.

#### Simple Node.js and Express.js POST Example
**Note:** First, There is a node package called bodyparser that we can use to translate *req.body* into a JavaScript object. It used to be bundled with Express but no longer is as of May 2018.

```js
// Parses GET input form data into a usable JavaScript object.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
```

Then, we can begin parsing input form data. The user submits a friend's name:
```html
<form class="input" action="/addfriend" method="post">
  <input type="text" name="name" placeholder="Name">
  <button type="submit">Add Friend</button>
</form>
```

```js
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
```
The user passes name and breed arguments to create a dog. A dog is created and added to our database of dogs using this data.

Once the dog has been added, the user is forward to our dogs page, which is responsible for creating a list of every dog in the database, anyway. The user should be able to see the newly added dog.

**Note:** We have to use a tool like Postman to respond to this POST request because, in this example, there isn't any HTML responsible for the POST.

**Warning:** Right now, we don't have anything in between to validate this data, so empty 'dogs' are possible. We need some sanitization and validation layer in a real world example.

#### Form Node.js and Express.js POST Example
```html
<form action="/createDog" method="POST">
  <input type="text" placeholder="Name" name="name">
  <input type="text" placeholder="Breed" name="breed">
  <input type="submit">
</form>
```

When the user submits this form, it will send a POST request to /createDog where name and breed are the contents of the input.

```js
app.post("/createDog", function(req, res) {
  // Uses user args to create a dog, adds it to db.
  Dog.create({
    name: req.body.name,
    breed: req.body.breed
  }, function(err, dog) {
    // Then, we redirect the user to dogs.
    res.redirect("/dogs");
  });
});
```

In the first example, we could manually send this request with a tool like Postman. Now, on any page where this POST form exists, we can create dog entries.

#### Node Console
We rarely have to, but we can run 'Node' from the CLI to access

##### REPL
```
node repl
```
It's a place we can write JavaScript in our CLI. Ruby, and other server side languages, can also do something like this.

##### Running a File with Node
```
node <filename>
```
Will attempt to execute the file as JavaScript. We can use this to run app.js and launch our server. Again, Most server side languages also work this way.

#### npm: Node Package Manager
npm manages all the packages we want to associate with node.js. Angular.js is a very popular JavaScript framework; it has a package that can be installed with npm. Express, a way to generate HTML Views using JavaScript, is another package.

Packages are basically libraries, its just that these packages are specific to npm.

We use packages, tools, and frameworks to expedite our production.

##### Installing and Using Packages
```
npm install <package>
```
Installs a package.

```js
var packageName = require('packageName');
packageName().DoSomething();
```
To include and use the package in our project.

###### package.json
Lists the dependencies for a package so we can also go retrieve those dependencies for the package we want to use. e.g. Instead of just sending the recipe, we send the recipe and a list of ingredients needed to make the meal!

####### npm init
We can use npm init to initialize a new package.json for our project. After, whenever we use the --save flag:
```
npm install --save <package name>
```
npm will add this package, and its dependencies, to our package.json file. This way, if we transport our web app without its packages, we can quickly gather those dependencies again.

###### Install Flags
```
npm install --save <package name>
```
**Save Flag**: Not only installs a package, but saves the package as a dependency to our package.json list of dependencies.
- --save
- -s
```
npm install -g <package name>
```
**Global Flag**: Installs the package to our global node package folder so that it can be accessed by all node.js web applications running on a server. This means we don't have to install packages for each individual web app every time.
  - --global
  - -g

##### Useful Package List
- Express
  - A popular back end framework.
  - Introduces .NET-like razor Views.
- ejs
  - Embedded JavaScript
  - Required for Express
  - Allows us to create template Views.
- Angular.js
  - A popular front end framework.
- faker
  - Lower case 'f'.
  - Helps generate fake data to test your site with.
-  express
- bodyparser
 - For GET requests from input forms.
 - Turns req.body into a usable JavaScript object.

### Express and EJS Templating
When we write Express, we don't write plain HTML files. Instead, we write embedded JavaScript files with a **template**.

**Note:** ejs is a separate node package. Make sure it has been added to your project! Also, we can include a snippet that indicates we will be using .ejs in this project. This way, we don't actually have to specify the .ejs extension in our renders.
```js
app.set('view engine', 'ejs');
```
Instead of sending a response, we **render** these **Views** to the user.

**View:** Here, an HTML file with embedded JavaScript. In .NET, an HTML file with embedded C# (razor). We construct Views with data to present to the user. We **render** *views* in our *app.js* or other server side script.
```
res.render('home');
```
*Note:* Views must be placed in the '/views' folder.

**Partial View:** Like a View, but a smaller component we can use to create larger Views. This is handy for repeated code like HTML5 boilerplate. We **include** *partials* in our *view*.
```
<% include partials/header %>
```
*Note:* Partial views must be placed in the '/views/partial' folder.

Here, we render a homepage that's .ejs formatted:
```js
app.get('/', (req, res) => {
  console.log("Someone has requested '/'");
  res.render('home'); // or home.ejs if we don't set a view engine.
});
```
**Note:** *home.ejs*, and all other embedded JavaScript files, must be located in a folder called Views.

#### Passing a View Model to an EJS Template
```js
app.get('/fallinlovewith/:item', (req, res) => {
  console.log("Someone has requested '/fallinlovewith/:item'");
  var item = req.params.item;

  // We have to pass our item to the template.
  // We pass an View model (object) that assigns this item to a View model member.
  res.render('fallinlovewith', {viewItem: item});
});
```
The user is able to route to '/fallinlovewith/<item of their choice>'. We are able to access that item using the **parameter member** of the **request object**. the item is assigned locally.

Then, we render the 'fallinlovewith.ejs' View with a View Model object. Here, this *item* is assigned to an object member named *viewItem* and passed alongside the View. It is formatted as such:

```js
res.render(<View>, <View Model>);
```

#### Wrapping Tags

##### Opening Tags
**<%**: 'Scriptlet' tag, for control-flow, no output. The result isn't added to the HTML in any way.

**<%=**: Outputs the value into the template (HTML escaped). The result is added to the HTML.

**<%_**: ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it.

**<%-**: Outputs the unescaped value into the template.

**<%#**: Comment tag, there is no execution or output. Purely for documentation purposes.

**<%%**: Outputs a literal '<%'. This isn't EJS, just a way to escape out and use these characters in this order.

##### Closing Tags

**%>**: Plain ending tag.

**-%>**: Trim-mode ('newline slurp') tag, trims following newline.

**\_%>**: ‘Whitespace Slurping’ ending tag, removes all whitespace after it.

```html
<h2>You fell in love with <%= viewItem.toUpperCase(); %></h2>

<% if(viewItem == 'charlie'){ %>
  <h3>Good choice!</h3>
<% } %>
```

#### Serving Custom Assets
In Express, if we want to add custom CSS and JavaScript, we have to create a folder called **public** in our project root; alongside app.js:
```
app.js
/public
  - /css
    - style.css
  - /js
    - script.js
```
By default, Express only looks for items in the **view** folder. We have to tell app.js that assets in **public** need to be served.

This is where Express will for asset resources. When I **link** a **style** or **script**, the root of this search is this public folder.
```html
<link rel="stylesheet" href="/css/style.css" />
```
This will link to *public/css/style.css*.

**Note**: You must include the preceding '/' before css for your style to load properly on all pages. Else, /posts seemed to load the style, but /posts/ yielded a *not found* error.

### Server Side Frameworks
#### Framework vs. Library

Libraries are collections of tools we can use in our projects however we please. **You are in control.**

Frameworks aren't just a collection of tools we can use; they provide a skeletal structure of where and how to use things, as well. We should work within the 'frame' of the tool set. **The framework is in control.**

#### Heavyweight vs. Lightweight Frameworks
Imagine a mad-libs page where we can fill in blanks to create a narrative. Heavyweight and Lightweight frameworks are similar:

##### Heavyweight
Heavyweight Frameworks have very few blanks. They do most of the work for us and we only have to configure them slightly.

##### Lightweight
Lightweight Frameworks, in contrast, have many blanks, and we have to do a lot of the work to configure them for our own means.

##### Popular Web Frameworks
  - Express.js
    - Back End Framework
    - Lightweight
    - JavaScript
  - Flask
    - Back End Framework
    - Python
  - Django
    - Back End Framework
    - Python
  - Rails
    - Back End Framework
    - Heavyweight
    - Ruby
  - Sinatra
    - Back End Framework
    - Ruby
  - Sails.js
    - Another node web development back end framework.
    - JavaScript
  - Angular.js
    - Front End Framework
    - JavaScript

#### Express.js
Express is a **lightweight framework**.

### APIs and Packaging Data
An **Application programming interface**, both internal and external, allows us to ask for and receive information. They usually transmit data over **HTTP**.

#### REST and RESTful APIs

##### REST: Representational State Transfer
Based on HTTP, REST architecture, and RESTful web services, create opportunities for interaction between computers and the internet. They perform stateless operations.

*From Wikipedia:*
> REST-compliant web services allow the requesting systems to access and manipulate textual representations of web resources by using a uniform and predefined set of stateless operations.

**Note:** There is a REST route naming convention that should be adhered to. If I have a GET route that lists my campgrounds:
```js
app.get("/campgrounds", (req, res) => {});
```
And I want to be able to add new campgrounds, I should have a complimenting GET route:
```js
app.get("/campgrounds/new", (req, res) => {});
```
Where 'new' indicates we want to create a campground. This would direct users to a form compatible with our final, RESTful route:
```js
app.post('/campgrounds', (req, res) => {});
```
Where we get data from a user submitted form.

###### Full Route Example
```js
// ROUTES
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
    res.redirect('/campgrounds'); // Defaults to a GET, so it's okay.
  }
  else {
    console.log("Error: Could not add campground.");
  }
  // Add a campground to our array.
});
//-------------------------------------
```

And the add form:
```html
<main>
  <h3>Add Form</h3>
  <div class="padding-1">
    <form class="" action="/campgrounds" method="post">
      <div class="form-group">
        <label for="name-input">Campground Name:</label>
        <input id="name-input" type="text" name="name" placeholder="Enter Name">
      </div>
      <div class="form-group">
        <label for="img-input">Campground Image:</label>
        <input id="img-input" type="text" name="image" placeholder="URL">
      </div>
      <button type="submit" name="button">Submit</button>
    </form>
  </div>
</main>
```

##### RESTful APIs

RESTful APIs, the most common type of API, listens for state requests about a particular item or account, and returns that information for processing.

*From Wikipedia:*
> In a RESTful web service, requests made to a resource's URI will elicit a response that may be in HTML, XML, JSON, or some other format. The response may confirm that some alteration has been made to the stored resource, and the response may provide hypertext links to other related resources or collections of resources. When HTTP is used, as is most common, the operations available are GET, POST, PUT, DELETE, and other predefined CRUD HTTP methods."

#### JSON: JavaScript Object Notation
Transmits data objects in a human readable key: value format and array data types. We can bundle information into a JSON and respond to requests with it.

**Note:** Look familiar? It's in the name; they are formatted like simple JavaScript objects!

##### Example
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    },
    {
      "type": "mobile",
      "number": "123 456-7890"
    }
  ],
  "children": [],
  "spouse": null
}
```

#### XML: Extensible Markup Language
They can serve information like a JSON but also have a lot in common with HTML. But, unlike HTML, XML only gives is the data; not what it looks like. XML is also commonly used to structure apps.

#### Making API Calls in Node.js with Express

First, we install 'request', a popular request package. After we require it, we use it to call on an API URI. We also have a callback with error, response, and body arguments.

We print an error, if there was one, the status code of our request, and the raw data returned.

Finally, we use JavaScript's built-in JSON.parse() method to translate the raw data into a usable JavaScript object.

From there we can treat it like any other object!

##### Simple API Request
```js
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
```
##### API Search Request with Results View

The user requests our root, search View.
```js
// '/' Root: Search for movies.
app.get('/', (req, res) => {
  console.log("Someone requested 'search (the root)'.");
  res.render('search');
});
//-------------------------------------
```
We render a View that has an input form.
```html
<h1>oMDB API</h1>
<h2>Movie Search</h2>
<form action="/results" method="get">
  <input type="text" name="search" placeholder="Title">
  <button type="submit">Search</button>
</form>
```
We save their input data in 'search'. We redirect the user to '/results' with this search data.
```js
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
```
We use the request's query.search member to retrieve the user's search query. Then, we build a URL API request string using this query. We make the request, parse the JSON, and pass the result data to our results View.
```html
<h1>Results</h1>
<ul>
  <% viewResults.Search.forEach(function(movie) { %>
      <table>
        <thead>
          <tr>
            <th>
              <img src="<%= movie.Poster %>"></a>
            </th>
            <th><%= movie.Title %></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Year</td>
            <td><%= movie.Year %></td>
          </tr>
        </tbody>
      </table>
  <% }); %>
</ul>
```
viewResults contains an object, Search, that contains all of our search data. For each movie in the search results, we print the title, year, and construct a poster.

### Databases
#### SQL vs. NoSQL
##### SQL: Relational
SQL databases are:
  - Tabular
  - Flat

```
FRIENDS
name      city
Phil      New Hartford
Chrissy   'null'
```

SQL databases require clearly defined schema. If any data is missing, it needs to be replaced with default values. Also, those values associated with each attribute must be vetted; they have to match value type associated with that attribute.
##### NoSQL: Non-Relational
NoSQL databases are:
  - Not Tabular
  - Flexible BSON (Binary JavaScript Object Notation)

```
{
  name:"Phil",
  city: "New Hartford",
  comments: [
    {text: "Hey there."}
  ]
}
```

NoSQL databases don't require clearly defined schema. They are much more flexible. We can add attributes without backtracking to add default values. However, we don't always need a flexible database.

#### MongoDB
MongoDB is a NoSQL database framework we can use in our back end. We want to make a separate database for every app we have.

CRUD: Create, Read, Update, Delete. The common operations performed using a database.

##### Common Commands
```
db.collection.<command>
```
db: Implicit handle to the used database.
collection: Name of the used collection

```
use <database>
```
Switch to another database or create a new database using that name.
```
show collections
```
Lists the available collections. Collections are objects in the database.

```
show dbs
```
Shows database names.

```
db.database.insert(
    {
      fName: "John",
      lName: "Smith"
    }
  )
```
Insert a BSON object into the database.

```
db.database.find()
db.database.find(
  {
    name: "John"
  }
)
```
Left blank, lists all objects in the database. With key: value parameters, finds matching objects.

```
db.database.update(
  {
      name: "John"
  },
  {
    name: "Jenna"
  }
)
```
Updates an entire entry, scrapping the old one and creating a new one with the arguments. This isn't usually ideal, so instead we pass another argument:
```
db.database.update(
  {
      name: "John"
  },
  {
    $set:
    {
      name: "Jenna"
      gender: "Female"
    }
  }
)
```
Instead, we provide an object with **$set** to create another object with our updated name and a new attribute. This way, instead of overwriting the previous entry, John, we update it and set the appropriate values.

##### Creating a Database and Collections
```
use dogs // Using the dog db.
db.dogs.insert(
  {
    name: "Rusty",
    breed: "Mutt"  
  }
) // Inserts a new dog.

db.dogs.find() // Lists all objects in db.
db.dogs.find(
 {
   name: "Rusty"
 }
) // Finds a specific object w/ name "Rusty".

// Updates an existing entry.
db.dogs.update(
  {
    name: "Rusty"
  },
  {
    $set: {
      breed: "Labradoodle"
    }
  }
)

db.dogs.remove(
  {
    breed: "Mutt"
  }
) // Removes all dogs WHERE breed == 'Mutt'

db.dogs.remove(
  {
    breed: "Mutt"
  },
  {
    justOne: true
  }
)
// Removes all dogs WHERE breed == 'Poodle', but only removes one entry because of our {justOne}.
```
Here we create a new 'dogs' database and insert a BSON dog object. We can use find() to show all objects in the dogs collection. We can use update() with a $set object to specify that we don't want to scrap the previous data, merely update the existing data.

#### Mongoose.js
Mongoose helps us interact with MongoDB. We can do it without Mongoose, but it's a little more verbose. We use Mongoose for the same reason we use jQuery to make it easier to interact with the DOM.

Mongoose is an open document model package for Express that helps us work with MongoDB.

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```
From the site:
> Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

[Getting Started with Mongoose](http://mongoosejs.com/docs/index.html)

```js
// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
```

> We have a pending connection to the test database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:

```js
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
```
> Once our connection opens, our callback will be called. For brevity, let's assume that all following code is within this callback.

> With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our kittens.

```js
var kittySchema = mongoose.Schema({
  name: String
});
```
> So far so good. We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.

```js
var Kitten = mongoose.model('Kitten', kittySchema);
```
> A model is a class with which we construct documents. In this case, each document will be a kitten with properties and behaviors as declared in our schema. Let's create a kitten document representing the little guy we just met on the sidewalk outside:

```js
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
```
> Kittens can meow, so let's take a look at how to add "speak" functionality to our documents:

```js
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}
```

```js
var Kitten = mongoose.model('Kitten', kittySchema);
```
> Functions added to the methods property of a schema get compiled into the Model prototype and exposed on each document instance:

```js
var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
```
> We have talking kittens! But we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occured.

```js
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
```
> Say time goes by and we want to display all the kittens we've seen. We can access all of the kitten documents through our Kitten model.

```js
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
```
> We just logged all of the kittens in our db to the console. If we want to filter our kittens by name, Mongoose supports MongoDBs rich querying syntax.

```js
Kitten.find({ name: /^fluff/ }, callback);
```
> This performs a search for all documents with a name property that begins with "Fluff" and returns the result as an array of kittens to the callback.

#### Back End Atom Packages
- Pretty JSON

## Full Stack
#### Courses
[Colt Steele's Web Developer Boot Camp](https://www.udemy.com/the-web-developer-bootcamp/)

#### Concepts
Non-specific concepts that were helpful didn't really fit anywhere else.

##### Currying
Currying is a functional way of bundling common operations into one action using composition. Instead of invoking add and multiply individually, we can instead compose them together into one function that does both on an object and returns the final value.

###### Without Currying

```js
function add(num, array) {
  return array.map((item) => item+num);
}

function mult(num, array) {
  return array.map((item) => item*num);
}

array = [1,2,3,4,5];

var addTwo = add(2);
var multTwo = mult(2);

```
###### With Currying
```js
array = [1,2,3,4,5];

var addAndMultTwo = compose(addTwo, multTwo);
var endArray  = addAndMultTwo(array);
```

#### General Atom Packages
 - Beautify
 - File Icons
 - Highlight Selected
 - Various Linters and Snippets
  - jshint
  - csshint
  - Kite (Python, others to come.)
  - pylint
 - Teletype
 - Minimap
 - Hey Pane
 - Activate Power Mode
  - Not serious. For fun.

##### Keybinds
  -Ctrl+D: Cursor to all by name.
