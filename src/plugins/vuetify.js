import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#FF0000",
        secondary: "#00FF00",
        anchor: "#8c9eff"
      },
      dark: {
        primary: "#0000FF"
      }
    }
  }
});
