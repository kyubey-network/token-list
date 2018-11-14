function buy() {
    var contract_account = 'your_contract_account';
    var amount = $('#buyAmount').val();
    // You can use the variable: account, requiredFields in this script
    eos.contract('eosio.token', { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account, 
            parseFloat($('#buyAmount').val()).toFixed(4) + ' EOS', 
            ``, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}

function sell() {
    eos.contract(contract_account, { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account, 
            parseFloat($('#sellAmount').val()).toFixed(4) + ' <YOUR SYMBOL>', 
            ``, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}