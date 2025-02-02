import Internationalization from './internationalization.js';

(async function print() {
  const i = new Internationalization();

  document.querySelector('#pageTitle').innerHTML = await i.getLabel('title');
  document.querySelector('#pageSubtitle').innerHTML = await i.getLabel('subtitle');
})();