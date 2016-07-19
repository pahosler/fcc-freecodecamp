// Sorted Union
// Write a function that takes two or more arrays and returns a new array of
// unique values in the order of the original provided arrays.
//
// In other words, all values present from all arrays should be included in
// their original order, but with no duplicates in the final array.
//
// The unique numbers should be sorted by their original order, but the final
// array should not be sorted in numerical order.

function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments, 1);
  for (var i = 0; i<args.length; ++i){
    arr.push(args[i]);
  }
  arr = arr.reduce(function(a, b) {
  return a.concat(b);
}, []);
  var z=0;
  while(z < arr.length){
    for(var i=z; i< arr.length ; ++i){
      if(arr[z]===arr[i] && z !== i){
        arr.splice(i,1);
      }
    }
    ++z;
  }
  return arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].
