//Practice - Tamagotchi.js


function DigitalPal(hungry, sleepy, bored, age) {
  this.hungry = false;
  this.sleepy = false ;
  this.bored = true ;
  this.age = 0;   
  };

  //boolean it checks whether true 
  this.feed = function() {
  if (this.hungry === true) {
    console.log("That was yummy!");
    this.hungry = false;
    this.sleepy = true;
  }
  if (this.hungry === false ) {
    console.log("No thanks! I'm full");
  }
};

  this.sleep = function() {
  if (this.sleepy === true) {
    console.log("Zzzzzzzz!");
    this.sleepy = false;
    this.bored = true;
    increaseAge()
  }
  if (this.sleepy === false ) {
    console.log("No way! I'm not tired");
  }
};

this.play = function() {
  if (this.bored === true) {
    console.log("Yay! Let's play!")
    this.bored = false;
    this.hungry = true;
  }
  if (this.bored === false) {
    console.log("Not right now. Later?")
  }
};

this.increaseAge = function() {
  this.age++;
  consolelog("Happy Birthday to me! I am " + this.age + " old!")
}

var animals = {};

var animals.dog = new DigitalPal();
var cat = new DigitalPal();

dog.outside = false;
dog.bark = function() {
  console.log("Woof! Woof!")
}
dog.goOutside = function() {
  if ()
}



// take input with process.argv
var animal == process.argv[2];
var method == process.argv[2];

animals[animal][method]();


