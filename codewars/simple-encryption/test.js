function werds(str) {
  var arr=[];
  for(var i = 0; i < str.length-(str.length%2);i+=2) {
    arr.push(str.slice(i,i+2))
  }
  if (str.length%2 == 1) {
    arr.push((str.slice(-1))+'_');
  }
  var text = 'AWUBWUBWUBBWUBWUBWUBC';
  var song='';
  // text.split('WUB').reduce((a,b)=>{
  //    (b !== '')?song+=b:null
  // },[])
  console.log(song);
}

werds('abc');
werds('abcdef')
