function golfScore(par, strokes) {
    // Only change code below this 
    // new code 2017...
    const arr = ["Eagle", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey"];
    const golf=(par,strokes)=>( strokes - par > 2 ? "Go home!"
        : strokes === 1 ? "Hole-in-one!'"
        : arr[arr.indexOf("Par") + (strokes - par)] 
    );
     return golf(par,strokes);

    // this was my previous submission just over a year ago...
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double Bogey";
    } else {
        return "Go Home!";
    }

    return "Change Me";
    // Only change code above this line
}

// Change these values to test
console.log(golfScore(5, 4)); // should return "Birdie"
console.log(golfScore(4, 1)); // should return "Hole-in-one!"
console.log(golfScore(4, 2)); // should return "Eagle"
console.log(golfScore(5, 2)); // should return "Eagle"
console.log(golfScore(4, 3)); // should return "Birdie"
console.log(golfScore(4, 4)); // should return "Par"
console.log(golfScore(1, 1)); // should return "Hole-in-one!"
console.log(golfScore(5, 5)); // should return "Par"
console.log(golfScore(4, 5)); // should return "Bogey"
console.log(golfScore(4, 6)); // should return "Double Bogey"
console.log(golfScore(4, 7)); // should return "Go Home!"
console.log(golfScore(5, 9)); // should return "Go Home!"
