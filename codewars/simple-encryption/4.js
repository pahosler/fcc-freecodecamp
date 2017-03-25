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
  var encrypted = flase;
  var bcase;
  return simple(encrypted,text,key);
}

function decrypt(text, key) {
  var encrypted = true;
  return simple(encrypted,text,key);
}

function simple(text,key) {
  var crypt = new cipher();
  var encryptKey = crypt.keys(key);
  var out = [];
  text.split('').reduce((acc,curr) => {
    curr = crypt.getLetter(curr);
    out.push(curr);
//    return;
  },[]);

  var region = 1;// getLetterRow();
  /*
      you could reverse the cipher this way

      var revRow = crypt.row.lowerEnc[letterRow].split('').reverse().join('');

      although I think using an array will be faster<?>
  */

  var letterNum = crypt.row.lowerEnc[region].indexOf(letter);
  var cryptLetterNum = (letterNum+encryptKey[0])%crypt.row.lowerEnc[region].length;
  var cryptLetter = crypt.row.lowerEnc[region].substring(cryptLetterNum,cryptLetterNum+1);
  console.log(letter,letterNum,cryptLetter,cryptLetterNum);
  console.log('<','<'.charCodeAt(0));
  console.log('>','>'.charCodeAt(0));
  console.log(',',','.charCodeAt(0));
  console.log('.','.'.charCodeAt(0));
  console.log('a','A'.charCodeAt(0));
  console.log('z','Z'.charCodeAt(0));

}


var cipher = function () {

    var row = {
      lowerEnc: ["qwertyuiop", "asdfghjkl", "zxcvbnm,."],
      upperEnc: ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM<>"],
      lowerDec: ["poiuytrewq","lkjhgfdsa",".,mnbvcxz"],
      upperDec: ["POIUYTREWQ","LKJHGFDSA","><MNBVCXZ"]
    };
    function getLetterRow(bcase, letter){

      return ;

    }
    function isUpper(letter){
      this.letter = letter.charCodeAt(0);
      (this.letter >)
      return ;

    }
    function keys(key){
      var keyArr = key.toString().split('');
      if (keyArr.length < 3) {
        for (var i = keyArr.length; i < 3; ++i){
          keyArr.unshift('0');
        }
      }
      return keyArr;
    }
    function getLetter(letter) {
      // char codes a-z 97-122
      // char codes A-Z 65-90
      //char codes ',','.','<','>'   44,46,60,62

    }
  return {
    row:row,
    keys:keys

  };
  };
encrypt('lemmings love lollies & lemons!',713);
