var contacts = [
      {
         "firstName": "Akira",
         "lastName": "Laine",
         "number": "0543236543",
         "likes": ["Pizza", "Coding", "Brownie Points"]
       },

       {
          "firstName": "Harry",
          "lastName": "Potter",
          "number": "0994372684",
          "likes": ["Hogwarts", "Magic", "Hagrid"]
        },
        
        {
           "firstName": "Sherlock",
           "lastName": "Holmes",
           "number": "0487345643",
           "likes": ["Intriguing Cases", "Violin"]
         },
         
         {
            "firstName": "Kristian",
            "lastName": "Vos",
            "number": "unknown",
            "likes": ["Javascript", "Gaming", "Foxes"]
         }
];

function lookUpProfile(firstName, prop){
  // Only change code below this line
    var contact = 0;
    var i = 0;
    while (i < contacts.length) {
      if (contacts[i].firstName !== firstName) {
        ++i;
      } else {
        // check property
        if(! contacts[i].hasOwnProperty(prop)) {
          console.log("No such property");
          return "No such property";
        }else {
          console.log(contacts[i].firstName, "likes ", contacts[i][prop]);
          return;
        }
      }  
    }
    console.log("No such contact");
    return "No such contact";


// Only change code above this line
}
// Change these values to test your function
lookUpProfile("Kristian", "lastName");
