var _ = require("underscore");

// Using Plain JavaScript
function is_pangram(str) {
    var s = str.toLowerCase();
    // sorted by frequency ascending (http://en.wikipedia.org/wiki/Letter_frequency)
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
 }

// Curryied mixin function
_.mixin({
  checkAToZ: function(s) {
    return function(letter) {
      if (s.indexOf(letter) != -1) { return true};
    }
  }
});

// Using Curried Mixin methods
function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate".split('');
    return _.every(letters, _.checkAToZ(s));
}

// Method using Underscore
// sorted by frequency ascending (http://en.wikipedia.org/wiki/Letter_frequency)
function isPangramWithOutCurry(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate".split('');
    return _.every(letters, function(letter) {
        if (s.indexOf(letter) != -1) { return true}

    });
}

console.log(isPangram("is this a pangram"));  // false
console.log(isPangram("The quick brown fox jumps over the lazy dog"));  // true
console.log(isPangram("The quick brown fox jumps over the lazy dog"));  // true
