function factorialize(num) {
  var prod =1;
  for (i=1; i<num+1; ++i) {
    prod=prod*i;
  }
  num = prod;
  return num;
}
console.log(factorialize(50));
