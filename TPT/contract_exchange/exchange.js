function buy() {
    var contract_account = 'tokendapppub';
    var amount = parseFloat($('#amount').val());
    // You can use the variable: account, requiredFields in this script
    eos.contract('eosio.token', { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account, 
            $('#amount').toFixed(4) + ' EOS', 
            `TPT-referrer:rukamoemoe51`, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}

function sell() {
    var contract_account = 'tokendapppub';
    var amount = parseFloat($('#amount').val());
    eos.contract(contract_account, { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account, 
            $('#amount').toFixed(4) + ' TPT', 
            ``, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}