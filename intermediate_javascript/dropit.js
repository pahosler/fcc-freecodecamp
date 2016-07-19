function dropElements(arr, func) {
    // Drop them elements.
    var found = 0;
    arr=arr.filter(function(e,i,a){
      if(func(e)&& i<a.length){
        ++found;
        return true;
      }else {
        if(found !== 0){
          return true;
        }else{
        return false;
      }
      }
    });
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));//should return [3, 4].
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));// should return [1, 0, 1].
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));// should return [1, 2, 3].
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));// should return [].
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));// should return [7, 4].
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));// should return [3, 9, 2].
