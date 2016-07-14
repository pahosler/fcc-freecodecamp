function translatePigLatin(str) {
  var pig = str;
  (str = str.split(/(\b)([^aeiou]+)/).reverse().join('')) === pig ? str += "way" : str += "ay";
  console.log(str);
  return str;
}

translatePigLatin("candy");
translatePigLatin("throw");
