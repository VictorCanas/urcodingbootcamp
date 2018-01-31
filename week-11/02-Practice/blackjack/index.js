//Blackjack activtiy


var inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'move',
      message: 'What move do you want to do next?',
      choices: ['Hit', 'Stand', 'Double', 'Split', 'Walk away'],
      filter: function(val) {
        return val.toLowerCase();
      }
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });

'use strict';
var inquirer = require('inquirer');
var output = [];

var questions = [
  {
    type: 'list',
      name: 'move',
      message: 'What move do you want to do next?',
      choices: ['Hit', 'Stand', 'Double', 'Split', 'Walk away'],
      filter: function(val) {
        return val.toLowerCase();
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another TV show favorite (just hit enter for YES)?',
    default: true
  }
];

function ask() {
  inquirer.prompt(questions).then(answers => {
    output.push(answers.choices);
    if (answers.askAgain) {
      ask();
    } else {
      console.log('Your favorite TV Shows:', output.join(', '));
    }
  });
}

ask();