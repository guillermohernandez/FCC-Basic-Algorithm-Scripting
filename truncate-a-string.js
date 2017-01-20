function truncateString(str, num) {
    // Clear out that junk in your trunk

    /*if str is long than max num - 3, truncate it and
    add ... */

    //var maxNum = num - 3;

    //   if (str.length > maxNum){
    //     var truncated = str.slice(0, maxNum);
    //     return truncated += "...";
    //   }

    /* if num is >= 3, return the truncated str with ...
     */

    //   else if (maxNum >=3){
    //     return str += "...";

    //   }

    if (str.length <= num) {
        return str;
    } 
    
    else if (num <= 3) {
        return str.slice(0, num) + '...';
    } 
    
    else {
        return str.slice(0, num - 3) + '...';
    }

    //return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));