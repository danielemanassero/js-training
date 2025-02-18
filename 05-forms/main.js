const formPayment = document.querySelector('#formPayment');

formPayment.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Submit form event', e);
});