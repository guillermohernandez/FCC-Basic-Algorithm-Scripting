
function factorialize(num) {
  //loop and add one until it equals num
  var total = 1;
  for (var i = 1; i <= num; i++){
    total *= i;
  }
  return total;
}

factorialize(5);