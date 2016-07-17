/*
* Convert a string to spinal case. Spinal case is
* all-lowercase-words-joined-by-dashes.
*/
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str=str.split(' ').join('');
  console.log(str);
  function spinaltap(match) {
    return '-' + match.toLowerCase();
  }
  return str.replace(/[A-Z]/g, spinaltap);
}

console.log(spinalCase('This Is Spinal Tap')); // should return this-is-spinal-tap
console.log(spinalCase("thisIsSpinalTap")); // should return this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); // should return the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh")); // should return teletubies-say-eh-oh
console.log(spinalCase("AllThe-small Things")); // should return all-the-small-things


/*

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
*/
