document.getElementById('form').addEventListener('submit', function(eve){
    eve.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (name === '') {
        alert('Name is required');
        return;
    }

    if (email === '') {
        alert('Email is required');
        return;
    }

    if (password === '') {
        alert('Password is required');
        return;
    }
    alert('Form submitted successfully!');
})