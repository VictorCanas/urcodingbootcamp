var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

//Use the express.static middleware to serve static  
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quote_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Need get, put, and delete method
app.get("/", function(req, res) {
  connection.query("SELECT * FROM quotes;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    //looping through data 
    res.render("index", { quotes: data });
  });
});


//get 
app.get("/:id", function(req, res) {
  connection.query("SELECT * FROM quotes where id = ?", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    console.log(data)
    res.render("single-quote", data[0] });
  });
});

//post
app.post("/:id", function(req, res) {
  connection.query("SELECT * FROM quotes where id = ?", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("single-quote", { single-quote: data[0] });
  });
});




// Express and MySQL code should go here.

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
