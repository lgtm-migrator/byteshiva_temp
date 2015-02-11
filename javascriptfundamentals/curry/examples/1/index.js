var baby = function(a) {
	return function(b) {
		var result = 'I love '.concat(a).concat(' and ').concat(b);
	return result;
	};
};

var babyInstance = baby('Indian Baby');

babyInstance('Asian Babies');
babyInstance('African Babies');
babyInstance('Australian Babies');

var log = function(fn) {
	return console.log.call(this,fn);
}

log(babyInstance('Asian Babies'));
log(babyInstance('African Babies'));
log(babyInstance('Australian Babies'));
