var i = 1;
function factorial(n) {
	//console.log("Number of times " , i);
	i = i + 1;
	if(n == 0)
		return 1;
	else {
		console.log("Number of times called " , i, n);
		return (n * factorial(n - 1));
	}
}

console.log(factorial(10));