
import CacheSelectors from './__cache-selectors';

const El = CacheSelectors.header;

export default {
  init() {
    this.buttonMenuOnClick();
  },

  buttonMenuOnClick() {
    El.menuButton.addEventListener('click', (ev) => {
      MiPokedex.overlay.classList.add('is--active');
      MiPokedex.navbar.classList.add('is--active');
      MiPokedex.body.classList.add('has--no-scroll');
    });
  }
};
