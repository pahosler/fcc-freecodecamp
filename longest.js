function findLongestWord(str) {
  var arr = str.split(" ");
  // temp array holds objs with position and sort-value
  var mapped = arr.map(function (largest, i) {
    return { index: i, value: largest.length };
  });

  // sorting the mapped array containing values
  mapped.sort(function (a, b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
  });

  // the resulting order
  var result = mapped.map(function (largest) {
    return arr[largest.index];
  });
  console.log(result[result.length - 1]);

  return;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Beef soup cups bowl fork fish");
