//node.js

// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var args = process.argv;

var numArray = [];

for (var i = 2; i < args.length; i++){
	numArray.push(args[i]);
}

//put all input into numArray as numbers

var sorted = numArray.sort(function(a,b) {
	return a-b;
});

console.log(sorted)


