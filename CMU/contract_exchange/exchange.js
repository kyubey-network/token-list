function buy() {
    var contract_account = 'your_contract_account';
    var amount = $('#amount').val();
    // You can use the variable: account, requiredFields in this script
    eos.contract('eosio.token', { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account, 
            $('#amount').val().toFixed(4) + ' EOS', 
            `buy`, 
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
            $('#amount').val().toFixed(4) + ' CMU', 
            `sell`, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}