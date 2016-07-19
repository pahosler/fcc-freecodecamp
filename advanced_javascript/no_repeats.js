// No repeats please
// Return the number of total permutations of the provided string that don't
// have repeated consecutive letters. Assume that all characters in the
// provided string are each unique.
//
// For example, aab should return 2 because it has 6 total
// permutations(aab, aab, aba, aba, baa, baa),
// but only 2 of them(aba and aba) don 't have the same letter
// (in this case a) repeating.

//https://repl.it/C5ci
//https://repl.it/C5ci/1

function permAlone(str) {
  return str;
}

console.log(permAlone('aab');
console.log(permAlone("aaa"); // should return 0.
console.log(permAlone("aabb"); // should return 8.
console.log(permAlone("abcdefa"); // should return 3600.
console.log(permAlone("abfdefa"); // should return 2640.
console.log(permAlone("zzzzzzzz"); // should return 0.
console.log(permAlone("a"); // should return 1.
console.log(permAlone("aaab"); // should return 0.
console.log(permAlone("aaabb"); // should return 12
