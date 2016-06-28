function slasher(arr, howMany) {
  var num = howMany;
  arr.splice(0,num);
  console.log(arr);

  return arr;
}

slasher([1,2,3],2);
slasher([1,2,3],0);
slasher([1,2,3],9);
slasher([1,2,3],4);
slasher([1,2,"chicken",3,"potatoes","cheese",4],5);
