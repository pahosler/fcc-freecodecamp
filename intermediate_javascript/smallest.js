/*
 * Find the smallest common multiple of the provided parameters that can be
 * evenly divided by both, as well as by all sequential numbers in the range
 * between *these parameters.
 *
 * The range will be an array of two numbers that will not necessarily be in
 * numerical order.
 *
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
 * evenly divisible by all numbers between 1 and 3.
 */

function smallestCommons(arr) {
    var dArr = []; //delta array
    // sort array in numerical order
    arr.sort(function(a, b) {
        return a - b;
    });
    for (var i = arr[0]; i < arr[arr.length - 1]; i++) {
        if (i + 1 < arr[arr.length - 1]) arr.splice(-1, 0, i + 1);
    }
    dArr = arr.slice(0); // copy arr to delta to maintain change in arr

    function getSmallest() {

        arr.forEach(function(e, i, a) {
            e < a[a.length - 1] ? a[i] = e += dArr[i] : e = e;
            a[a.length - 1] < e ? a[a.length - 1] += dArr[dArr.length - 1] : a[a.length - 1] = a[a.length - 1];
            this.stack = a[0]; // I'll just leave this here for now, get it with stack outside of here...
        }, this);
    }
    while (arr[0] !== arr[arr.length - 1]) {
        getSmallest();
    }

    //like this console.log(stack); it should work anyway...
console.log("stack ",stack);
    return arr[0];
}

//console.log(smallestCommons([1, 5])); // should return 60
//console.log(smallestCommons([5,1])); // should return 60
//console.log(smallestCommons([1,13])); // should return 360360
console.log(smallestCommons([23,18])); // should return 6056820
