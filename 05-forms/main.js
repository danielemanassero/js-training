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