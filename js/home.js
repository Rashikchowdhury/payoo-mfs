document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.href = 'login-form.html';
})

document.getElementById('add-money-btn').addEventListener('click', function () {
    document.getElementById('add-money-form-container').classList.remove('hidden');
    document.getElementById('cashout-form-container').classList.add('hidden')
})

document.getElementById('new-money-add-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = document.getElementById('pin-input').value;

    if (pinNumber === "1234") {
        let currentBalance = document.getElementById('available-balance').innerText;
        let amountToAdd = document.getElementById('amount-to-add').value;

        let newBalance = parseFloat(currentBalance) + parseFloat(amountToAdd);

        document.getElementById('available-balance').innerText = newBalance;

        document.getElementById('amount-to-add').value = '';
        document.getElementById('pin-input').value = '';
    }
    else {
        alert('Wrong pin number!\n Faild to add money');
        document.getElementById('amount-to-add').value = '';
        document.getElementById('pin-input').value = '';
    }

})

// cashout features 

document.getElementById('cashout-btn').addEventListener('click', function () {
    document.getElementById('cashout-form-container').classList.remove('hidden');
    document.getElementById('add-money-form-container').classList.add('hidden');
});

document.getElementById('form-cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = document.getElementById('cashout-pin-input').value;

    let currentBalance = document.getElementById('available-balance').innerText;
    let cashoutAmount = document.getElementById('cashout-amount').value;

    if (pinNumber === "1234" && cashoutAmount < currentBalance && cashoutAmount > 0) {
        let newBalance = parseFloat(currentBalance) - parseFloat(cashoutAmount);

        document.getElementById('available-balance').innerText = newBalance;

        document.getElementById('cashout-amount').value = '';
        document.getElementById('cashout-pin-input').value = '';
    }
    else {
        alert('Wrong pin number!\n Faild to withdraw money');
        document.getElementById('cashout-amount').value = '';
        document.getElementById('cashout-pin-input').value = '';
    }

})