
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
