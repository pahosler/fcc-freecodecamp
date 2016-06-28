function repeatStringNumTimes(str,num) {
  if (num < 0) {
    num = 0;
  }

  str = str.repeat(num);
  return str;
}

console.log(repeatStringNumTimes("abc",3));
