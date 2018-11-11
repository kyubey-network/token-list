function getCurrentBuyPrice(rows) {
    var supply = parseFloat(rows[0].supply.split(' ')[0]);
    return (supply  * 1e-10);
}

function getCurrentSellPrice(rows) {
    var supply = parseFloat(rows[0].supply.split(' ')[0]);
      return (supply * 1e-10);
}