function recurFib(n) {
	var space = " ";
	if(n < 2) {
		console.log(space, "recur times called : " , n);
		return n;
	} else {
		console.log("recur times called : ", n);
		return recurFib(n-1) + recurFib(n-2);
		
	}
}

console.log(recurFib(10));