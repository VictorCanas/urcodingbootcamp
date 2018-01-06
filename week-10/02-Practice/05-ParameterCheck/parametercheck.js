// Create a command line node application that takes in two parameters and outputs whether they are equal or not.

// Start by simply logging the value of each argument to console. 
// Then use your usual JavaScript approach (recall that Node is still just JavaScript).


// Practice - Victor Canas

// The console log will have to check wether they are equal or not 

// logic of syntax 
// node 5 5 
// true 
// node 5 2 
// false 

var num1 = process.argv[2];
var num2 = process.argv[3];

if (num1 === num2) {
	console.log('True');
}
else {
	console.log ('False');
}

// ### Bonuses

// * Check if the two numbers are both multiples of 7. 
// Again output "true" if they are and output "false" if they are not.

if ( num1 % 7 === 0 && num2 % 7 === 0) {
	console.log(true);
} else {
	console.log(false);
}