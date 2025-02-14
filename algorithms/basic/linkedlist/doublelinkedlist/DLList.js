var Node = require("./node.js");

function DLList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	//this.findPrevious = findPrevious;
}

function find(item) {
	var currNode = this.head;
	while(currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previoud = current;
	current.next = newNode;
}

function display() {
	var currNode = this.head;
	while(!(currNode.next == null)) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

function findPrevious(item) {
	var currNode = this.head;
	while(!(currNode.next == null) && (currNode.next.element != item)) {
		currNode = currNode.next;
	}
	return currNode;
}

function remove(item) {
	var currNode = this.find(item);
	if(!(currNode.next == null)) {
		currNode.previous.next = currNode.next;
		currNode.next.previoud = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

function findLast() {
	var currNode = this.head;
	while(!(currNode.next == null)) {
		currNode = currNode.next;
	}
	return currNode;
}

function dispReverse() {
	var currNode = this.head;
	currNode = this.findLast();
	while(!(currNode.previous == null)) {
		console.log(currNode.element);
		currNode = currNode.previous;
	}
}


module.exports = DLList;
