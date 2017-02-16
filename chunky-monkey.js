function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  /*loop through it until you reach the number
    splice the begging and then push the rest into a seperate array
  */
  
    var holderArr = [];

    for (var i = 0; i < arr.length; i += size) {
        holderArr.push(arr.slice(i, i + size));

    }

    return holderArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//should return [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
//should return [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
//should return [[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
//should return [[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
//should return [[0, 1, 2], [3, 4, 5], [6]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
//should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
//should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]