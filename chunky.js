#!/home/pahosler/bin/nodejs/bin/node
function chunkArrayInGroups(arr,size) {
  var chunkArr = [];
  var arrPos=0;
  while(arr.length > arrPos) {
  chunkArr.push((arr.slice(arrPos,arrPos+size)));
  arrPos+=size;
  //size+=size;

  }
  console.log(chunkArr);
  return arr;
}

chunkArrayInGroups(["a","b","c","d"],2);
chunkArrayInGroups([0,1,2,3,4,5],3);
chunkArrayInGroups([0,1,2,3,4,5],4);
chunkArrayInGroups([0,1,2,3,4,5],2);
chunkArrayInGroups([0,1,2,3,4,5,6,7,8],4);
