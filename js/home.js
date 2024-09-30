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
})