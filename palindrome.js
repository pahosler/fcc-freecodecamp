function palindrome(str) {
  var strCopy=str=str.toLowerCase();
//  console.log(str);
//  console.log(strCopy);
  var re = /[a-z0-9]+/g;
  var re2 = /\S/g;
  //  /[a-z0-9]+.*/g;
  var strArr= strCopy.match(re);
//  console.log(strArr);
  str=strCopy=strArr.join('');
  console.log(strCopy);
  strArr = strCopy.match(re2);
//  console.log(strArr);
  strArr=strArr.reverse();
  strCopy = strArr.join('');
  console.log(strCopy);
  if (str === strCopy) {
    console.log("TRUE");
  }else { 
    console.log("FALSE");
  }
  return true;
}

palindrome("This is A 123 *&^#! tesT FOR TOlOWeR");
palindrome("Race car");
palindrome("A man, a plan, a canal. Panama");
