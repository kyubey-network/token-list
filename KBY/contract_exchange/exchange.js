function buy(amount) {
    var contract_account = 'dacincubator';
    // You can use the variable: account, requiredFields in this script
    eos.contract('eosio.token', { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account,
            amount.toFixed(4) + ' EOS', 
            ``, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}

function sell(amount) {
    var contract_account = 'dacincubator';
    eos.contract(contract_account, { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account, 
            amount.toFixed(4) + ' KBY', 
            ``, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}