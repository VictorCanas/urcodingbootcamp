var $root = document.querySelector("#root");

let score;
let targetScore;

//can't use arrow functions for constructors

const makeGuess = () => {
  const $score = document.querySelector("#root p");
  $score.innerHTML = "Score: " + score + " | " + "Target: " + targetScore;

  if (score > targetScore) {
    alert("You lost this round!");
    playRound();
  } else if (score === targetScore) {
    alert("You won this round!");
    playRound();
  }
};

var Crystal = function (color) {
  this.element = document.createElement("div");
  this.element.className = "crystal " + color;
  this.value = 0;

  this.element.addEventListener(
    "click",
    function () {
      score += this.value;
      makeGuess();
    }.bind(this),
    false
  );
};

Crystal.prototype.render = function (target) {
  this.value = Math.floor(Math.random() * 15) + 1;
  target.appendChild(this.element);
};

const crystals = [new Crystal("red"), new Crystal("blue"), new Crystal("green")];

const playRound = function () {
  var fragment = document.createDocumentFragment();
  var $score = document.createElement("p");
  targetScore = Math.floor(Math.random() * 50) + 25;
  score = 0;
  $score.innerHTML = "Score: " + score + " | " + "Target: " + targetScore;
  crystals
    .sort(function () {
      return 0.5 - Math.random();
    })
    .forEach(function (crystal) {
      crystal.render(fragment);
    });
  fragment.appendChild($score);
  $root.innerHTML = "";
  $root.appendChild(fragment);
};

playRound();
