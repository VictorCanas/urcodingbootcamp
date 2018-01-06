//node bestthings.js

// * Create a Node application that reads the `best_things_ever.txt` file, 
//parses the comma separated elements, 
//and ultimately console logs each element in the file on separate lines.

// * Your final output should look something like this:

//   ```
//   lazy boy recliner
//     massage
//     meditation
//     hot shower
//     cheese fondue
//     hot coffee with cashew milk
//     kitten falling asleep on my lap
//   ```

//Documentation
//https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	//console.log(data);

	var dataArray = data.split(",")

	for (let i = 0; i < dataArray.length; i++) {
		console.log(dataArray[i]);
	}

})
	