<template>
  <div>
    <div class="top-content">
      <h2 class="title-h2">
        <span class=" right text-uppercase primary--text">
          <span v-html="stylingTitles(currentProject.title)" />
        </span>
      </h2>
    </div>
    <div class="font-weight-regular project-description">
      <div class="thumbnail-banner">
        <v-img
          class="parallax-image"
          style="height: 120px; "
          :src="require(`../../assets/project/${currentProject.banner}`)"
        >
          <div class="project-short-description ">
            <p class="overline padded-section padded-short-description-text ">
              {{ currentProject.shortDescription }}
            </p>
          </div>
          <!--  :src="require('../../assets/project/' + currentProject.thumbnail)" -->
        </v-img>
      </div>
      <v-row style="margin: 0;  display: flex; justify-content: center">
        <v-col style="align-content: center; padding: 0px">
          <div class="description-container ">
            <div
              class="meta-text padded-section"
              style="display:flex; flex-direction: row; justify-content:space-between; width: 100%; padding-bottom: 12px"
            >
              <div style="display: flex; flex-direction: column">
                <span class="overline">Title: {{ currentProject.title }}</span>

                <span class="overline "
                  ><v-icon x-small>mdi-clock</v-icon
                  >{{ ' ' + timeToRead() }} min read article</span
                >
              </div>
              <div
                style="display: flex; flex-direction: column; text-align: right"
              >
                <span class="overline">Project size</span>
                <span class="overline">{{ projectSize() }}</span>
              </div>
            </div>

            <p
              class="font-weight-bold text-uppercase primary--text mt-4"
              style="font-size: 10pt; letter-spacing: 2px; text-align: center; "
            >
              about the project
            </p>

            <p class="text--primary padded-section mb-4 ">
              {{ currentProject.description }}
            </p>
          </div>
          <div class="swiper-container">
            <Swiper
              ref="swiperComponent"
              class="swiper"
              style="height: 30vh"
              :options="swiperOption"
              @slideChange="changeSwiperIndex"
            >
              <SwiperSlide
                v-for="(image, index) in imageArray.src"
                :key="index"
                class="swiper-slide-desktop"
                ><v-card
                  style="height: 100%; cursor: pointer; "
                  @click="
                    selectImage(index);
                    showFullScreenImage = true;
                  "
                >
                  <v-img
                    :src="require('../../assets/project/' + image)"
                    :alt="currentProject.title"
                    class="clickable-image slideshow-image"
                  />
                </v-card>
              </SwiperSlide>
              <div
                slot="pagination"
                class="swiper-pagination"
                style="top: -5px"
              ></div>
            </Swiper>
            <div class="text-center padded-section legend-text">
              <span class="font-weight-bold ">
                {{ 'Figure ' + (activeIndex + 1) + ': ' }}
              </span>
              <span class="font-weight-regular ">
                {{ imageArray.legend[activeIndex] }}</span
              >
            </div>
          </div>
          <div class="development-container">
            <p
              class="font-weight-bold text-uppercase primary--text"
              style="font-size: 10pt; letter-spacing: 2px; text-align: center; "
            >
              The Development
            </p>
            <p class="text--primar padded-section">
              {{ currentProject.development }}
            </p>
            <p style="font-size: 10pt;" class="padded-section mt-5">
              <b>Project Keywords</b>:
              {{ createKeywords(currentProject.keywords) }}
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
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
    <v-dialog
      v-model="showFullScreenImage"
      :content-class="
        imageArray.size[activeIndex] === 'wide'
          ? 'desktop-project-image-fullscreen-dialog-wide'
          : 'desktop-project-image-fullscreen-dialog-square'
      "
    >
      <v-img
        :contain="true"
        :src="require('../../assets/project/' + activeImage)"
        :alt="currentProject.title"
        class="slideshow-dialog-image"
        style="cursor: pointer; height: 100%"
        @click="showFullScreenImage = false"
      />
    </v-dialog>
  </div>
</template>

<script>
import VueYoutube from 'vue-youtube';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    currentProject: { type: Object, required: true }
  },
  data() {
    return {
      showVideo: false,
      activeIndex: 0,
      fullscreenImageDialog: false,
      activeImage: { src: String },
      showFullScreenImage: false,
      imageArray: { legend: [], src: [] },
      imageList: { legend: [], src: [] },
      swiperOption: {
        slidesPerView: 2.1,
        spaceBetween: 12,
        centeredSlides: true,
        slideToClickedSlide: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
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
          legend: newValue.images.legend,
          src: newValue.images.src,
          size: newValue.images.size
        };
        this.activeIndex = 0;
        if (this.$refs.swiperComponent) {
          this.$refs.swiperComponent.$swiper.slideTo(0);
        }
      }
    }
  },
  created() {
    this.imageArray = {
      legend: this.currentProject.images.legend,
      src: this.currentProject.images.src,
      size: this.currentProject.images.size
    };
    this.activeIndex = 0;
    this.activeImage = this.imageArray.src[0];
  },
  methods: {
    timeToRead() {
      //Mediums formula for amount of time to read
      return (
        Math.round(
          ((this.currentProject.description.split(' ').filter(function(n) {
            return n != '';
          }).length +
            this.currentProject.development.split(' ').filter(function(n) {
              return n != '';
            }).length) /
            240 +
            (this.currentProject.images.legend.length * 12) / 60) *
            2
        ) / 2
      );
    },
    projectSize() {
      switch (this.currentProject.projectSize) {
        case 'S':
          return 'Small';
        case 'M':
          return 'Medium';
        case 'L':
          return 'Large';
        default:
          break;
      }
    },
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
    changeSwiperIndex() {
      this.activeIndex = this.$refs.swiperComponent.$swiper.activeIndex;
    },
    selectImage(idx) {
      this.activeImage = this.imageArray.src[idx];
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
.padded-section {
  max-width: 66.666667%;
  margin: 0 auto;
}
.v-image__image {
  background-attachment: fixed;
}

.center-line {
  display: flex;
  justify-content: center;
}
.project-description {
  text-align: left;
  padding: 0;
  height: 69vh;
  overflow: auto;
}

.slideshow-selected-image {
  opacity: 50%;
}

.slideshow-container {
  height: 35vh;
  cursor: pointer;
}

.slideshow-image {
  height: 100%;
}

.legend-text {
  font-size: 10pt;
  position: relative;
  top: 12px;
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
  position: relative;
  padding: 12px 12px 8px 12px;
  z-index: 4;
  width: 100%;

  -webkit-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
}
.thumbnail-banner {
  width: 100%;
}
.swiper-container {
  padding: 26px 0 3px 0;
  margin: 0;
  margin-top: -15px;
  background: #d1d1d1;
}
.project-short-description {
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
}
.padded-short-description-text {
  color: rgb(160, 160, 160);
  width: 66.6667%;
}
.bottom-content {
  position: relative;
  bottom: 0;
  width: 100%;
  margin: 0px;
  z-index: 2;
  -webkit-box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
}
.swiper-pagination {
  z-index: 0;
}
</style>
