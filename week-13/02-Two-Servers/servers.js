var http = require("http");

function goodRequest(request, response) {
	response.end("Something good! path hit:" + request.url);
}

function badRequest(request, response) {
	response.end("Something bad! path hit:" + request.url);
}

var server = http.createServer(goodRequest);
var servertwo = http.createServer(badRequest);

server.listen(7000, function() {
	console.log("Server listening on http://localhost:");
})

servertwo.listen(7500, function() {
	console.log("Server listening on http://localhost:");
})