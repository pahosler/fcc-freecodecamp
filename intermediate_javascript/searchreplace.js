// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and
// return the new sentence.
//
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing(before).
// Third argument is what you will be replacing the second argument with(after).
//
// NOTE: Preserve the
// case of the original word when you are replacing it.For example
// if you mean to replace the word "Book"
// with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  function isUpperCase(chkString){
    if (chkString.charCodeAt(0)<97) {
      return true;
    }else {
      return false;
    }
  }

  function makeUpper(someString){
    someString=someString.replace(/^[a-z]/, function(match){
      return match.toUpperCase();
    });
    return someString;
  }

  var strArr = str.split(' ');
  var beforeIdx = strArr.indexOf(before);
  if(isUpperCase(strArr[beforeIdx])){
    after=makeUpper(after);
  }
  strArr.splice(beforeIdx,1,after);
  str = strArr.join(' ');

    return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); //should return "A quick brown fox leaped over the lazy dog"
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // should return "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms".
