
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // for (var i = 0; i < arr.length; i++){
  //   console.log(arr[i]);
  // }
  
  function falseyFilter (value){
    return value;
  }
  
  var truthyArr = arr.filter(falseyFilter);
  return truthyArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
// should return [7, "ate", 9]

console.log(bouncer(["a", "b", "c"]));
// should return ["a", "b", "c"]

console.log(bouncer([false, null, 0, NaN, undefined, ""]));
// should return []

console.log(bouncer([1, null, NaN, 2, undefined])) 
//should return [1, 2]
