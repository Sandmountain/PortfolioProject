<template>
  <span v-if="!isScroll">
    <v-bottom-navigation
      :input-value="showNav"
      color="primary"
      style="z-index: 200;"
      class="rounded-corners bottom-navigation"
      absolute
      light
      grow
      flat
    >
      <v-btn large @click="$vuetify.goTo(0)">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn large @click="$vuetify.goTo('#portfolio-id')">
        <span>Portfolio</span>
        <v-icon>mdi-brush</v-icon>
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
  </span>
  <span v-else>
    <v-bottom-navigation
      :input-value="showNav"
      style="z-index: 200;"
      color="primary"
      grow
      fixed
      light
      flat
    >
      <v-btn large @click="$vuetify.goTo(0)">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn large @click="$vuetify.goTo('#portfolio-id')">
        <span>Portfolio</span>
        <v-icon>mdi-brush</v-icon>
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
  </span>
</template>

<script>
export default {
  props: ['isScroll'],
  data() {
    return {
      showNav: false
    };
  },
  watch: {
    isScroll: function(newVal, oldVal) {
      // watch it
      if (newVal !== oldVal) this.showNav = newVal;
    }
  },
  methods: {}
};
</script>

<style scoped>
.bottom-navigation {
  overflow: hidden;
}
</style>
