// Add Money to the account
/*
step-1: add event handler
Prevent page reload after the form submit
step-2: get money to be added to the account balance
*/



// Step 1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // Prevent page reload after the form submit
    event.preventDefault();
    // Step-2: get money to be added to the account balance
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // Get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // Step-3: verify pin number
    // Wrong way to validate pin number
    if(pinNumberInput ==='1234'){
        console.log('adding money to your account');

        // Step 4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // Step-5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // Step-6: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to add money! Please try again.');
    }
})