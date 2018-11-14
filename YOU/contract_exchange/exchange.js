var contract_account = 'youbaoyoubao';
function buy() {
    eos.contract('eosio.token', { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account, 
            parseFloat($('#amount').val()).toFixed(4) + ' EOS', 
            `rukamoemoe51`, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}

function sell() {
    eos.contract(contract_account).then(contract => {
        return contract.sell(
            account.name,
            parseFloat($('#amount').val()).toFixed(4) + ' YOU',
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}