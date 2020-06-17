<template>
  <v-bottom-navigation
    :input-value="showNav"
    style="z-index: 200"
    light
    flat
    fixed
  >
    <v-btn large>
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn large>
      <span>Portfolio</span>
      <v-icon>mdi-pencil-ruler</v-icon>
    </v-btn>

    <v-btn large>
      <span>Resume</span>
      <v-icon>mdi-file-account</v-icon>
    </v-btn>

    <v-btn large>
      <span>Contact Me</span>
      <v-icon>mdi-email</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    };
  },

  methods: {
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        if (window.pageYOffset == 0 || bottomOfWindow) {
          this.showNav = false;
        } else {
          this.showNav = true;
        }
      };
    }
  },
  mounted() {
    this.scroll();
  }
};
</script>

<style></style>
