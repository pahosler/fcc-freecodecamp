// Description:
//
// Beetlejuice! Beetlejuice! Beetlejuice!
//
// When Beetlejuice() is ran the third time, Beetlejuice is here! The example is all you need! But the only rule is...
//
// No global scope outside of Beetlejuice is allowed ;)
//
// Example.
// Beetlejuice() // undefined
// Beetlejuice() // undefined
// Beetlejuice() // Beetlejuice is here!
// Beetlejuice() // undefined
// fundamentals closures

var Beetlejuice = (function(counter){
  this.counter = 0;
  return function(){
    ++this.counter;
    if (this.counter !== 3) {
      return undefined;
    }else {
      this.counter = 0;
      return 'Beetlejuice is here!';
    }
  }
})();
console.log(Beetlejuice());
console.log(Beetlejuice());
console.log(Beetlejuice());
console.log(Beetlejuice());
console.log(Beetlejuice());
console.log(Beetlejuice());
console.log(Beetlejuice());
console.log(Beetlejuice());
