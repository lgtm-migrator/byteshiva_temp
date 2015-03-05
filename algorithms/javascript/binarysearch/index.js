function binarySearch(items, value) {
	var startIndex = 0,
	    stopIndex = items.length - 1,
	    middle = Math.floor((stopIndex + startIndex)/2);

	while(items[middle] != value && startIndex < stopIndex) {
		if(value < items[middle]) {
			stopIndex = middle - 1;
		} else if (value > items[middle]) {
			startIndex = middle + 1;
		}
	
		middle = Math.floor((stopIndex + startIndex)/2);
	}
	return (items[middle] != value) ? -1 : middle;
}

var sortedItem = [2,1,12,2,4,5].sort(function(a,b) { return a-b});

console.log(sortedItem);

console.log(binarySearch(sortedItem, 12));