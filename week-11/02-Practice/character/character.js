// * Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

//   * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.

//   * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

//   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

function Character(name, profession, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
  this.PrintStats = function() {
      console.log(this.name + " " + this.profession + " " + this.age + " " + this.strength + " " + this.hitpoints);
    }
  };

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var character1 = new Character('cookie', 'monster', 'male', 'eating cookies', 100);
var character2 = new Character('dog', 'barking', 'female', 'eating bacon', -10 );

// calling dogs and cats makeNoise methods
character1.PrintStats();

this.IsAlive = function() {
  if (this.HitPoints > 0) {
    console.log(this.name + " is still alive!");
    return true;
  }
  console.log(this.name + " has died!");
  return false;
};

this.attack = function(character2){
  character2.hitpoints -= this.strength;
}

this.LevelUp = function() {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
}










// massHysteria(dogs, cats);
