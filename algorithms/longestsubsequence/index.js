var _ = require('underscore');
function findIndex(input) {
	var len = input.length;
	var maxSeqEndingHere = _.range(len).map(function(){return 1;});
	for(var j=1-1;j>=0;j--) {
		if((input[i] > input[j] && maxSeqEndingHere[j] >= maxSeqEndingHere[i]) {
			maxSeqEndingHere[i] = maxSeqEndingHere[j]+1;
		}
	return maxSeqEndingHere;
}

