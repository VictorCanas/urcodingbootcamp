// All of the `createGreeting` functions are equivalent
var createGreeting = function(message, name) {
  return message + ", " + name + "!";
};

// We can safely swap out most function expressions with arrow functions
var createCreating = (message, name) => {
  return message + ", " + name + "!";
};

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createCreating = (message, name) => message + ", " + name + "!";

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = greeting => console.log(greeting);

// We call arrow functions the same way as we call regular functions
var greeting = createCreating("Hello", "Angie");

// Logs "Hello, Angie!";
greet(greeting); 
