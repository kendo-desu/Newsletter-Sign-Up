const form = document.getElementById('form');
const email = document.getElementById('email');
const mainCard = document.getElementById('main-card');
const successCard = document.getElementById('success-card');
const dismissButton = document.getElementById('dismiss');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');
    checkInput();
});

dismissButton.addEventListener('click', (e) => {
    e.preventDefault();
    dismissSuccess();
});

function checkInput() {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        console.log('email empty')
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Valid email required');
    } else {
        showSuccess(emailValue);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function showSuccess(email) {
    const span = document.getElementById('valid-mail');
    
    span.innerText = email;
    successCard.style.display = 'initial';
    mainCard.style.display = 'none';
}

function dismissSuccess() {
    location.reload();
}

function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}