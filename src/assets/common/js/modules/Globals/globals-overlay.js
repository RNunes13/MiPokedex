
export default {
  init() {
    setTimeout(() => {
      this.closeOverlay();
    }, 150);
  },

  closeOverlay() {
    MiPokedex.overlay.addEventListener('click', ev => MiPokedex.closeMenus(true));
  }
};
