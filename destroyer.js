function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments, 1);
    console.log(args);
    console.log(arr);
    for(var i=0; i<args.length; ++i){
        arr=arr.filter(function valDrop(value,index,array) {
            if(value===args[i]){
                return false;
            }else {
                return true;
            }
        });
    console.log(arr);


    }
    return arr;
}

destroyer([1,2,3,1,2,3],2,3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], "diorite", "andesite", "grass", "dirt", "dead shrub");
destroyer([1, "calf", 3, "piglet"], 1, "calf", 3, 4);