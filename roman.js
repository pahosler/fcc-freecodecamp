function convertToRoman(num) {
  var numArr = num.toString().split('').reverse();
  var convert = new romanNum;
  function romanNum() {
    //this.place = place;
    //this.num = parseInt(num);
    this.roman = function (numArr) {
      this.numArr = numArr;
      //console.log(numArr);
      rn = [];
      for (var place = 0; place < numArr.length; ++place) {
        switch (place) {
          case 0:
            if (numArr[place] == 9) {
              rn.unshift('IX');
              break;
            } else if (numArr[place] == 5) {
              rn.unshift('V');
              break;
            } else if (numArr[place] > 4) {
              rn.unshift('VIIII'.substr(0, numArr[place] - 4));
              break;
            } else if (numArr[place] == 4) {
              rn.unshift('IV');
              break;
            } else {
              rn.unshift('IIII'.substr(0, numArr[place]));
              break;
            }
          case 1:
            if (numArr[place] == 9) {
              rn.unshift('XC');
              break;
            } else if (numArr[place] == 10) {
              rn.unshift('X');
              break;
            } else if (numArr[place] == 4) {
              rn.unshift('XL');
              break;
            } else if (numArr[place] > 4) {
              rn.unshift('LXXX'.substr(0, numArr[place] - 4));
              break;
            } else {
              rn.unshift('XXXX'.substr(0, numArr[place]));
              break;
            }
          case 2:
            if (numArr[place] == 9) {
              rn.unshift('CM');
              break;
            } else if (numArr[place] == 5) {
              rn.unshift('D');
              break;
            } else if (numArr[place] > 4) {
              rn.unshift('DCCCC'.substr(0,numArr[place] - 4));
              break;
            } else if (numArr[place] == 4) {
              rn.unshift('CD');
              break;
            } else {
              rn.unshift('CCCC'.substr(0, numArr[place]));
              break;
            }
          case 3: rn.unshift('MMMM'.substr(0, numArr[place])); break;
          default: return '';
        }
      }
    return rn;
    }
  }
  //console.log(Math.floor(num % 10));
  num = convert.roman(numArr).join('');

  return num;
}
console.log("2194 = ",convertToRoman(2194));
console.log("36 = ", convertToRoman(36));
console.log("649 = ", convertToRoman(649));
console.log("798 = ", convertToRoman(798));
console.log("891 = ",convertToRoman(891));
console.log("3999 = ",convertToRoman(3999));
console.log("2016 = ",convertToRoman(2016));
console.log("1967 = ",convertToRoman(1967));