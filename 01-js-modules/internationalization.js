export default class Internationalization {
  
  constructor() {
    this.lang = '';

    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');

    if (lang && lang !== null) {
      this.lang = lang;
    } else {
      this.lang = 'en';  
    }
    window.sessionStorage.setItem("lang", this.lang);

    this.translationPromise = import(`./locales/${lang}.json`)
      .then(translations => {
        window.sessionStorage.setItem('labels', JSON.stringify(translations));
      })
      .catch(error => {
        console.error('Errore di importazione traduzioni', error);
      });
  }


  async getLabel(key) {
    await this.translationPromise;
    const labels = JSON.parse(window.sessionStorage.getItem('labels'));
    return labels ? labels[key] : null;
  }
}