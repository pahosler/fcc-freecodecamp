// Missing letters
// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  var first = str.charCodeAt(0);
  var last = str.charCodeAt(str.length-1);
  var strSum1 = 0;
  var strSum2 = 0;
  for (var i =0; i <str.length;++i){
    strSum1 += str.charCodeAt(i);
  }
  for (var i = first; i< last+1; i+=1){
    strSum2 +=i;
  }
  if(strSum2 === strSum1){
    return;
  }else {
    return String.fromCharCode(strSum2-strSum1);
  }
  return str;
}

console.log(fearNotLetter("abce")); // should return d
console.log(fearNotLetter("abcdefghjklmno")); // should return "i".
console.log(fearNotLetter("bcd")); // should return undefined.
console.log(fearNotLetter("yz")); // should return undefined
