var fs = require('fs'),
    http = require('http');

function random (low, high) {
    return Math.random() * (high - low) + low;
}


http.createServer(function(request, response) {
	var ranDomVal = random(1,1000);
	var newFile = fs.createWriteStream("file"+ranDomVal);
	request.pipe(newFile);

	request.on('end', function() {
		response.end('uploaded!');
	});
}).listen(9393);
	