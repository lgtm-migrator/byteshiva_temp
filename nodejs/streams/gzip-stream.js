var fs = require('fs'),
    zlib = require('zlib'),
    file = process.argv[2];

  fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', function() {
	console.log('File successfully compressed');
  });