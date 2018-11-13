function buy() {
    var contract_account = 'ydappiotoken';
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
