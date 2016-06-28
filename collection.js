
// Setup
var collection = {
  "2548": {
  "album": "Slippery When Wet",
  "artist": "Bon Jovi",
             tracks: ["Let It Rock", "You Give Love a Bad Name"]},
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": ["1999","Little Red Corvette"]},
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]},
    "5439": {
      "album": "ABBA Gold"}
  };

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
// Only change code below this line
function updateRecords(id, prop, value) {
  if (! collectionCopy[id].hasOwnProperty("tracks")) {
    collection = collectionCopy[id].tracks=[];
  }
  // create an empty array for tracks if !exists before pushing a track to it
  // if tracks exists and is non-blank then push the value onto the end of
  // the existing tracks array
  if (value === "") {
    return collection = delProp(id,prop);
  }else if (prop === "artist") {
    console.log("Updating Artist to: ", value);
    return collection = addArtist(id,prop,value);
  } else if (prop === "album") {
    console.log("Updating Album to: ", value);
    return collection = addAlbum(id,prop,value);
  } else if (prop === "tracks") {
   console.log("Adding tracks: ", value);
     return collection = addTrack(id,prop,value);
  } else {

      console.log("INVALID ENTRY!!!\n\n\n");
     return collection;
  }
}
//
//                                                                                                                                                                                                     function addTrack(id,prop,value) {
//                                                                                                                                                                                                         collectionCopy[id][prop].push(value);
//
//                                                                                                                                                                                                             return collectionCopy;
//                                                                                                                                                                                                             }
//
//                                                                                                                                                                                                             function addArtist(id,prop,value) {
//                                                                                                                                                                                                                 collectionCopy[id][prop]=value;
//                                                                                                                                                                                                                     return collectionCopy;
//                                                                                                                                                                                                                     }
//
//                                                                                                                                                                                                                     function addAlbum(id,prop,value) {
//                                                                                                                                                                                                                         collectionCopy[id][prop] = value;
//                                                                                                                                                                                                                             return collectionCopy;
//                                                                                                                                                                                                                             }
//
//                                                                                                                                                                                                                             function delTracks(id,prop) {
//                                                                                                                                                                                                                                 delete collectionCopy[id][prop];
//                                                                                                                                                                                                                                     collectionCopy[id][prop]=[];
//                                                                                                                                                                                                                                         return collectionCopy;
//                                                                                                                                                                                                                                         }
//
//                                                                                                                                                                                                                                         function delProp(id,prop) {
//                                                                                                                                                                                                                                             delete collectionCopy[id][prop];
//                                                                                                                                                                                                                                                 return collectionCopy;
//                                                                                                                                                                                                                                                 }
//
//
//
//                                                                                                                                                                                                                                                 // Alter values below to test your code
//                                                                                                                                                                                                                                                 updateRecords(5439, "artist"," ");
//
//
