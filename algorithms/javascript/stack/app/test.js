var Stack = require("../libs/Stack.js");

console.log(typeof(Stack()));
var s = new Stack();
s.push("Siva");
s.push("Subraman");
s.push("Brama");
console.log("length: " + s.length());
console.log(s.peek());

var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());

s.push("Siddhu");
console.log(s.peek());
s.clear();

console.log("length: " + s.length());
console.log(s.peek());

s.push("niyam");
console.log(s.peek());