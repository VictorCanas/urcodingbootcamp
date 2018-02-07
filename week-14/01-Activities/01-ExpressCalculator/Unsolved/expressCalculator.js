//Express calculator

// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here

//give it three wildcards
app.get("/:operation/:num1/:num2", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  let operation = req.params.operation;
  // TODO make sure they're converted to integers (and not strings)
  let n1 = parseInt(req.params.num1);
  // Parameters are converted to integers
  let n2 = parseInt(req.params.num2)
  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      // Add your logic here. Pun intended.
      result = n1 + n2;
      break;
    case "subtract":
      // Subtract logic
      result = n1 - n2;
      break;
    case "multiply":
      // Multiply
      result = n1 * n2;
      break;
    case "divide":
      // Divide
      result = n1 / n2;
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002);
