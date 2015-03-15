function printRepeat(arr, size) {
	var i, j;
	console.log("Repeating elements are ");
	for(i = 0; i < size; i++) {
		for(j = i+1; j < size; j++) {
			if(arr[i] === arr[j]) {
				console.log(arr[i]);
			}
		}
	}
}

function main() {
	var arr = [4,2,4,5,2,3,1];
	var arr_size = arr.length;
	printRepeat(arr, arr_size);
	return true;
}

main();


