// We're incorporating an npm package for doing weather searches.
var user = require("./UserSearch.js")

var user1 = new user("frank","miami");
console.log(user1)
user1.getWeather();

// // Creates a UserSearch Constructor
// var WeatherAdmin = function(name, location) {
//   this.name = name;
//   this.location = location;

//   this.newUserSearch = function() {
//     this.name = name 

//     weather.find({ search: this.location, degreeType: "F" }, function(err, result) {
//       if (err) {
//         console.log(err);
//       }
//       //
//       console.log(JSON.stringify(result, null, 2));
//     });
//   };
// };

// module.exports = UserSearch;
