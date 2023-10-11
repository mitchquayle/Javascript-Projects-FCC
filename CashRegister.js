let money = {
    'ONE HUNDRED': 100000,
    'TWENTY': 2000,
    'TEN': 1000,
    'FIVE': 500,
    'ONE': 100,
    'QUARTER': 25,
    'DIME': 10,
    'NICKEL': 5,
    'PENNY': 1,
}

function checkCashRegister(price, cash, cid) {
    let owedChange = cash * 100 - price * 100;
    console.log(owedChange);
    let cashDrawerCount = 0;

    // Calculate total change in drawer
    for (let element of cid) {
        cashDrawerCount += element[1];
    }
    let totalCashDrawer = cashDrawerCount * 100;

    if (owedChange == totalCashDrawer) {
        return {status: "CLOSED", change: cid}
    } else if (owedChange > totalCashDrawer) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
        let finalChange = [];
        cid = cid.reverse();

        for (let [value, amount] of cid) {
            let currency = [value, 0];
            amount = amount * 100; // Convert values to cents
            while (owedChange >= money[value] && amount > 0) {
                owedChange -= money[value];
                amount -= money[value];
                currency[1] += money[value] / 100;
            }

            if (currency[1] > 0) {
                finalChange.push(currency)
            }
        }

        if (owedChange == 0) {
            return {status: "OPEN", change: finalChange};
        } else {
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
    }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);