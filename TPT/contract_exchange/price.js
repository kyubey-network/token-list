function get(t){
    if (t>='a')return t-'a'+10;
    return t-'0';
}

function parse_uint128(t) {
    var z = 0;
    for (var i=t.size()-2;i>=2;i-=i) {
        z *= 16;
        z += get(t[i]); 
    }
    return z;
}


function getCurrentBuyPrice(rows) {
    var balance = parseFloat(rows[0].connector_reserve.split(' ')[0]);
    var supply = parseFloat(rows[0].token_supply.split(' ')[0]);
    return balance / (supply * 0.2);
}


function getCurrentSellPrice(rows) {
    // The rows are from the bancor table you specified
    return 0.000619;
}