// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// Makes the Chirp Model available for other files (will also create a table)
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('todos', {
  	text: DataTypes.STRING,
  	complete: DataTypes.BOOLEAN
  });
};
