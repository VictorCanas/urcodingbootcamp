//node bank.js total -> You have a total of 28.21
//node bank.js depost .19 -> deposted .19
//node bank.js total -> You have a total of 28.4
//node bank.js withdrew 5 -> withdrew 5
//node bank.js total -> You have a total of 23.4


//Working progress

var fs = require("fs");

var action = process.argv[2];
var value = process.argv[3];


switch (action) {

	case "total":
		total();
		break;

	case "deposit":
		deposit();
		break;

	case "withdraw":
		withdraw();
		break;

	case "lotto":
		lotto();
		break;
}

function total() {
	fs.readFile("bank.txt", "utf8", (err, data) => {
	if (err) {
		console.log(err);
		return;
	}

	data = data.split(", ");
	var result = 0;

	for (var i = 0; i < data.length; i++){
		if (parseFloat(data[i])) {
			result += parseFloat(data[i]);
		}
	}

	console.log("You have a total of " + result.toFixed(2));

});

function withdraw() {
	fs.appendFile("bank.txt", ", " + value, function(err) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log("You have a total of " + result.toFixed(2));

}

function lotto() {
	fs.appendFile("bank.txt", ", -.25", function(err) => {
	if (err) {
		console.log(err);
		return;
	}

	var chance = Math.floor((Math.random() * 10) + 1);

	console.log("You have a total of " + result.toFixed(2));

}


