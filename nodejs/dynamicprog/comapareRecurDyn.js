var dyn = require("./dynfib.js");
var recurr = require("./fibonacci.js");



var start = new Date().getTime();
z = recurr(45);
console.log(z);
var stop = new Date().getTime();
console.log("recursive time - " + (stop-start) + "milliseconds");

var start1 = new Date().getTime();
y = dyn(45);
console.log(y);
var stop1 = new Date().getTime();
console.log("dynamic programming time - " + (stop1-start1) + "milliseconds");
