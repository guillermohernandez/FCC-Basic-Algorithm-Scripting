
function palindrome(str) {
  // Good luck!

  //sanitize the string
  var cleanString = str.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  /* if its a palindrome, return true. 
     Check with regex
  */
  
  var isItPalin = cleanString.split("").reverse().join("");
  
  if (cleanString === isItPalin){
    return true;
  }
  
  else {
    return false;
  }
}



palindrome("eye");