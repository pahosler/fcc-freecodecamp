function werds(str) {
  var strArr = []
  var strArr2 = str.split('');
  str.split(' ').reduce((prev,curr)=>{
    strArr.push(curr);
},[])
  console.log(strArr,strArr2);
}

werds('this is a test')
