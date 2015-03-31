var _ = require("underscore");
//_.chain(str).isPangram().value();

// Method using Underscore
// sorted by frequency ascending (http://en.wikipedia.org/wiki/Letter_frequency)
function isPangramWithOutCurry(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate".split('');
    return _.every(letters, function(letter) {
        if (s.indexOf(letter) != -1) { return true}

    });
}

/*console.log(isPangram("is this a pangram"));  // false
console.log(isPangram("The quick brown fox jumps over the lazy dog"));  // true
console.log(isPangram("The quick brown fox jumps over the lazy dog"));  // true*/
