var _ = require("underscore");


//_.chain(str).isPangram().value();

// Using Curried Mixin methods
function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate".split('');
    return _.every(letters, _.checkAToZ(s));
}
