const form = document.forms.myForm;
const userNameInput = form.elements.name;
const emailInput = form.elements.email;
const agreeTermsCheckbox = form.elements.agree;

const userNameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const termsError = document.getElementById('agreeError');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  let hasError = false;

  
  userNameError.style.display = 'none';
  emailError.style.display = 'none';
  termsError.style.display = 'none';

  if (userNameInput.value === '') {
    userNameError.textContent = 'Введите имя пользователя.';
    userNameError.style.display = 'block';
    hasError = true;
  }

  if (validateEmail(emailInput.value) === false) {
    emailError.textContent = 'Введите корректный email.';
    emailError.style.display = 'block';
    hasError = true;
  }

  if (agreeTermsCheckbox.checked === false) {
    termsError.textContent = 'Необходимо согласие с условиями.';
    termsError.style.display = 'block';
    hasError = true;
  }

  if (hasError === false) {
    alert('Форма успешно отправлена!');
  }
});

function validateEmail(email) {
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

document.getElementById('agree').addEventListener('change', function() {
   
    let submitBtn = document.getElementById('submitBtn');
    let agreeTermsCheckbox = document.getElementById('agree');
  
   
    submitBtn.disabled = !agreeTermsCheckbox.checked;
  });


  const input = document.forms.myForm.elements.input;

input.addEventListener('focus', function () {
  input.style.border = '1px solid #00ff00'; 
});

const input = document.getElementById('myInput');

input.addEventListener('blur', function () {
  input.style.border = ''; 
});
