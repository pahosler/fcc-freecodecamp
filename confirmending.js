function confirmEnding(str, target) {
  var anyString = str;
  var strLen = target.length;

  if (anyString.substring(anyString.length - strLen) === target) {
    str=true;
  } else{
    str=false;
  }

  return str;
}

console.log(confirmEnding("Bastian","n"));
console.log(confirmEnding("He has to give me a new name","name"));
console.log(confirmEnding("Connor","n"));
