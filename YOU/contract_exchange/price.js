/*
rows = [
        {
            "contract": "youbaoyoubao",
            "owner": "youbaoioteam",
            "connector": "eosio.token",
            "init_connector_reserve": "2000.0000 EOS",
            "init_token_supply": "10000000.0000 YOU",
            "connector_reserve": "13189.6757 EOS",
            "token_supply": "14582796.8030 YOU",
            "init_token_locked": "10000000.0000 YOU",
            "token_locked": "10000000.0000 YOU",
            "max_supply": "100000000.0000 YOU",
            "weight": 2000,
            "publish_time": 1537617600,
            "lock_up_period": 94608000,
            "price": 45,
            "user_count": 184,
            "refer_income": 10376784,
            "maintain_fee": 51728075,
            "dividend_income": 71071342,
            "dividend_pot": 937887,
            "init_buyfee_ratio": 1500,
            "buyfee_refer1_ratio": 2500,
            "buyfee_refer2_ratio": 1000,
            "init_sellfee_ratio": 3000,
            "base_fee_ratio": 50,
            "fee_threshold": "220000000000",
            "active": 1,
            "enable_log": 1,
            "auto_dividend": 0,
            "transferable": 1,
            "reserved_1": 0,
            "reserved_2": 0,
            "reserved_3": 0,
            "reserved_4": 0,
            "trx_id": "0xa9010000000000000000000000000000"
        }
    ]
*/

function getCurrentBuyPrice(rows) {
    var balance = parseFloat(rows[0].connector_reserve.split(' ')[0]);
    var supply = parseFloat(rows[0].token_supply.split(' ')[0]);
    return balance / (supply * 0.2);
}

function getCurrentSellPrice(rows) {
    var balance = parseFloat(rows[0].connector_reserve.split(' ')[0]);
    var supply = parseFloat(rows[0].token_supply.split(' ')[0]);
    return balance / (supply * 0.2);
}