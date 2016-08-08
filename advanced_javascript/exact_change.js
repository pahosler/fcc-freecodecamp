// Exact Change
// Design a cash register drawer function checkCashRegister() that accepts
// purchase price as the first argument (price), payment as the second
// argument (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// Return the string "Insufficient Funds" if cash-in-drawer is less than the
// change due. Return the string "Closed" if cash-in-drawer is equal to the
// change due.
//
// Otherwise, return change in coin and bills, sorted in highest to lowest order.

function checkCashRegister(price, cash, cid) {
    var denomination = {};
    var change;
    var totalInDrawer = 0;
    var change = cash - price;

    function makeChange(change){
      switch (change){
        case 20-100: {
          return change ="20s";
        }
        case  10-19:{
          return change ="10s"
        }
        case  1-9:{
          return change ="1s"
        }
        case .01-.99:{
          return change = "cents";
        }
      }
      return change;
    }

    for( var currency of cid){
      totalInDrawer += (currency[currency,1]);
      denomination[currency[currency,0]] = currency[currency,1];
    }

    // javascript SUCKS at adding simple floating point numbers
    // as a result you have to use this hack to get a proper total!
    totalInDrawer = (totalInDrawer*100)/100;
    if(change > totalInDrawer){
      change = "Insufficient Funds";
      return change;
    } else if(change === totalInDrawer){
      change = "Closed";
      return change;
    }else{
      return makeChange(change);
    }
    return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log("transaction 1",checkCashRegister(19.50, 20.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
]));
console.log("transaction 2",checkCashRegister(19.50, 20.00, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])); // should return a string.
console.log("transaction 3",checkCashRegister(19.50, 20.00, [
    ["PENNY", 0.50],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])); // should return a string.
console.log("transaction 4",checkCashRegister(19.50, 20.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
])); // should return [["QUARTER", 0.50]].
console.log("transaction 5",checkCashRegister(3.26, 100.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
]));
// should return [
//     ["TWENTY", 60.00],
//     ["TEN", 20.00],
//     ["FIVE", 15.00],
//     ["ONE", 1.00],
//     ["QUARTER", 0.50],
//     ["DIME", 0.20],
//     ["PENNY", 0.04]
// ].
console.log("transaction 6",checkCashRegister(19.50, 20.00, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])); //  should return "Insufficient Funds".
console.log("transaction 7",checkCashRegister(19.50, 20.00, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1.00],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])); //  should return "Insufficient Funds".
console.log("transaction 8",checkCashRegister(19.50, 20.00, [
    ["PENNY", 0.50],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])); //  should return "Closed".
