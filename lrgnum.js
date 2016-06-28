function largestOfFour(arr) {
  var largest=[];
  arr.forEach(function logArray(element,index,array) {
    element.sort(function(a,b) {
      return b-a;
      });
    largest.push(element[0]);
  });
        
  return arr=largest;
}

largestOfFour([[4,5,1,3],
              [13,27,18,26],
              [32,35,37,39],
              [1000,1001,857,1]]);
