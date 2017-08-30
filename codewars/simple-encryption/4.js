// The crypting-regions are these 3 lines from your keyboard:
// 1. "qwertyuiop"
// 2. "asdfghjkl"
// 3. "zxcvbnm,."
//
// If a char of the string is not in any of these regions, take the char direct in the output.
// If a char of the string is in one of these regions: Move it by the part of the key in the
// region and take this char at the position from the region.
// If the movement is over the length of the region, continue at the beginning.
// The encrypted char must have the same case like the decrypted char!
// So for upperCase-chars the regions are the same, but with pressed "SHIFT"!
//
// The Encryption-Key is an integer number from 000 to 999. E.g.: 127
//
// The first digit of the key (e.g. 1) is the movement for the first line.
// The second digit of the key (e.g. 2) is the movement for the second line.
// The third digit of the key (e.g. 7) is the movement for the third line.
//
// (Consider that the key is an integer! When you got a 0 this would mean 000. A 1 would mean 001. And so on.)
// You do not need to do any prechecks. The strings will always be not null and will always have a length > 0. You do not have to throw any exceptions.
//
// An Example:
//
// Encrypt "Ball" with key 134
// 1. "B" is in the third region line. Move per 4 places in the region. -> ">" (Also "upperCase"!)
// 2. "a" is in the second region line. Move per 3 places in the region. -> "f"
// 3. "l" is in the second region line. Move per 3 places in the region. -> "d"
// 4. "l" is in the second region line. Move per 3 places in the region. -> "d"
// --> Output would be ">fdd"

function encrypt(text, key) {
  var encrypted = false;
  return simple4(encrypted,text,key);
}

function decrypt(text, key) {
  var encrypted = true;
  return simple4(encrypted,text,key);
}

function simple4(encrypted,text,key) {
  var crypt = new cipher();
  var encryptKey = crypt.hashKeys(key);
  var out = [];
  text.split('').reduce((acc,curr) => {
    out.push(crypt.coded(encrypted,curr,encryptKey));
  },[]);
  return out.join('');

}


var cipher = function () {

    var row = {
      lowerEnc: ["qwertyuiop", "asdfghjkl", "zxcvbnm,."],
      upperEnc: ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM<>"],
      // reverse the rows for decryption
      lowerDec: ["poiuytrewq","lkjhgfdsa",".,mnbvcxz"],
      upperDec: ["POIUYTREWQ","LKJHGFDSA","><MNBVCXZ"]
      /*
          you could reverse the cipher this way

          var revRow = crypt.row.lowerEnc[letterRow].split('').reverse().join('');

          although I think using an array will be faster<?>
      */

    };
    function isUpper(letter){
      var state = false;
      this.letter = letter.charCodeAt(0);
      (this.letter >64 && this.letter < 91 || this.letter == 60 || this.letter == 62) ?
        state = true : state = false;
      return state;

    }
    function hashKeys(key){
      var keyArr = key.toString().split('');
      if (keyArr.length < 3) {
        for (var i = keyArr.length; i < 3; ++i){
          keyArr.unshift('0');
        }
      }
      return keyArr;
    }
    function coded(encrypted,letter,encryptKey) {
      var upper = isUpper(letter);
      var keys = [];
      var keyRow;
      var region;
      if (upper && encrypted) {
        keys = row.upperDec;
      } else if (upper && !encrypted) {
        keys = row.upperEnc;
      } else if (!upper && encrypted){
        keys = row.lowerDec;
      } else {
        keys = row.lowerEnc;
      }
      keys.reduce((acc,curr,idx) => {
        if (curr.indexOf(letter) != -1 ){
          // get key row and index for the cipher
          region = idx;
          keyRow = curr;
        }
        if (keyRow === curr) return;
      },[]);
      if (keyRow === undefined) {
        return letter;
      } else {
        var letterNum = keyRow.indexOf(letter);
        var aNum = parseInt(encryptKey[region]);
        var cryptLetterNum = (letterNum+parseInt(encryptKey[region]))%(keyRow.length);
        if (cryptLetterNum == 0) {
          cryptLetterNum == 1;
        }
        letter = keyRow.substring(cryptLetterNum,cryptLetterNum+1);
        return letter;
      }
    }
    return {
      row:row,
      hashKeys:hashKeys,
      coded:coded
    };
  };
//console.log(encrypt('lemmings love lollies & lemons!',713));
//console.log(decrypt('p.hd mp pd & p.d!',713));
var aWord = encrypt('lemmings and llamas love lollies & lemons!',134)
console.log( aWord );
aWord=decrypt(aWord,134);
console.log(aWord);
