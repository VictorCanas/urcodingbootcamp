//node write.js

//create a file that is a movies text file and adds the text to it

//fs = file system

var fs = require("fs");

fs.writeFile("movies.txt", "Aladdin, Die Hard, Home Alone", (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("movies.txt was updated");
})
	