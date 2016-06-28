function titleCase(str) {
  //var toUpperStr;
  str=str.toLowerCase();
  console.log(str);
  var arr=str.split(' ');

  function upper(match,p1,p2,offset,string) {
    //p1.toUpperCase();
    return [p1.toUpperCase(),p2].join('');
  }
  for (i=0; i<arr.length;++i) {
  var toUpperStr = arr[i];
  arr[i] = arr[i].replace(/(^\S?)(.*)/,upper);
  }

  str = arr.join(' ');
  console.log(str);
  return str;
}

titleCase("I'm a lIttLE TEA pot");
