var _ = require("./libs.js");

var panGramStr = "The quick brown fox jumps over the lazy dog";
/*var IsPanGram = _.chain(panGramStr).convertStrToArr().toLowerCaseLetter().isPangram().value();*/
var IsPanGram = function(panGramStr) {
    return _.chain(panGramStr).toLower().isPangram().value();
};

console.log("Result IsPanGram - \"", panGramStr,"\" - " ,IsPanGram.call(this,panGramStr));
console.log("Result IsPanGram - \"", "the World","\" - ", IsPanGram.call(this, "the World"));
