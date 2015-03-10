var fs = require('fs'),
callback = function(err, contents) {
	console.log(contents);
};


fs.readFile('./readme1.txt',{'encoding':'utf-8'}, callback);

console.log('Doing something else 1');

fs.readFile('./readme2.txt',{'encoding':'utf-8'}, callback);

console.log('Doing something else end');

