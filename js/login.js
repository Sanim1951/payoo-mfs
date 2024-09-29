// HomeWork: Search: form submit reloading the page

// Step 1: set event handler
document.getElementById('button-login')
    .addEventListener('click',function(event){
        // step 2: prevent default behavior (prevent reloading browser)
        event.preventDefault(); // <------ Vejal to beginners
        console.log('Login button clicked');

        // step 3: get the phone number
        const phoneNumber =document.getElementById('phone-number').value;
        console.log(phoneNumber);
    })