/*
*  Create a function that looks through an array (first argument)
*  and returns the first element in the array that passes a truth
*  test (second argument).
*/

function findElement(arr, func) {
  var num = 0;
  num=arr.filter(function(element){
    if (func(element)) {
      return true;
    }else {
      return false;
    }
  });
  //num = arr.filter(func(num))
  return num[0];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
console.log(findElement([1, 3,5,8,9,10], function(num){ return num % 2 === 0; }));
console.log(findElement([1, 3,5,9], function(num){ return num % 2 === 0; }));
