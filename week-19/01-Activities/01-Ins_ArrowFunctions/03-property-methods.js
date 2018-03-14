// When defining an object literal, 
// avoid using arrow functions for its methods
var dog = {
  name: "Lassie",
  sound: "Woof!",
  makeSound: () => console.log(this.sound),
  readTag: () => console.log("The dog's tag reads: " + this.name + ".")
}

// Prints `undefined`
dog.makeSound();

// Prints `The dog's tag reads: undefined.`
dog.readTag()