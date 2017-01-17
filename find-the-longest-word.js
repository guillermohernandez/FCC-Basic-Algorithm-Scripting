function findLongestWord(str) {
    var strArray = str.split(' ');
    var longest = 0;
    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i].length > longest) {
            longest = strArray[i].length;
        }
    }
    return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");