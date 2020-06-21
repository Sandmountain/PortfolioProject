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
      padding-top: 10px;"
    >
      <v-row>
        <v-col md="6" style="padding: 0px 12px 0px 0px ">
          <p
            class="font-weight-bold text-uppercase "
            style="font-size: 10pt; letter-spacing: 2px; text-align: center; padding-top: 12px"
          >
            about the project
          </p>
          <p class="text--primary">
            {{ currentProject.description }}
          </p>
          <p class="text--primary">
            {{ currentProject.development }}
          </p>
        </v-col>

        <v-col md="6" justify="end">
          <v-row align="center" justify="space-between">
            <v-col
              v-for="(image, index) in imageArray.src"
              :key="index"
              sm="2"
              class="slideshow-image"
              style="padding: 4px 0px; max-width: 65px"
            >
              <span v-if="index === activeIndex">
                <v-img
                  :src="require('../../assets/project/' + image)"
                  :alt="currentProject.title"
                  style="cursor: pointer"
                  class="slideshow-image slideshow-selected-image"
                  aspect-ratio="1"
                  @click.stop="selectImage(index)"
                />
              </span>
              <span v-else>
                <v-img
                  style="cursor: pointer"
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
              style="cursor: pointer"
              :src="
                require('../../assets/project/' + imageArray.src[activeIndex])
              "
              :alt="imageArray.legend[activeIndex]"
              @click.stop="fullscreenImageDialog = true"
            />
            <div
              class="text-center"
              style="font-size: 10pt; margin-top: 10px; width: 80%"
            >
              <span class="font-weight-bold ">
                {{ 'Figure ' + (activeIndex + 1) + ': ' }}
              </span>
              <span class="font-weight-regular ">
                {{ imageArray.legend[activeIndex] }}</span
              >
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-row>
      <v-col md="6" class="keyword-container">
        <p
          class="font-weight-bold text-uppercase"
          style="font-size: 10pt; letter-spacing: 2px; text-align: center; margin: 0"
        >
          Keywords
        </p>
        <p style="font-size: 8pt; margin-top:3px">
          <span>
            {{ createKeywords(currentProject.keywords) }}
          </span>
        </p>
      </v-col>

      <v-col md="6">
        <span>
          <p
            class="font-weight-bold text-uppercase"
            style="font-size: 10pt; letter-spacing: 2px; text-align: center; margin: 0"
          >
            Languages used
          </p>
          <span class="language-icons">
            <span v-for="(language, i) in currentProject.languages" :key="i">
              <span v-if="language.icon !== null">
                <div class="tooltip">
                  <v-icon
                    class="tooltip-icon"
                    style="padding: 5px"
                    :class="language.icon"
                  />
                  <span
                    class="tooltiptext tooltip-bottom font-weight-black caption"
                  >
                    {{ language.name }}
                  </span>
                </div>
              </span>
              <span v-else>
                <div class="tooltip">
                  <v-img
                    class="tooltip-icon"
                    style="; height: 26px; width: 25px; margin: 3px 0px 0px 3px; "
                    :src="require('../../assets/' + language.img)"
                    :alt="language.name"
                  />
                  <span
                    class="tooltiptext tooltip-bottom font-weight-black caption"
                  >
                    {{ language.name }}
                  </span>
                </div>
              </span>
            </span>
          </span>
        </span>
      </v-col>
    </v-row>
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
    createKeywords(keywords) {
      let list = '';
      keywords.forEach((word, idx) => {
        if (idx < keywords.length - 1) {
          list += word + ', ';
        } else {
          list += word;
        }
      });
      return list;
    },
    selectImage(idx) {
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
.slideshow-selected-image {
  opacity: 50%;
}
.slideshow-image:hover {
  opacity: 70%;
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

.language-icons {
  display: flex;
  justify-content: center;
}

/* Tooltip */
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.2s;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 0.95;
  background-color: #555;
}

.tooltip-icon:hover {
  filter: opacity(0.5) drop-shadow(0 0 0 #a0a0a0);
}
</style>
