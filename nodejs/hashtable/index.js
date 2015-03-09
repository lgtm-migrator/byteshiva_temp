var HashTable = require("./hashTable.js");

var someNames = ["Siva", "Chinn", "Subrama","Maniyam","Yam"];

var hTable = new HashTable();
for(var i = 0; i< someNames.length; ++i) {
	hTable.put(someNames[i]);
}
hTable.showDistro();