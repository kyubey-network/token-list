
function buy() {
    var contract_account = 'happyeosslot';
    var amount = parseFloat($('#amount').val());
    // You can use the variable: account, requiredFields in this script
    eos.contract('eosio.token', { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account, 
            $('#amount').toFixed(4) + ' EOS', 
            ``, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}

function sell() {
    var contract_account = 'happyeosslot';
    var amount = parseFloat($('#amount').val());
    eos.contract(contract_account, { requiredFields }).then(contract => {
        return contract.transfer(
            account.name, 
            contract_account, 
            $('#amount').toFixed(4) + ' HPY', 
            ``, 
            { 
                authorization: [`${account.name}@${account.authority}`] 
            });
    })
}