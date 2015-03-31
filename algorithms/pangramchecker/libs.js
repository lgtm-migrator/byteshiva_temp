var _ = require("underscore");

// Curryied mixin function
_.mixin({
  checkAToZ: function(s) {
    return function(letter) {
      if (s.indexOf(letter) != -1) { return true};
    }
  }
});

_.mixin({
    convertStrToArr: function(str) {
      str = str || "zqxjkvbpygfwmucldrhsnioate";
      return str.split('');
    }
});

_.mixin({
  toLower: function(str) {
      return str.toLowerCase();
  }
});

//var s = str.toLowerCase();
//var letters = "zqxjkvbpygfwmucldrhsnioate".split('');

_.mixin({
  isPangram: function(lstr, letters) {
    /*var s = str.toLowerCase();*/
    var s = lstr;
    var letters = "zqxjkvbpygfwmucldrhsnioate".split('');
    return _.every(letters, _.checkAToZ(s));
  }
});

_.mapObject({start: 5, end: 12}, function(val, key) {
  return val + 5;
});

module.exports = _;
