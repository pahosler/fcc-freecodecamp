/*
 * Convert a string to spinal case. Spinal case is
 * all-lowercase-words-joined-by-dashes.
 */
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    //str=str.split(' ').join('_');
    console.log(str);
    function spinaltap(match) {
      console.log("match ",match);
      (str.indexOf(match) === 0) ? match=match.toLowerCase() : match="-"+match.toLowerCase();
      match=match.split(/[_ ]/).join('');
            return match;

    }
    return str.replace(/^[A-Z]|\s[A-Z]|\W[A-Z]|\s([a-z])|([A_Z])\S|[a-z]*?[A-Z]  /g, spinaltap);
}
console.log(spinalCase('This Is Spinal Tap')); // should return this-is-spinal-tap
console.log(spinalCase("thisIsSpinalTap")); // should return this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); // should return the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh")); // should return teletubies-say-eh-oh
console.log(spinalCase("AllThe-small Things")); // should return all-the-small-things
//console.log(spinalCase("OverThe-The The")); // should return all-the-small-things

//return str.replace(/^[A-Z]|\s[A-Z]|[_][A-Z]|\S([A-Z])|\s([a-z])|(?:[a-z])([A_Z])|\S(\s)\S \1 \2/g, spinaltap);


/*

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
*/
