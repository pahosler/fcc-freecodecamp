function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1]=arr[1].toLowerCase();
  var arrSplit1=arr[0].split('');
  var arrSplit2=arr[1].split('');
  // arr[0] = arrSplit1; arr[1]=arrSplit2;
  // console.log(arrSplit1);
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

mutation(["Hello","hello"]);
mutation(["Mary","Army"]);
mutation(["floor","for"]);
mutation(["Alien","line"]);
mutation(["voodoo","neo"]);
