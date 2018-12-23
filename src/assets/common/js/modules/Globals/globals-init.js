export default {
  init() {
    this.fontsLoad();
    this.setGlobals();
    this.setLazy();
    this.closeMenus();
  },

  fontsLoad() {
    const Roboto300 = new FontFaceObserver("Roboto", { weight: 300 });
    const Roboto400 = new FontFaceObserver("Roboto", { weight: 400 });
    const Roboto500 = new FontFaceObserver("Roboto", { weight: 500 });
    const Roboto600 = new FontFaceObserver("Roboto", { weight: 600 });
    const Roboto700 = new FontFaceObserver("Roboto", { weight: 700 });

    Promise.all([
      Roboto300.load(),
      Roboto400.load(),
      Roboto500.load(),
      Roboto600.load(),
      Roboto700.load()
    ]);
  },

  setGlobals() {
    window.MiPokedex = window.MiPokedex || {};
    MiPokedex.pathname = window.location.pathname;

    // Cache Elements
    MiPokedex.html = document.querySelector("html");
    MiPokedex.body = document.querySelector("body");
    MiPokedex.header = document.querySelector(".js--header");
    MiPokedex.navbar = document.querySelector(".js--navbar");
    MiPokedex.footer = document.querySelector(".js--footer");
    MiPokedex.overlay = document.querySelector(".js--overlay");

    // External Plugins
    MiPokedex.isMobile = isMobile.any;
  },

  setLazy() {
    MiPokedex.lazyload = new LazyLoad({
      data_src: "src",
      data_srcset: "srcset",
      class_loading: "is--loading",
      class_loaded: "is--loaded",
      class_error: "has--lazy-error",
      elements_selector: ".js--lazy",
      threshold: 500,
      callback_set(_this) {
        document.querySelector(_this).clasList.remove("has--lazy");
      },
      callback_load(_this) {
        document.querySelector(_this).clasList.remove("has--placeloader");
      }
    });
  },

  closeMenus() {
    MiPokedex.closeMenus = (removeOverlay = false) => {

      if (removeOverlay) {
        MiPokedex.overlay.classList.remove('is--active');
        MiPokedex.navbar.classList.remove('is--active');
        MiPokedex.body.classList.remove('has--no-scroll');
      }
    };
  }
};
