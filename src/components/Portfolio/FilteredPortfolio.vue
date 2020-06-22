<template>
  <div class="portfolio-container">
    <div class="top-content">
      <span v-if="$vuetify.breakpoint.smAndUp">
        <h2 class="title-h2">
          <span class="font-weight-black right">
            <span class="font-weight-light">FILTERED</span>
            <span class="primary--text"> PROJECTS</span>
          </span>
        </h2>
        <p
          class="body-2 font-weight-regular"
          style="padding: 5px 0px; margin: 0;"
        >
          Your search for {{ this.query }} resulted in:
        </p>
        <v-spacer />
      </span>
      <span v-else>
        <span class="font-weight-black primary--text headline">
          <span class="font-weight-light black--text">FILTERED </span>
          PROJECTS
        </span>
        <p class="caption font-weight-regular" style="margin: 0;">
          Your search for
        </p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  components: {},
  data() {
    return {};
  },
  created() {},

  methods: {}
};
</script>

<style scoped>
.portfolio-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.top-content {
  padding: 12px 12px 0px 12px;
  z-index: 2;
  width: 100%;
}

/* Horizontal lines titles */
.title-h2 {
  font-size: 1.6rem;
  z-index: 1 !important;
  position: relative;
}
.title-h2 .right {
  z-index: 1 !important;
  background-color: white;
  padding-right: 10px;
}
.title-h2 .left {
  background-color: white;
  padding-left: 10px;
}
.title-h2:after {
  background-color: white;
  content: '';
  position: absolute;
  bottom: 0.25em;
  left: 0;
  right: 0;
  height: 0.5em;
  border-top: 1px solid black;
  z-index: -1;
}
</style>
