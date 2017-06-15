// Missing letters
// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.


function fearNotLetter(array) {
    return array.reduce((acc, next) => {
      console.log( acc,next )
      return acc
    }, acc)
//        strSum1 += str.charCodeAt(i);

//        return str;
    }

    console.log(fearNotLetter(['a', 'b', 'c', 'e', 'f'])); // should return d
    console.log(fearNotLetter(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o'])); // should return "i".
    console.log(fearNotLetter(['b', 'c', 'd'])); // should return undefined.
    console.log(fearNotLetter(['y', 'z'])); // should return undefined
