const paymentForm = document.getElementById("paymentform");
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e){
    e.preventDefault();

    let handler = payStackPop.setup({
        key:'key-paystack-refkey',//place the key generated from paystack
        email:document.getElementById('hotpeczad@gmail.com').value,//get user email address
        amount:document.getElementById('amount').value*100,
        currency: 'dollars',
        ref: ''+Math.floor((Math.random * 1000000) +1),
        onclose Function(){
            window.alert('window closed.');
            
        }
    });
   
}