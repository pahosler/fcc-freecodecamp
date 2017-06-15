function scramble(str1, str2) {
 var test = true;
 var obj1 = new Object;
 var obj2 = new Object;
 str1.split('').map(function(obj){
    if (obj1[obj] === undefined) {
        obj1[obj]=1;
    }else {
        ++obj1[obj];
    }
 });
 str2.split('').map(function(obj){
     if(obj2[obj] === undefined) {
         obj2[obj]=1;
     } else {
         ++obj2[obj];
     }
 });
 for (var key in obj2) {
    if( obj1[key] !== undefined ) {
        if(obj1[key] >= obj2[key] && test !== false) {
            test = true;
        } else {
            test = false;
        }
    }else {
        test = false;
    }
 }
    return test;
 //console.log(obj1.hasOwnProperty('l'));
 //str1 = str1.split('');
 // str2.split('').reduce((prev,curr)=>{
 //   test = (str1.indexOf(curr) === -1) ? false : true;
 //   if (test) {
 //   str1.splice(str1.indexOf(curr),1);
 // } else {
 //   str1=[];
 // }
 //  },[]);
 //  return test
}

console.log(scramble('rkdqolw','world'));
console.log(scramble('popopsodkpor','world'));
console.log(scramble('pinthisexamplewecreateavariablecalledkey','apple'));
console.log(scramble('tpircsavaj','javascripted'));
console.log(scramble('alskdjfhufhpuejvnejvnevneruvhpuvfnmnioueroievfhldkjvldksjfvlkjsdfhlkjerhlgkjhdflkgjhsdlkjfgheirughperuihkjdcvnlkjdfhglkdjfghlkdjfghlkdsjfhvglkjsdfhgeioprugheopmzxcvgajksghajksgheuyfjkzxhvzxnbvzerwruifyoaisduhlkjsadhflkjasdhlkjhlfkjhaslkjdhfberkjhkljsdfhlksjdhfqywyweriuyewriutyweoirudlkjfghlsdkjfxcmbvxzmxncbvhjalsdkfaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiirrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllllllllllllllllllllluuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxccccccccccccccccccccccccccccccccccccccccccccccccccnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvqqqqqqqqqqqqqqqqqqqqqqqhdfhsksjiweuiwuewi','gadget'));
