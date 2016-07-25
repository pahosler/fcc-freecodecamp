function translatePigLatin(str) {
  var pig = str;
  (str = str.split(/(\b)([^aeiou]+)/).reverse().join('')) === pig ? str += "way" : str += "ay";
  return str;
}

console.log(translatePigLatin("candy"));
console.log(translatePigLatin("throw"));
console.log(translatePigLatin("kjslkdjfsdjfhlob"));
