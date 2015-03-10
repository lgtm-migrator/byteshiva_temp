var fs = require('fs'),
    contents1 = fs.readFileSync('./readme1.txt',{'encoding':'utf-8'}),
    contents2 = fs.readFileSync('./readme2.txt',{'encoding':'utf-8'});

console.log(contents1);
console.log(contents2);
console.log('Doing something else'); 