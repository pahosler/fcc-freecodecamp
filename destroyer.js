function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments, 1);
    console.log(args);
    console.log(arr);



    return arr;
}

destroyer([1,2,3,1,2,3],2,3);