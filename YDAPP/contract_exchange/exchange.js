function buy() {
    var contract_account = 'dacincubator';
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
