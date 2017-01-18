function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    var strLength = str.length;
    // var lastChar = str.charAt(strLength - 1);
    var lastChars = str.substr(-target.length);

    if (lastChars === target) {
        return true;
    } else {
        return false;
    }
}

confirmEnding("Bastian", "n"); //TRUE
confirmEnding("He has to give me a new name", "name"); //TRUE
confirmEnding("Open sesame", "same") //TRUE