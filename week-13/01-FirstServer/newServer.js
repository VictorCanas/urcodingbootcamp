var http = require("http");

var port = 8080;

function handleRequest(request, response) {
	response.end("It works! path hit:" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(port, function() {
	console.log("Server listening on http://localhost:" + port);
})