var fs = require('fs'),
    fileName1 = './readme1.txt',
    fileName2 = './readme2.txt',
    crypto = require('crypto'),
    hash = crypto.createHash('sha1'),
    readStream1	= fs.createReadStream(fileName1,{'encoding':'utf-8'}),
    readStream2	= fs.createReadStream(fileName2,{'encoding':'utf-8'});

var callbackSuccess = function(chunk) {
	hash.update(chunk)
	console.log(chunk);
   };

var callbackErr = function() {
	console.log('ended');
        console.log(hash.digest('hex'));
   };

console.log("Doing something else 0");
    readStream1.on('data', callbackSuccess).
    on('end', callbackErr);

    readStream2.on('data', callbackSuccess).
    on('end', callbackErr);

console.log("Doing something else 1");
