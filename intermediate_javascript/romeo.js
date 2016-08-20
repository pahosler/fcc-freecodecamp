  /*
   * Make a function that looks through an array of objects (first argument)
   * and returns an array of all objects that have matching property and value
   * pairs (second argument). Each property and value pair of the source object
   * has to be present in the object from the collection if it is to be included
   * in the returned array.
   *
   * For example, if the first argument is
   * [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
   * { first: "Tybalt", last: "Capulet" }],
   * and the second argument is { last: "Capulet" },
   * then you must return the third object from the array (the first argument),
   * because it contains the property and its value, that was passed on as the
   * second argument.
   */

  // Here are some helpful links:
  // Global Object
  // Object.prototype.hasOwnProperty()
  // Object.keys()

  function whatIsInAName( collection, source ) {
      // What's in a name?
      arr = [];
      // get the keys from the source object and store them in an array
      var keys = Object.keys( source );
      // use reduce to traverse the collection array
      // acc is the source argument, next is the current source object
      collection.reduce( ( acc, next ) => {
          // use reduce again for the source keys array
          // prev will be true or flase, curr is the current key in keys array
          if ( keys.reduce( ( prev, curr ) => {
                  // return true if current collection propery is equal to
                  // the current source property else return false
                  return ( next[ curr ] == source[ curr ] ) ? true : false
              }, true ) ) {
              // if true push object next to the array
              arr.push( next )
          } else {
              // if false go through the loop again with source set to acc again
              return source
          }
      }, source );
      // source is the initial value for reduce, so acc = source

      // this was my original submit to the challenge....
      // Only change code below this line
      // var arr = [];
      // var numSourceProperties = 0;
      // for ( var props in source ) {
      //     ++numSourceProperties;
      // }
      // for ( var collectionArray in collection ) {
      //     var count = 0;
      //
      //     for ( var collectionProps in collection[ collectionArray ] ) {
      //         for ( var srcProperty in source ) {
      //             if ( collection[ collectionArray ].hasOwnProperty( srcProperty ) &&
      //                 collection[ collectionArray ][ collectionProps ] === source[ srcProperty ] ) {
      //                 ++count;
      //                 if ( count === numSourceProperties ) {
      //                     arr.push( collection[ collectionArray ] );
      //                 }
      //             }
      //         }
      //     }
      // }
      // Only change code above this line
      return arr;
  }

  console.log( whatIsInAName( [ {
      first: "Romeo",
      last: "Montague"
  }, {
      first: "Mercutio",
      last: null
  }, {
      first: "Tybalt",
      last: "Capulet"
  } ], {
      last: "Capulet"
  } ) ); //should return [{ first: "Tybalt", last: "Capulet" }]
  console.log( whatIsInAName( [ {
      "a": 1
  }, {
      "a": 1
  }, {
      "a": 1,
      "b": 2
  } ], {
      "a": 1
  } ) ); //should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
  console.log( whatIsInAName( [ {
      "a": 1,
      "b": 2
  }, {
      "a": 1
  }, {
      "a": 1,
      "b": 2,
      "c": 2
  } ], {
      "a": 1,
      "b": 2
  } ) ); //should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
  console.log( whatIsInAName( [ {
      "a": 1,
      "b": 2
  }, {
      "a": 1
  }, {
      "a": 1,
      "b": 2,
      "c": 2
  } ], {
      "a": 1,
      "c": 2
  } ) ); //should return [{ "a": 1, "b": 2, "c": 2 }]
