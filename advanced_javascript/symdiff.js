// Symmetric Difference
// Create a function that takes two or more arrays and returns an array of the
// symmetric difference (△ or ⊕) of the provided arrays.
//
// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the
// mathematical term "symmetric difference" of two sets is the set of elements
// which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
// For every additional symmetric difference you take (say on a set D = {2, 3}),
// you should get the set with elements which are in either of the two sets
// but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

// function sym(args) {
//     var arr = [...arguments];
//     var diff = [];
//     var symdiffs = [];
//
//     function symdiff(a, b) {
//         var values = a.concat(b);
//         var array =[];
//         // console.log("this is v", values);
//         for (var i = 0; i < values.length; ++i) {
//             var temp = [...values];
//             var indicies = [];
//             var idx = values.indexOf(values[i]);
//             while (idx != -1) {
//                 indicies.push(idx);
//                 idx = values.indexOf(values[i], idx + 1)
//             }
//             if(b === undefined){
//               if (indicies.length === 1 || indicies.length >=2) {
//                   var cut =(temp.splice(indicies[0], 1));
//                   if(cut[0] !== undefined && array.indexOf(cut[0]) == -1){
//                     array.push(cut[0]);
//                   }
//               }
//             }else {
//             if (indicies.length === 1) {
//                 var cut =(temp.splice(indicies[0], 1));
//                 if(cut[0] !== undefined && array.indexOf(cut[0]) == -1){
//                   array.push(cut[0]);
//                 }
//             }
//           }
//         }
//         // console.log("this is array", array);
//         return [...array].sort();
//     }
//
//     arr.reduce(function(a, sym, idx, array) {
//         // console.log(array);
//         if (a !== undefined) {
//             diff = symdiff(a.sort());
//             diff = symdiff(diff.sort(), sym.sort());
//         } else {
//           var diffs = symdiff(sym.sort());
//           // console.log("sym/diffs",sym,diffs);
//           diff = symdiff(diff.sort(), diffs.sort());
//           // console.log("diff",diff);
//         }
//         // console.log("new diff", diff);
//
//     });
//     return diff;
//
//
// }
//sym([5, 2, 1, 4], [1, 2, 3]);

console.log("I am...", sym([1, 2, 3], [5, 2, 1, 4])); //should return [3, 4, 5].
console.log("I am...", sym([1,1,1,1, 2, 5], [2, 3, 5], [3, 4, 5])); // should return [1, 4, 5].
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // should contain only three elements.
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // should return [1, 4, 5].
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // should contain only three elements.
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // should return [2, 3, 4, 6, 7].
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // should contain only five elements.
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])); // should return [1, 2, 4, 5, 6, 7, 8, 9].
console.log("testing",sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])); // should contain only eight elements.


// sweet ass solution from gitter chat...
function sym(args) {

  return Array.from(arguments).reduce(function(arr1,arr2){
    return arr1.concat(arr2).filter(function(a,b,c){
      return arr1.indexOf(a) === -1 && b === c.indexOf(a) ||
             arr2.indexOf(a) === -1 && b === c.indexOf(a);});
  }).sort();
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
