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
    var change = cash - price;
    var drawer = {
        total: 0
    };
    var currency = [];
    var denomination = [{
        name: 'ONE HUNDRED',
        value: 100.00
    }, {
        name: 'TWENTY',
        value: 20.00
    }, {
        name: 'TEN',
        value: 10.00
    }, {
        name: 'FIVE',
        value: 5.00
    }, {
        name: 'ONE',
        value: 1.00
    }, {
        name: 'QUARTER',
        value: 0.25
    }, {
        name: 'DIME',
        value: 0.10
    }, {
        name: 'NICKLE',
        value: 0.05
    }, {
        name: 'PENNY',
        value: 0.01
    }];

    function setDrawer(cid) {
        cid.reduce((prev, curr) => {
            drawer[curr[0]] = curr[1];
            drawer.total += curr[1];
            // currency.push(curr[1]);
            return cid;
        }, []);
        drawer.total = (drawer.total*100)/100;
    }

    function makeChange(change) {
        var toCustomer = denomination.reduce((prev, curr) => {
            var val = 0;
            // check drawer for currency amt and denomination
            while (drawer[curr.name] > 0 && change >= curr.value) {
                change -= curr.value;
                drawer[curr.name] -= curr.value;
                val += curr.value;
                change = Math.round(change * 100) / 100;
            }
            if (val > 0) {
                prev.push([curr.name, val]);
            }
            return prev;
        }, []);

        if (toCustomer.length <1 || change >0){
          return "Insufficient Funds";
        }
        return toCustomer;

    }


    setDrawer(cid);

    if (change > drawer.total) {
        change = "Insufficient Funds";
        return change;
    } else if (change === drawer.total) {
        change = "Closed";
        return change;
    } else {
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

console.log("transaction 1", checkCashRegister(19.50, 20.00, [
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
console.log("transaction 2", checkCashRegister(19.50, 20.00, [
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
console.log("transaction 3", checkCashRegister(19.50, 20.00, [
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
console.log("transaction 4", checkCashRegister(19.50, 20.00, [
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
console.log("transaction 5", checkCashRegister(3.26, 100.00, [
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
console.log("transaction 6", checkCashRegister(19.50, 20.00, [
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
console.log("transaction 7", checkCashRegister(19.50, 20.00, [
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
console.log("transaction 8", checkCashRegister(19.50, 20.00, [
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
