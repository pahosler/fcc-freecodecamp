// Make a Person
// Fill in the object constructor with the following methods below:
//
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
//
// The methods that take an argument must accept only one argument and it has to
// be a string.
//
// These methods must be the only available means of interacting with the object.
//

var Person = function(firstAndLast) {
  var nameArr = firstAndLast.split(' ');
  var name = {
    firstName: nameArr[0],
    lastName : nameArr[1]
  };

  function getFirstName() {
      return name.firstName;
  }
  function getLastName() {
    return name.lastName;
  }
  function getFullName() {
    return name.firstName + " "+name.lastName;
  }
  function setFirstName(first) {
    name.firstName = first;
  }
  function setLastName(last) {
    name.lastName = last;
  }
  function setFullName(full) {
    var full = full.split(' ');
    name.firstName = full[0];
    name.lastName = full[1];
  }
    return {
      getFirstName: getFirstName,
      getLastName: getLastName,
      getFullName: getFullName,
      setFirstName: setFirstName,
      setLastName: setLastName,
      setFullName: setFullName
    }

};

var bob = new Person('Bob Ross');
console.log(bob.getFullName()); // returns Bob Ross
bob.setFirstName('Haskel');
console.log(bob.getFullName()); //returns Haskel Ross
console.log(bob instanceof Person); // returning false... why???

// this code DOES NOT pass because of instanceof, you have to use
// things like...
// this.setFirstName = function(first){
// ...code...
// }
// and you don't need the last return...
