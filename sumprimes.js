function sumPrimes(num) {
  //create an array from num...
  var arr = [];
  for (var i = 1; i < num + 1; ++i) {
    arr.push(i);
  }
  num = 0;
  arr.filter(function (el) {
    var start = 2;
    while (start <= Math.sqrt(el)) {
      //console.log(el);
      if (el % start++ < 1) {
        return false;
      }
    }
//console.log(el)
    el > 1 ? num += el : num = num;
    return el > 1;
  });
  return num;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));