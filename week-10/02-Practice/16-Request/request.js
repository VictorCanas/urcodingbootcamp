//node.js

//npm install request

//using OMDB API

var request = require("request")

var url = "https://en.wikipedia.org/wiki/Granola";
request(url, (error, response, body) => {

	if (!error && response.statusCode === 200) {
		
		console.log(body);

		//return statement
		console.log("The movie's rating is: " + JSON.parse(body).imdbrating)
	
	}

});

	

