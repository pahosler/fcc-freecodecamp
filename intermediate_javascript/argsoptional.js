// Arguments Optional
// Create a function that sums two arguments together. If only one argument is
// provided, then return a function that expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should
// return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.


// you need to divide up the sequence of things to do
// for arguments optional:
// 1. if either of the arguments aren’t a number, return undefined( in this
// case, addition is not possible, so you want to exit as fast as possible).
// 2. else if both of the arguments are present, then add them together
// (you know at this point that they are numbers due to 1)
// 3. else return a function that takes one argument - literally
// return function(arg) { /* do your stuff */ }.You already have the first
// argument, so this function should take an argument and add it to the one
// you already have.
function addTogether() {
    var args = [...arguments];
    var aNum;

    if (args.length === 2) {
        if (typeof(args[0]) !== 'number' || typeof(args[1]) !== 'number') {
            return undefined;
        }
        sum = args[0] + args[1];
        return sum;
    } else if (args.length === 1 && typeof(args[0]) === 'number') {
        aNum = args[0];
        return function(num) {
            if (typeof(num) !== 'number') {
                return undefined;
            }
            sum = aNum + num;
            return sum;
        };
    }
    return undefined;
}


console.log(addTogether(2, 3)); // should return 5.
var value = addTogether(2)(3);
console.log(value); // should return 5.
addTogether("http://bit.ly/IqT6zt"); // should return undefined.
addTogether(2, "3"); // should return undefined.
addTogether(2)([3]); // should return undefined.
