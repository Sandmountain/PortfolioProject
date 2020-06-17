import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      options: {
        customProperties: true
      },
      light: {
        primary: '#007399',
        secondary: '#006080',
        anchor: '#8c9eff'
      },
      dark: {
        primary: '#0000FF'
      }
    }
  }
});
