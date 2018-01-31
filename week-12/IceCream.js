var mysql = require("mysql");

var connection = mysql.createConnection(
{
	host: "localhost",
	port: 3306,
	//your uesrname
	user: "root",
	//your password
	password: "Vic09865",
	database: "playlistdb"
}
);

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id: " + connection.threadId);
	createProduct();
});

function createProduct() {
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
      title: "Nadie como tu",
      artist: "Musiko",
      genre: "Latino"
    },
    function(err, res) {
      console.log(res.affectedRows + " songs inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      //updateProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

// function updateProduct() {
//   console.log("Updating all Rocky Road quantities...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         flavor: "Chocolate",
//         price: 100,
//         quantity: 25
//       },
//       {
//         id: 1
//       }
//     ],
//     function(err, res) {
//       console.log(res.affectedRows + " products updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }

// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// }