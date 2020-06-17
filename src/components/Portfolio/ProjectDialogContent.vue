<template>
  <v-container>
    <h2 class="title-h2">
      <span class=" right text-uppercase primary--text">
        <span v-html="stylingTitles(currentProject.title)" />
      </span>
    </h2>

    <v-col
      class="font-weight-regular project-description"
      style="text-align: left;
      padding-top: 10px; "
    >
      <v-row>
        <v-col md="6">
          <p>
            {{ currentProject.description }}
          </p>
          <p>
            {{ currentProject.development }}
          </p>
        </v-col>
        <v-col md="6">
          <v-row align="center" justify="center">
            <v-col v-for="(image, index) in imageArray.src" :key="index" sm="2">
              <span v-if="index === activeIndex">
                <v-img
                  :src="require('../../assets/project/' + image)"
                  :alt="currentProject.title"
                  class="slideshow-image slideshow-selected-image"
                  aspect-ratio="1"
                  @click.stop="selectImage(index)"
                />
              </span>
              <span v-else>
                <v-img
                  :src="require('../../assets/project/' + image)"
                  :alt="currentProject.title"
                  class="slideshow-image"
                  aspect-ratio="1"
                  @click.stop="selectImage(index)"
                />
              </span>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-dialog
              overlay-opacity="0.9"
              v-model="fullscreenImageDialog"
              scrollable
              max-width="100%"
            >
              <v-btn
                absolute
                fab
                small
                style="top: 10px; right: 10px;"
                @click.stop="fullscreenImageDialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-img
                :src="
                  require('../../assets/project/' + imageArray.src[activeIndex])
                "
                :alt="imageArray.legend[activeIndex]"
              />
            </v-dialog>

            <v-img
              :src="
                require('../../assets/project/' + imageArray.src[activeIndex])
              "
              :alt="imageArray.legend[activeIndex]"
              @click.stop="fullscreenImageDialog = true"
            />
            <span class="pt-2 body-1 font-weight-regular text-center">{{
              imageArray.legend[activeIndex]
            }}</span>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: {
    currentProject: { type: Object, required: true }
  },
  data() {
    return {
      activeIndex: 0,
      fullscreenImageDialog: false,
      activeImage: { src: String, legend: String },
      imageArray: { legend: [], src: [] },
      imageList: { legend: [], src: [] }
    };
  },
  //Need to listen to changes in current Project
  watch: {
    currentProject: {
      immediate: true,
      handler(newValue) {
        this.imageArray = {
          legend: ['The project thumbnail', ...newValue.images.legend],
          src: [newValue.thumbnail, ...newValue.images.src]
        };
        this.activeIndex = 0;
      }
    }
  },
  created() {
    this.imageArray = {
      legend: ['Project thumbnail', ...this.currentProject.images.legend],
      src: [this.currentProject.thumbnail, ...this.currentProject.images.src]
    };
    this.activeIndex = 0;
  },
  methods: {
    selectImage: function(idx) {
      this.activeIndex = idx;
    },
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
.slideshow-image {
  border: 1px black;
}
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
