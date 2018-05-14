# Web Development Practice
A space to take web development notes, post snippets, and link resources.

 1. [Front End](#front-end)
 2. [HTML](#html)
 3. [CSS](#css)
 4. [JavaScript](#javascript)
 5. [jQuery](#jquery)
 5. [Front End Atom Packages](#front-end-atom-packages)
 6. [Back End](#back-end)
 7. [Node.js](#node.js)
 8. [Full Stack](#full-stack)

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

#### Frameworks and Tools
[Bootstrap](https://getbootstrap.com/)

[Bulma](https://bulma.io/)

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

### Front End Atom Packages

#### General
 - Beautify
 - File Icons
 - Highlight Selected
 - Linter and Snippets
 - Teletype
 - Minimap

#### Front Specific
 - Emmet
 - CSS Comb
  ternjs (Autocomplete)
 - jshint (Linter)
 - csshint (Linter)
 - Color Picker
 - Pigments
 - Open In Browser

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

### Node.js
Our back end server framework. app.js dictates our serving behavior.

#### app.js
When we run app.js our server will start. The server will listen for incoming requests.
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

#### Simple Node.js GET Example
```js
app.get("/", function(req, res) {
  res.render("home")
});
```
When the user sends a GET request with a 'root' (/) route (e.g. google.com/, or localhost:3000/), we render a page called 'home' in the response. 'home' is a **View** we constructed.

#### Dynamic Node.js GET Example
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

#### Simple Node.js POST Example
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
The user passes name and breed arguments to create a dog. A dog is created and added to our database of dogs using this data.

Once the dog has been added, the user is forward to our dogs page, which is responsible for creating a list of every dog in the database, anyway. The user should be able to see the newly added dog.

**Note:** We have to use a tool like Postman to respond to this POST request because, in this example, there isn't any HTML responsible for the POST.

**Warning:** Right now, we don't have anything in between to validate this data, so empty 'dogs' are possible. We need some sanitization and validation layer in a real world example.

#### Form Node.js POST Example
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

### ASP MVC

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

#### Atom
##### Keybinds
  -Ctrl+D: Cursor to all by name.
