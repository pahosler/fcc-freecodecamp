// if max string length (num) is <=3 then the addition of three
// dots does not add to the string length in determining the
// truncated string...
function truncateString(str,num) {
  var elipsis = "...";
  if (num <= 3) {
    num = num;
  } else if (num > 3 && num < str.length) {
    num -= 3;
  }else {
    if (num >= str.length) {
      num = str.length;
      elipsis='';
    }
  }
  str = str.slice(0,num) + elipsis;
  return str;
  
}
console.log(str=truncateString("Peter Piper picked a peck of pickled peppers",14));
console.log(str=truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length+2));
console.log(str=truncateString("A-",1));
