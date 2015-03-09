function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
}

function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}


function simpleHash(data) {
	var total = 0;
	for(var i = 0; i < data.lenght; ++i) {
		total += data.CodeAt(i);
	}
	return total % this.table.length;
}

function showDistro() {
	var n = 0;
	for (var i = 0; i < this.table.length; ++i) {
		if(this.table[i] != undefined) {
			console.log(i + ": " + this.table[i]);
		}
	}
}

module.exports =  HashTable;