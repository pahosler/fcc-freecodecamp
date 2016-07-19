// Arguments Optional
// Create a function that sums two arguments together. If only one argument is
// provided, then return a function that expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should
// return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.

function addTogether(){
  var args = [...arguments];
  var sum = args[0]+args[1];
  return sum;
  var addMe = function(x) {
    //phantom function???
    console.log(x);
    return addTogether(x);
  }
  addMe(args[0]);

  console.log(addTogether);
  return addTogether;
}


addTogether(2, 3); // should return 5.
addTogether(2)(3); // should return 5.
addTogether("http://bit.ly/IqT6zt"); // should return undefined.
addTogether(2, "3"); // should return undefined.
addTogether(2)([3]); // should return undefined.
