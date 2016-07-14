function convertToRoman(num){
var finalanswer = [];
var decimals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
var romans = ['I', 'IV', 'V', 'IX', 'X', 'L', 'XC', 'C', 'D', 'CM', 'M'];

while (num > 0) {
  if (num > 1000) {
    finalanswer.push(romans[romans.length - 1]);
    num -= 1000;
  }
  else {
    for (i = decimals.length - 2; i >= 0; i--) {
      if (num >= decimals[i] && num < decimals[i + 1]) {
        finalanswer.push(romans[i]);
        num -= decimals[i];
      } //if end
    } //for loop end
  } //else end
  console.log(num);
} //while end

console.log(finalanswer);
finalanswer = finalanswer.join("");
return finalanswer;
}

console.log(convertToRoman(2020));