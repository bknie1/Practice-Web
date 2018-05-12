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
```
var person = {
  name: "Brandon",
  age: 28,
  city: "New Haven"
};
```
You can access values by name. e.g. person["name"]. Or, we can use the more typical '.' notation: person.name. However, this isn't very modular. Ideally, we create a Class Person and instantiate instances of Person using a constructor that takes the appropriate parameters.

JavaScript's new ES6 (Ecmascript 6) does support classes as we know and love them in other OO languages. However, we don't define members up front; we do it all in the constructor. This means that person can be as simple or as complex as we want.
```
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
  - getElementById: By #id
  - getElementByClassName: By .class
  - getElementByTagName: By <tag>
  - getElementByName: By name attribute.
  - QuerySelector: Returns first matching object.
  - QuerySelectorAll: Returns all matching objects.

##### Actionable Design
As I mentioned previously, we can define a style using CSS and add or remove that style using actions in JavaScript.

  - object.classList.add("className")
  - object.classList.remove("className")
  - object.classList.toggle("className"): If added, remove, if removed, add it back.

##### Text Content
  - object.textContent: Returns the stored text data.
  - object.textContent = "fubar": Assigns new text data.

##### Manipulating Attributes
  - object.getAttribute("href"): Might yield www.google.com
  - object.setAttribute("href", "www.duckduckgo.com"): Replaces the attribute's value.

#### Frameworks
[jQuery](https://jquery.com/)

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

#### Atom
##### Keybinds
  -Ctrl+D: Cursor to all by name.
