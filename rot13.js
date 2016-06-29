function rot13(str) {

  return str.replace(/[a-z]/gi,
    function (char) {
      var rot = char.charCodeAt(0) + 13;
      return String.fromCharCode((90 >= rot) ? rot : rot - 26);
    });
}
console.log(rot13("SERR PBQR PNZC"));
//rot13([78, 79, 80]);