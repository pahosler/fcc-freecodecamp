// Validate US Telephone Numbers
// Return true if the passed string is a valid US phone number.
//
// The user may fill out the form field any way they choose as long as it is a
// valid US number. The following are examples of valid formats for US numbers
// (refer to the tests below for other variants):
//
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
//
// For this challenge you will be presented with a string such as 800-692-7753
// or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone
// number based on any combination of the formats provided above. The area code
// is required. If the country code is provided, you must confirm that the
// country code is 1. Return true if the string is a valid US phone number;
// otherwise return false.

function telephoneCheck(str) {
    // Good luck!
    var re = [/(?:\d{3}|\(\d{3}\)\s|\d{3}\s|\(\d{3}\))([-\/\. ])\d{3}\1\d{4}/g,/\d{10,10}/,
     '(555)555-5555', '(555) 555-5555', '555 555 5555', '5555555555', '1 555 555 5555'];
var myArray = re[1].test("0123455678");
console.log(myArray);
myArray = re[0].test("555 555 5555");

console.log(myArray);
    return true;
}



telephoneCheck("555-555-5555");