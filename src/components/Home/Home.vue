<template>
  <v-row style=" padding: 8px 20px 8px 20px;" justify="center" align="center">
    <v-col md="10">
      <span class="subtitle-1 font-weight-light sub-text" style="margin: 0;"
        >Hello! I am</span
      >
      <p
        class="display-3 font-weight-black neu-text name-text"
        style="line-height: 90%; margin: 0;"
      >
        VIKTOR SANDBERG
      </p>
      <p class="subtitle-2 font-weight-medium primary--text sub-text">
        Creative developer with a big passion for Design and UX.
      </p>

      <p style="font-size: 10pt; text-align: left; margin-top: 2vw;">
        My name is Viktor Sandberg, a creative full stack developer who is
        <i>very</i>
        intrested in web development and UX. Here, I'm proud to present to you
        my very own portfolio homepage. The purpose of this page is of course a
        way for me to show you my previous work and projects, but also a way for
        me to get even more practice of doing what that I love. To see all my
        project, click the button below.
      </p>
      <v-btn color="primary" small tile outlined @click="updatePage()"
        >Show Portfolio</v-btn
      >
    </v-col>
  </v-row>

  <!--- mobile --->
</template>
<script>
// import AppBar from "../AppBar/AppBar";

export default {
  components: {
    // AppBar
  },

  props: {
    changePage: { type: Function }
  },
  methods: {
    updatePage() {
      this.changePage(1);
    }
  }
};
</script>
<style>
/* Needed in global scope to have padding between slides in the carousel */
.slick-slide {
  padding: 0 3px;
}
.middle-paragraph {
  text-align: center;
  min-width: 60%;
}
@media screen and (max-width: 959px) {
  .sub-text {
    font-size: 0.8rem !important;
  }
  .name-text {
    font-size: 3.5rem !important;
  }
  .middle-paragraph {
    min-width: 100%;
    padding: 0 50px 0 50px;
  }
}
</style>
