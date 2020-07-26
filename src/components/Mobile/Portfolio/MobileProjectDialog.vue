<template>
  <div>
    <div class="top-content">
      <div class="top-column top-title">
        <h2 class="title-h2">
          <span class="text-uppercase primary--text">
            <span v-html="stylingTitles(currentProject.title)" />
          </span>
        </h2>
      </div>
      <div sm="2" class="top-colum top-close-button">
        <v-btn
          icon
          class="close-button"
          @click="toggleContentDialog(), resetSlider()"
        >
          <v-icon style="color: inherit">mdi-close</v-icon>
        </v-btn>
      </div>
    </div>
    <MobileProjectContent
      ref="projectContent"
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
    resetSlider() {
      this.$refs.projectContent.resetSlider();
    },
    stylingTitles: title => {
      let words = title ? title.split(' ') : ' ';

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
        return `<span style='font-size: 8vw'> ${title} </span>`;
      }
    }
  }
};
</script>

<style scoped>
.title-h2 {
  align-self: center;
  font-size: 6.5vw;
  line-height: 1em;
  z-index: 1 !important;
  position: relative;
}

.project-description {
  text-align: left;
  padding: 20px 0 24px 0;
  height: calc(100vh - 50px);
  overflow: hidden auto;
}

.top-content {
  padding: 12px 12px 8px 12px;
  position: relative;
  z-index: 20;
  width: 100%;
  height: 68px;
  background: white;
  -webkit-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
}
.top-column {
  padding: 0;
  display: flex;
}
.top-title {
  width: 100%;
}

.top-close-button {
  line-height: 1em;
  display: flex;
  align-items: center;
  margin-left: auto;
  width: 10vw;
  height: 100%;
}
</style>
