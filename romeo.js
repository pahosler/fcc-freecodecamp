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

  function whatIsInAName(collection, source) {
      // What's in a name?
      //var collection = JSON.parse(JSON.stringify(collection));
      //var source = JSON.parse(JSON.stringify(source));
      //    console.log(collection);
          var arr = [];
      //    console.log("arrays and values in collection");
      for (var collectionArray in collection) {
          for (var collectionProps in collection[collectionArray]) {
              //        console.log(collectionProps,collection[collectionArray][collectionProps]);
              //        console.log("test if source shares a property");
              for (var srcProperty in source) {
                  //        console.log(srcProperty,collectionProps);
                  //        console.log(collection[collectionArray].hasOwnProperty(srcProperty));
                  if (collection[collectionArray].hasOwnProperty(srcProperty) &&
                      collection[collectionArray][collectionProps] === source[srcProperty]) {
                      arr.push(collection[collectionArray]);
                  }
                  //        console.log(srcProperty.valueOf(),collectionProps.valueOf());
              }
          }
          //console.log(collection[collectionArray]);
      }
      //  console.log("source properties and values");
  //    for (var srcProps in source) {

          //  console.log(srcProps,source[srcProps]);
//      }

      //}
      // Only change code below this line
      // var names = getOwnPropertyNames(source);
      // arr=collection.forEach(function(e,i,a){
      // //for (var name in a[e][i]) {
      // console.log("element"+i+"= ",e);
      // //console.log("array = ",a);
      // console.log("source = ",source);
      // console.log("does e have source? ",source.hasOwnProperty(e));

      //  if (source.hasOwnProperty(e)){
      //  return true;
      //  }else {
      //    return false;
      //  }
      //  }
      //});



      // Only change code above this line
      return arr;
  }

  console.log(whatIsInAName([{
      first: "Romeo",
      last: "Montague"
  }, {
      first: "Mercutio",
      last: null
  }, {
      first: "Tybalt",
      last: "Capulet"
  }], {
      last: "Capulet"
  })); //should return [{ first: "Tybalt", last: "Capulet" }]
  console.log(whatIsInAName([{
      "a": 1
  }, {
      "a": 1
  }, {
      "a": 1,
      "b": 2
  }], {
      "a": 1
  })); //should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
  console.log(whatIsInAName([{
      "a": 1,
      "b": 2
  }, {
      "a": 1
  }, {
      "a": 1,
      "b": 2,
      "c": 2
  }], {
      "a": 1,
      "b": 2
  })); //should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
  console.log(whatIsInAName([{
      "a": 1,
      "b": 2
  }, {
      "a": 1
  }, {
      "a": 1,
      "b": 2,
      "c": 2
  }], {
      "a": 1,
      "c": 2
  })); //should return [{ "a": 1, "b": 2, "c": 2 }]
