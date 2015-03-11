var http = require('http');
    callback = function(request, response) {
	response.writeHead(200);
	response.write("Hello, this is Siva");
	response.end();
    };

http.createServer(callback).listen(9191);

console.log("Listening on port 9191");