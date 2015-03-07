var http = require('http'),
    fs = require('fs'),
    zlib = require('zlib');

var server = http.createServer(function ( req, res) {
	var filename = req.headers.filename;
	console.log('File request received: ' + filename);
	req
	  .pipe(zlib.createGunzip())
	  .pipe(fs.createWriteStream(filename))
	  .on('finish', function() {
		res.writeHead(201, {'Content-Type': 'text/plain'});
		res.end('That\'s ot\n');
		console.log('File saved: ' + filename);
	  });
	});


	server.listen(3000, function() {
		console.log('Listening');
	});