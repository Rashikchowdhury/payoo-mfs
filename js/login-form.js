// console.log("file connected");
document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const phoneNumber = document.getElementById('phone-number').value;

        const pinNumber = document.getElementById('pin-number').value;

        if (phoneNumber === '01921856093' && pinNumber === '1234') {
            window.location.href = 'home.html'
        }
        else {
            alert('Wrong phone number or password');
            document.createElement('button')
            document.getElementById('phone-number').value = '';
            document.getElementById('pin-number').value = '';
        }
    })