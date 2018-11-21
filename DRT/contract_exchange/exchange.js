function buy() {
    var contract_account = null;
    var amount = $('#buyAmount').val();
    // You can use the variable: account, requiredFields in this script
    eos.contract('eosio.token', { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account, 
            parseFloat($('#buyAmount').val()).toFixed(4) + ' EOS', 
            `buy`, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}

function sell() {
    var contract_account = null;
    eos.contract(contract_account, { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account, 
            parseFloat($('#sellAmount').val()).toFixed(4) + ' DRT', 
            `sell`, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}