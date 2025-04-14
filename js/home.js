document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = '../index.html';
})

document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('add-money-form-container').classList.remove('hidden');
})

document.getElementById('new-money-add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const pinNumber = document.getElementById('pin-input').value;
    
    if (pinNumber === "1234"){
        let currentBalance= document.getElementById('available-balance').innerText;
        let amountToAdd = document.getElementById('amount-to-add').value;
        
        let newBalance = parseFloat(currentBalance) + parseFloat(amountToAdd);
        
        document.getElementById('available-balance').innerText = newBalance;

        document.getElementById('amount-to-add').value = '';
        document.getElementById('pin-input').value = '';
    } 
    else {
        alert('Wrong pin number');
        document.getElementById('amount-to-add').value = '';
        document.getElementById('pin-input').value = '';
    }
    
})
