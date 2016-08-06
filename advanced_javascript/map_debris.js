// Map the Debris
// Return a new array that transforms the element's average altitude into their
// orbital periods.
//
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//
// You can read about orbital periods on wikipedia.
//
// The values should be rounded to the nearest whole number. The body being
// orbited is Earth.
//
// The radius of the earth is 6367.4447 kilometers, and the GM value of
// earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    spaceJunk = [...arr];
    for(var i = 0; i<spaceJunk.length;++i){
      var avgAlt = spaceJunk[i].avgAlt;
      var op = Math.round(2*Math.PI*(Math.sqrt(Math.pow(earthRadius+spaceJunk[i].avgAlt,3)/GM)));
      spaceJunk[i].orbitalPeriod=op;
      delete spaceJunk[i].avgAlt;
    }
    for(var i =0;i<spaceJunk.length;++i){

    }
    console.log(spaceJunk);
    return arr;
}

orbitalPeriod([{
    name: "sputnik",
    avgAlt: 35873.5553
}]);
orbitalPeriod([{
    name: "iss",
    avgAlt: 413.6
}, {
    name: "hubble",
    avgAlt: 556.7
}, {
    name: "moon",
    avgAlt: 378632.553
}]);

// should return [{name : "iss", orbitalPeriod: 5557},
//                {name: "hubble", orbitalPeriod: 5734},
//                {name: "moon", orbitalPeriod: 2377399}].
