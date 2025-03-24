/***************
 * SLIDER Amount
 **************/
const formPayment = document.querySelector('#formPayment');
const amount = document.querySelector('#amount');
const amountOutput = document.querySelector('#amountVal');

amountOutput.textContent = amount.value;

amount.addEventListener('input', (e) => {
  amountOutput.textContent = e.target.value;
});

formPayment.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Submit form event', e);
});


const email = document.querySelector('#usermail');
const emailError = document.querySelector('#usermail + span.error');

email.addEventListener('input', (e) => {
  console.log('Input email validity', email.validity);
  
  /** SOLUZIONE 1 */
  // if (email.validity.typeMismatch) {
  //   email.setCustomValidity("Inserisci un indirizzo email valido");
  // }
  // else {
  //   email.setCustomValidity('');
  // }

  /** SOLUZIONE 2 */
  // Validate with the built-in constraints
  // email.setCustomValidity("");
  // if (!email.validity.valid) {
  //   return;
  // }
 
   // Extend with a custom constraints
  //  if (!email.value.endsWith("@example.com")) {
  //    email.setCustomValidity("Inserisci un indirizzo email che finisca con @example.com");
  //  }

  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
    e.preventDefault();
  }
});


form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});


function showError() {
  if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Add the `active` class
  emailError.className = "error active";
}