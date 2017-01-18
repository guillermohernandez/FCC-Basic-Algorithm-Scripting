function repeatStringNumTimes(str, num) {
    // repeat after me
    //return Array(num).join(str);
    if (num <= 0) {
        return "";

    } else {
        return str.repeat(num);
    }
}

repeatStringNumTimes("abc", 3);