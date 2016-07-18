// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.

function addTogether() {
  var args = Array.from(arguments);
var args = [...arguments];
console.log(args);
    return function(x) {
      // console.log(x);
      return function(y){
        // console.log(y);
      }

    }

    function addArgs() {
        var sum = args[0] + args[1];
    }
    return addArgs;
}


// return function (x) {
//   // return function(y);
//
//   console.log(x);
//
//   return x;
//   // console.log(x);
// }
// var addNum = (function(z){return z;});
// console.log(addNum);

// return false;
// }
// console.log(addTogether(2, 4)); // should return 5.
// console.log(addTogether(2)(5)); // should return 5.
// console.log(addTogether("http://bit.ly/IqT6zt")); // should return undefined.
// console.log(addTogether(2, "6")); // should return undefined.
// console.log(addTogether(2)([7])); // should return undefined.
addTogether(2, 3); // should return
addTogether(2)(3); // should return
addTogether("http://bit.ly/IqT6zt");
addTogether(2, "3"); // should retur
addTogether(2)([3]); // should retur
