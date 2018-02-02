// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
 var path = req.url;
 switch (path) {
    case "/":
        return readIndex(req, res);
    case "/food" :
        return readFood(req,res);
    case "/movies" :
        return readMovies(req,res);
    case "/frameworks" :
        return readFrameworks(req,res);
    default: 
        return show404(req,res);
 }
  // Here we use the fs package to read our index.html file
  
}

function show404(req, res) {
    res.end("404");
}

function readIndex (req, res) {
   fs.readFile(__dirname + "/index.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  }); 
}


function readFood (req, res) {
   fs.readFile(__dirname + "/food.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.

    res.writeHead(200);
    res.end(data);
  }); 
}

function readMovies (req, res) {
   fs.readFile(__dirname + "/movies.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.

    res.writeHead(200);
    res.end(data);
  }); 
}

function readFrameworks (req, res) {
   fs.readFile(__dirname + "/frameworks.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.

    res.writeHead(200);
    res.end(data);
  }); 
}


// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
