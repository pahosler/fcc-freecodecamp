// We'll pass you an array of two numbers. Return the sum of those two numbers
// and all numbers between them.
//
// The lowest number will not always come first.
function sumAll(arr) {
  var sum=[];

  for(var num =Math.min(...arr); num < Math.max(...arr)+1; num++){
    sum.push(num);
  }
  sum=sum.reduce(function(prev,curr,index){
    return prev+curr;
  })
  return sum;
}

console.log(sumAll([1, 4])); // should return 10.
console.log(sumAll([4, 1])); // should return 10.
console.log(sumAll([5, 10])); // should return 45.
console.log(sumAll([10, 5])); // should return 45.
