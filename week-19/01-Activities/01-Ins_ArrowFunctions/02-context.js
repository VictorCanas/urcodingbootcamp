// `setTimeout` is a property of the global `window` object
// Inside `setTimeout`, `this` refers to the `window`
var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(function() {
      console.log(this.name + "!");
    }, 100);
  }
};

person.saySomething(); // prints `undefined!`

// Arrow functions bind the `this` keyword to the lexical context
// i.e. `this` is always the object it's written directly inside of
var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(() => console.log(this.name + "!"), 100);
  }
};

person.saySomething(); // prints `Hodor!`
