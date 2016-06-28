function bouncer(arr) {
  arr=arr.filter(function falsy(value,index,array) {
    if(value!=='' && typeof(value)==='string' || typeof(value)==='number' && value!==0 && !isNaN(value)){
      console.log("returning true "+value+" "+typeof(value));
      return true;
    }else{
      console.log("returning false "+value+" "+typeof(value));
      return false;
    }
  });

  console.log(arr);

  return arr;
}

bouncer([7,"ate","",false,9]);
bouncer([1,null,NaN,2,undefined]);
bouncer([false,null,0,NaN,undefined,""]);
bouncer(["a","b","c"]);