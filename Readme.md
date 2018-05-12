# Web Development Practice
A space to take web development notes, post snippets, and link resources.

 1. [Front End](#front-end)
 2. [HTML](#html)
 3. [CSS](#css)
 4. [JavaScript](#javascript)
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

###### Hover/Mouse Over Event Listener Setup and Style Examples
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

### Node.js

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
