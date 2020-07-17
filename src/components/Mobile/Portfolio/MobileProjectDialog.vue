<template>
  <div>
    <div class="top-content">
      <h2 class="title-h2">
        <span class="text-uppercase primary--text">
          <span v-html="stylingTitles(currentProject.title)" />
        </span>
      </h2>
      <v-btn icon class="close-button" @click="toggleContentDialog()">
        <v-icon style="color: inherit">mdi-close</v-icon>
      </v-btn>
    </div>
    <MobileProjectContent
      :current-project="currentProject"
      class="project-description"
    />
  </div>
</template>

<script>
import MobileProjectContent from './MobileProjectContent';

export default {
  components: {
    MobileProjectContent
  },
  props: {
    currentProject: { type: Object, required: true },
    toggleContentDialog: { type: Function, required: true }
  },
  data() {
    return {};
  },

  methods: {
    closeContentDialog() {},
    stylingTitles: title => {
      let words = title.split(' ');

      if (words.length !== 1) {
        return (
          '<span class="font-weight-light">' +
          words
            .map((word, index) => {
              if (index !== words.length - 1) return word + ' ';
            })
            .join('') +
          '</span><span class="font-weight-black ">' +
          words[words.length - 1] +
          '</span>'
        );
      } else {
        return title;
      }
    }
  }
};
</script>

<style scoped>
.title-h2 {
  font-size: 2em;
  font-size: 7vw;
  z-index: 1 !important;
  position: relative;
}

.project-description {
  text-align: left;
  padding: 20px 12px 12px 12px;
  height: calc(100vh - 50px);

  overflow: auto;
}
.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 20;
}
.top-content {
  padding: 12px 12px 8px 12px;

  width: 100%;
  height: 68px;
  background: white;
  -webkit-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
}
</style>
