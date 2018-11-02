function getCurrentBuyPrice(rows) {
    var stake = rows[0].stake;
    var eos = 1;
    //eval('var eos = ' + rows[0].eos);
    return 0.000268; // parseFloat(stake / eos).toFixed(4);
}

function getCurrentSellPrice(rows) {
    var stake = rows[0].stake;
    var eos = 1;
    //eval('var eos = ' + rows[0].eos);
    return 0.000268; // parseFloat(stake / eos).toFixed(4);
}