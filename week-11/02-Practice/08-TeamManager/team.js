//Practice - Tamagotchi.js

function Programmer(name, job, age, language) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.language = language;
  this.print = function() {
    console.log(this.name + this.job + this.age + this.language);
  }  
};


var programmer1 = new Programmer('Victor','Web developer', '22', 'Python');

programmer1.print();

