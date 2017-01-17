function titleCase(str) {
    // split the string && sanitize
    var splitStr = str.toLowerCase().split(" ");
    //console.log(splitStr)

    //loop through and target first letter
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substr(1);
        console.log(splitStr[i]);
    }

    return splitStr.join(" ");
}

titleCase("I'm a little tea pot");