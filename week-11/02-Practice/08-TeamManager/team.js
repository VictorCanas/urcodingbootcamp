// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmer objects
function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  this.goodGame = function(){
  	//coinflip
  	this.offense++;
  	this.defense++;
  };
  this.badGame = function() {
  	//coinflip
  	this.offense--;
  	this.defense--;
  };
};

// creates the printInfo method and applies it to all programmer objects
Player.prototype.printStats = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nOffense: " + this.offense + "\nDefense: " + this.defense);
  console.log("---------------");
};

// variable we will use to count how many times our questions have been asked
var count = 0;

// array in which we will store each of our new programmer objects
var playerArray = [];

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 8) {
    console.log("New team member!");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: "Name:"
      }, {
        name: "position",
        message: "Position:"
      }, {
        name: "offense",
        message: "Offense:"
      }, {
        name: "defense",
        message: "Defense:"
      }
    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will
      // take in all of the user's answers to the questions above
      var newTeamMember = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense);
      // pushes newguy object into our array
      playerArray.push(newTeamMember);
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var x = 0; x < playerArray.length; x++) {
      playerArray[x].printStats();
    }
  }
};


//if poistiton is sub replace to starter

// call askQuestion to run our code
askQuestion();
playgame();

//runs the playgame function 5 times 
(function(count) {
    if (count < 5) {
        // call the function.
        foo();    
    }
});

playGame = function() {
	console.log("I runned 5 times");
	var x = Math.floor((Math.random() * 20) + 1);
}


