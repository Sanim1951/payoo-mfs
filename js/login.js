// // HomeWork: Search: form submit reloading the page

// // Step 1: set event handler
// document.getElementById('button-login')
//     .addEventListener('click',function(event){
//         // step 2: prevent default behavior (prevent reloading browser)
//         event.preventDefault(); // <------ Vejal to beginners
        

//         // step 3: get the phone number and pin number
//         const phoneNumber =document.getElementById('phone-number').value;
//         const pinNumber = document.getElementById('pin-number').value;

//         console.log(phoneNumber, pinNumber);

//         // step 4: validate phone and Pin
//         // This is temporary. We should not do like this
//         if(phoneNumber === '5' && pinNumber === '1234'){
//             console.log('You are logged in');
//             // Step 5: allow user to use the website
//         }
//         else{
//             alert('Wrong phone number or pin');
//         }

//     })

document.getElementById('button-login')
    .addEventListener('click',function(event){
        event.preventDefault();

        // Get phone number and pin
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        // console.log(phoneNumber, pinNumber);


        //  Bad way to validate
        if(phoneNumber==='5' && pinNumber==='1234'){
            console.log('You are logged in');
            window.location.href = '/home.html';
        }
        else{
            alert('Wrong phone number or pin.');
        }
    })