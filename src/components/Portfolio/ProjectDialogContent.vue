<template>
  <div>
    <div class="top-content">
      <h2 class="title-h2">
        <span class=" right text-uppercase primary--text">
          <span v-html="stylingTitles(currentProject.title)" />
        </span>
      </h2>
    </div>
    <v-col class="font-weight-regular project-description">
      <v-row
        :style="ifSmallScreen($vuetify.breakpoint.mdAndDown)"
        style="padding: 12px"
      >
        <v-col
          sm="12"
          md="12"
          lg="6"
          style="align-self: center; padding: 0px 12px 0px 0px"
        >
          <p
            class="font-weight-bold text-uppercase primary--text"
            style="font-size: 10pt; letter-spacing: 2px; text-align: center; "
          >
            about the project
          </p>

          <p class="text--primary">
            {{ currentProject.description }}
          </p>
          <p class="text--primary">
            {{ currentProject.development }}
          </p>
          <p style="font-size: 10pt">
            <b>Project Keywords</b>:
            {{ createKeywords(currentProject.keywords) }}
          </p>
        </v-col>

        <v-col sm="12" md="12" lg="6" justify="end">
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
              v-model="fullscreenImageDialog"
              overlay-opacity="0.9"
              scrollable
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
    <v-row class="bottom-content">
      <v-col md="5.5">
        <span>
          <p
            class="font-weight-bold text-uppercase primary--text"
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
      <v-col md="1" class="center-line">
        <v-divider vertical />
      </v-col>
      <v-col md="5.5" class="keyword-container" align="center">
        <p
          class="font-weight-bold text-uppercase primary--text"
          style="font-size: 10pt; letter-spacing: 2px; text-align: center; margin: 0"
        >
          Resources
        </p>
        <span v-if="currentProject.githubUrl !== null" class="tooltip">
          <span class="font-weight-black left">
            <v-btn icon @click="openNewTab(currentProject.githubUrl)">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </span>
          <span class="tooltiptext tooltip-bottom font-weight-black caption">
            Github Repo
          </span>
        </span>
        <span v-if="currentProject.screencast !== null" class="tooltip">
          <v-btn icon @click.stop="showVideo = true">
            <v-icon>mdi-youtube</v-icon>
          </v-btn>
          <span class="tooltiptext tooltip-bottom font-weight-black caption">
            Play Screencast
          </span>
          <v-dialog v-model="showVideo" width="80%" :scrollable="true">
            <youtube
              ref="youtube"
              :video-id="getYoutubeID(currentProject.screencast)"
              :resize="true"
            ></youtube>
          </v-dialog>
        </span>
        <span v-if="currentProject.demoUrl !== null" class="tooltip">
          <v-btn icon @click.stop="openNewTab(currentProject.demoUrl)">
            <v-icon>mdi-web</v-icon>
          </v-btn>
          <span class="tooltiptext tooltip-bottom font-weight-black caption">
            Project Demo
          </span>
        </span>
        <span v-if="currentProject.report !== null" class="tooltip">
          <v-btn icon @click.prevent="openNewTab(currentProject.report)">
            <v-icon>mdi-file-document</v-icon>
          </v-btn>
          <span class="tooltiptext tooltip-bottom font-weight-black caption">
            Project Report
          </span>
        </span>
        <span v-if="currentProject.courseUrl !== null" class="tooltip">
          <v-btn icon @click.stop="openNewTab(currentProject.courseUrl)">
            <v-icon>mdi-school</v-icon>
          </v-btn>
          <span class="tooltiptext tooltip-bottom font-weight-black caption">
            Course Website
          </span>
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VueYoutube from 'vue-youtube';
import axios from 'axios';
import pdf from 'vue-pdf';

export default {
  props: {
    currentProject: { type: Object, required: true }
  },

  data() {
    return {
      showVideo: false,
      activeIndex: 0,
      fullscreenImageDialog: false,
      activeImage: { src: String, legend: String },
      imageArray: { legend: [], src: [] },
      imageList: { legend: [], src: [] }
    };
  },
  //Need to listen to changes in current Project
  watch: {
    showVideo: {
      handler: function(val) {
        if (!val) {
          this.pauseVideo();
        }
      }
    },
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
    getYoutubeID(url) {
      return this.$youtube.getIdFromUrl(url);
    },
    pauseVideo() {
      this.$refs.youtube.player.pauseVideo();
    },
    openNewTab(url) {
      window.open(url, '_blank');
    },
    createKeywords(keywords) {
      let list = '';
      keywords.forEach((word, idx) => {
        if (idx < keywords.length - 1) {
          list += word + ', ';
        } else {
          list += word + '.';
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
    },
    ifSmallScreen: check => {
      if (check) return 'flex-direction: column-reverse';
    }
  }
};
</script>

<style scoped>
.center-line {
  display: flex;
  justify-content: center;
}
.project-description {
  text-align: left;
  padding: 12px;
  height: 55vh;
  overflow: auto;
}

.slideshow-selected-image {
  opacity: 50%;
}
.slideshow-image:hover {
  opacity: 70%;
}
.title-h2 {
  font-size: 2rem;
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
  bottom: 115%;
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

.top-content {
  padding: 12px 12px 8px 12px;
  z-index: 2;
  width: 100%;

  -webkit-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
}

.bottom-content {
  /*display: flex;
  align-items: center;
  justify-content: center;
  */
  position: relative;
  bottom: 0;

  width: 100%;
  margin: 0px;
  -webkit-box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
}
</style>
