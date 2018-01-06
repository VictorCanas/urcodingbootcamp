//node read.js

//Open the movies.txt and read that data

//fs = file system

var fs = require("fs");

fs.readFile("movies.txt", "utf8", (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(data);
	//Added changes to data
	var dataArray = data.split(",");
	console.log(dataArray);
})
	