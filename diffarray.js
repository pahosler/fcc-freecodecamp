/*
    Compare two arrays and return a new array with any items only found
    in one of the two given arrays, but not both. In other words, return
    the symmetric difference of the two arrays.

*/

function diffArray(arr1, arr2) {
  var newArr = [];
  //var newArr = arr1.concat(arr1).lastIndexOf(arr1)
  arr1.filter(function (value, index, arr) {
    if (arr2.indexOf(arr[index]) == -1) {
      newArr.push(arr[index]);
      return;
    } else {
      return false;
    }
  });
  arr2.filter(function (value, index, arr) {
    if (arr1.indexOf(arr[index]) == -1) {
      newArr.push(arr[index]);
      return;
    } else {
      return false;
    }
  });

  console.log(newArr);
  return newArr;
}

// this array should return [4]
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// this array should return ["pink wool"]
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// this array should return ["piglet",4]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
// this array should return ["snuffleupagus", "cookie monster", "elmo"]
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
// this array should return [1, "calf", 3, "piglet", 7, "filly"]
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);