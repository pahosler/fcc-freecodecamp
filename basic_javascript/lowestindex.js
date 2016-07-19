function getIndexToIns(arr,num) {
    // Find my place in this sorted array
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < arr.length; ++i){
        if (num < arr[i]) {
            console.log("splice into array " + arr);
            arr.splice(i, 0, num);
            return arr.indexOf(num);
        } else {
            if (i == arr.length-1) {
                arr.push(num);
                console.log("pushed to array " + arr);
                return arr.indexOf(num);
            }
        }
    }

    return num;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10,20,30,40,50], 35));
console.log(getIndexToIns([3,10,5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 5, 10], 15));