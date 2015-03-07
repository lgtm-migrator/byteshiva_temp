var fs = require('fs'),
 	zlib = require('zlib'),
	http = require('http'),
	path = require('path'),
	file = process.argv[2],
   	crypto = require('crypto'),
	server = process.argv[3];

	var options = {
		hostname: server,
		port: 3000,
		method: 'PUT',
		headers: {
			filename: path.basename(file),
			'Content-Type': 'application/octet-stream',
			'Content-Encoding':'gzip'
		}
	};

	var req = http.request(options, function(res) {
		console.log('Server response: ' + res.statusCode);
	});

	fs.createReadStream(file)
	  .pipe(zlib.createGzip())
	  .pipe(crypto.createCipher('aes192','a_shared_key'))
	  .pipe(req)
	  .on('finish', function() {
		console.log('File successfully sent');
	  });