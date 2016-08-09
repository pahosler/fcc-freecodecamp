// Inventory Update
// Compare and update the inventory stored in a 2D array against a second
// 2D array of a fresh delivery. Update the current existing inventory item
// quantities (in arr1). If an item cannot be found, add the new item and
// quantity into the inventory array. The returned inventory array should be
// in alphabetical order by item.

function updateInventory(arr1, arr2) {

    function arrToObj(arr) {
        var newObject = {};
        for (var inv=0;inv<arr.length;++inv) {
            newObject[arr[inv][1]] = arr[inv][0];
        }
        return newObject;
    }

    function sortInv(inv) {
      var arr = [];
        var keys = Object.keys(inv),
            i, len = keys.length;
        keys.sort();
        for(i = 0; i < len; ++i){
          var k = keys[i];
          arr.push([inv[k],k]);
        }
        return arr;
    }

    function update(a, b) {
      // current = a / new = b
      // console.log("a,b",a,b);
        if (b === undefined) {
            return sortInv(a);
        } else {
          var keys = Object.keys(b),i,len = keys.length;
          for(i = 0; i < len; ++i){
            var k = keys[i];
            if (a.hasOwnProperty(keys[i])) {
              a[k] = b[k]+a[k];
            }else{
              a[k]=b[k];
            }
          }

        }
        return sortInv(a);
    }

    var current = arrToObj(arr1);
    if (arr2[0] !== undefined) {
        // if arr2 exists do the same as arr1
        var newInvCount = arrToObj(arr2);
    }
    arr1 = update(current,newInvCount);


    // All inventory must be accounted for or you're fired!
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
console.log(updateInventory([
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
], [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
]).length);
// should return an array with a length of 6.

console.log(updateInventory([
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
], [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
]));
// should return [
//     [88, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [3, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [5, "Microphone"],
//     [7, "Toothpaste"]
// ].

console.log(updateInventory([
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
], []));
// should return [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ].
//
console.log(updateInventory([], [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
]));
// should return [
//     [67, "Bowling Ball"],
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [7, "Toothpaste"]
// ].

console.log(updateInventory([
    [0, "Bowling Ball"],
    [0, "Dirty Sock"],
    [0, "Hair Pin"],
    [0, "Microphone"]
], [
    [1, "Hair Pin"],
    [1, "Half-Eaten Apple"],
    [1, "Bowling Ball"],
    [1, "Toothpaste"]
]));
// should return [
//     [1, "Bowling Ball"],
//     [0, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [1, "Half-Eaten Apple"],
//     [0, "Microphone"],
//     [1, "Toothpaste"]
// ].
