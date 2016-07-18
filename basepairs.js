// DNA Pairing
// The DNA strand is missing the pairing element.Take each character, get its pair, and
// return the results as a 2 d array.
//
// Base pairs are a pair of AT and CG.Match the missing element to the provided character.
//
// Return the provided character as the first element in each array.
//
// For example,
// for the input GCG,
// return [
//     ["G", "C"],
//     ["C", "G"],
//     ["G", "C"]
// ]
// G pairs with C pairs with G
// A pairs with T pairs with A
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    var dna = [];
    var base = str.split('');
    for (var piece in base) {
        dna.push([base[piece]]);
    }
    dna.forEach(function(d, n, a) { // LOL d- element n- index a- array
        switch (a[n][0]) {
            case "A":
                a[n].push("T");
                break;
            case "C":
                a[n].push("G");
                break;
            case "G":
                a[n].push("C");
                break;
            case "T":
                a[n].push("A");
                break;
        }
        // a[n].push(n);
        // console.log(a[n][0]);
    });
    return dna;
}

console.log(pairElement("GCG")); // should return  [["G", "C"], ["C","G"],["G", "C"]]
console.log(pairElement("ATCGA")); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA")); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
