function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1]=arr[1].toLowerCase();
  var arrSplit1=arr[0].split('');
  var arrSplit2=arr[1].split('');
  for (var i=0; i<arrSplit2.length; i++) {
    var myIndex=arrSplit1.indexOf(arrSplit2[i]);
    console.log(i+" finding "+arrSplit2[i]+" in "+arrSplit1+" myIndex is:"+myIndex);
    if (arrSplit1.indexOf(arrSplit2[i]) == -1) {
      console.log("flase");
      return false;
      }else {
        if (i == arrSplit2.length-1) {
          console.log("true");
          return true;
        }
      }
  }
    return arr;
}
function mutation2(arr) {
    arr = arr[0].toLowerCase().split('').sort().join('').indexOf(arr[1].toLowerCase().split('').sort().join('')) !== -1;

    console.log(arr);
  return arr;
}

mutation2(["hello", "hey"]);
mutation2(["Hello","hello"]);
//mutation(["Mary","Army"]);
//mutation(["floor","for"]);
//mutation(["Alien","line"]);
//mutation(["voodoo","neo"]);
