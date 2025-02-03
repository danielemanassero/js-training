(async function() {

  const urlParams = new URLSearchParams(window.location.search);
  const lang = (urlParams.get('lang') !== null) ? urlParams.get('lang') : 'en';
  window.sessionStorage.setItem("lang", lang);

  import(`./locales/${lang}.json`)
      .then(translations => {
        window.sessionStorage.setItem('labels', JSON.stringify(translations));

        // Get all elements with the data-text attribute
        const elements = document.querySelectorAll('[data-text]');
        elements.forEach(element => {
          const key = element.getAttribute('data-text');
          element.innerHTML = translations[key];
        });
      })
      .catch(error => {
        console.error('Import error:', error);
      });
})();