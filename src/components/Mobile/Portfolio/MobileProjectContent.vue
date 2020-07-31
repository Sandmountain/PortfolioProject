<template>
  <div class="font-weight-regular project-description">
    <v-row class="thumbnail-image-container">
      <v-img
        :src="require('../../../assets/project/' + currentProject.thumbnail)"
      >
      </v-img>
    </v-row>
    <div class="project-meta-container">
      <div class="meta-text">
        <span class="overline ">Project size: {{ projectSize() }}</span>
        <span class="overline "
          ><v-icon x-small>mdi-clock</v-icon>{{ ' ' + timeToRead() }} min
          read</span
        >
      </div>
      <div class="resources">
        <span v-if="currentProject.githubUrl !== null">
          <span class="font-weight-black left">
            <v-btn
              color="primary"
              icon
              @click="openNewTab(currentProject.githubUrl)"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </span>
        </span>
        <span v-if="currentProject.screencast !== null">
          <v-btn color="primary" icon @click.stop="showVideo = true">
            <v-icon>mdi-youtube</v-icon>
          </v-btn>

          <v-dialog
            v-model="showVideo"
            content-class="mobile__video-dialog"
            width="80%"
            :scrollable="true"
          >
            <youtube
              ref="youtube"
              :video-id="getYoutubeID(currentProject.screencast)"
              :resize="true"
            ></youtube>
          </v-dialog>
        </span>
        <span v-if="currentProject.demoUrl !== null">
          <!-- TODO: Fixa en popup om de leder till ny sida -->
          <v-btn
            icon
            color="primary"
            @click.stop="openNewTab(currentProject.demoUrl)"
          >
            <v-icon>mdi-web</v-icon>
          </v-btn>
        </span>
        <span v-if="currentProject.report !== null">
          <v-btn
            icon
            color="primary"
            @click.prevent="openNewTab(currentProject.report)"
          >
            <v-icon>mdi-file-document</v-icon>
          </v-btn>
        </span>
        <span v-if="currentProject.courseUrl !== null">
          <v-btn
            icon
            color="primary"
            @click.stop="openNewTab(currentProject.courseUrl)"
          >
            <v-icon>mdi-school</v-icon>
          </v-btn>
        </span>
      </div>
    </div>
    <div class="padded-section description-container">
      <p
        class="font-weight-bold text-uppercase primary--text "
        style="font-size: 10pt; letter-spacing: 2px; text-align: center; margin-bottom: 24px; padding-top: 12px "
      >
        about the project
      </p>

      <p class="text--primary ">
        {{ currentProject.description }}
      </p>

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
                    :src="require('../../../assets/' + language.img)"
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
    </div>
    <v-col class="carousel-container">
      <Swiper
        ref="swiperComponent"
        class="swiper"
        :options="swiperOption"
        @click.native="handleSwiperDOMClick"
        @slideChange="changeSwiperIndex"
      >
        <SwiperSlide v-for="(image, index) in imageArray.src" :key="index"
          ><v-card style="overflow:hidden" class="carousel-image-card">
            <v-btn class="fullscreen-icon" icon @click="selectImage(index)">
              <v-icon small>mdi-fullscreen</v-icon>
            </v-btn>

            <v-img
              :src="require('../../../assets/project/' + image)"
              :alt="currentProject.title"
              class="slideshow-image"
            /> </v-card
        ></SwiperSlide>
        <div slot="pagination" class="swiper-pagination"></div>
      </Swiper>

      <div class="text-center padded-section" style="font-size: 10pt;  ">
        <span class="font-weight-bold ">
          {{ 'Figure ' + (activeIndex + 1) + ': ' }}
        </span>
        <span class="font-weight-regular ">
          {{ imageArray.legend[activeIndex] }}</span
        >
      </div>
    </v-col>

    <div class="development-container">
      <p class="font-weight-bold text-uppercase primary--text title-text">
        The Development
      </p>

      <p class="text--primary ma-0 padded-section">
        {{ currentProject.development }}
      </p>
    </div>
    <div class="padded-section keyword-container">
      <p style="font-size: 10pt">
        <b>Project Keywords</b>:
        {{ createKeywords(currentProject.keywords) }}
      </p>
    </div>
    <v-dialog
      v-model="fullscreenImageDialog"
      content-class="project-image-fullscreen-dialog"
      overlay-opacity="0.9"
    >
      <v-img
        :src="
          require('../../../assets/project/' + imageArray.src[clickedImageIdx])
        "
        :alt="imageArray.legend[clickedImageIdx]"
      />
    </v-dialog>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
//import 'swiper/swiper-bundle.css';
import 'swiper/css/swiper.css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {
    currentProject: { type: Object, required: true }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1.2,
        spaceBetween: 12,
        centeredSlides: true,
        slideToClickedSlide: true,
        onSlideChangeEnd: () => {
          this.onSwipe();
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      clickedImageIdx: 0,
      activeIndex: 0,
      showVideo: false,
      fullscreenImageDialog: false,
      activeImage: { src: String, legend: String },
      imageArray: { legend: [], src: [] },
      imageList: { legend: [], src: [] }
    };
  },
  watch: {
    showVideo: {
      handler: function(val) {
        if (!val) {
          this.pauseVideo();
        }
      }
    },
    currentProject: {
      handler() {
        this.imageArray = {
          legend: this.currentProject.images.legend,
          src: this.currentProject.images.src
        };
        this.activeIndex = 0;
      }
    }
  },
  created() {
    this.imageArray = {
      legend: this.currentProject.images.legend,
      src: this.currentProject.images.src
    };
    this.activeIndex = 0;
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
            (this.imageArray.legend.length * 12) / 60) *
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
    changeSwiperIndex() {
      this.activeIndex = this.$refs.swiperComponent.$swiper.activeIndex;
    },
    /* Fix for image slider not resetting to first slide when new window opens */
    resetSlider() {
      setTimeout(() => {
        this.$refs.swiperComponent.$swiper.slideTo(0);
      }, 120);
    },
    handleSwiperDOMClick() {
      this.clickedImageIdx = this.$refs.swiperComponent.swiperInstance.activeIndex;
      this.fullscreenImageDialog = true;
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
    selectImage(idx) {
      console.log(idx);
      this.activeIndex = idx;
    }
  }
};
</script>

<style>
.center-line {
  display: flex;
  justify-content: center;
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

.fullscreen-icon {
  height: 20px !important;
  width: 20px !important;
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 1;
  background: white;
  border-radius: 50% !important;
  padding: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.thumbnail-image-container {
  margin-top: -20px;
  position: relative;
  z-index: 5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}
.project-meta-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  position: relative;
  z-index: 4;
  background: white;
}
.project-meta-container .meta-text {
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  color: #474747;
}
.project-meta-container .resources {
  display: flex;
  flex-direction: row;
}
.description-container {
  position: relative;
  z-index: 1;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
}
.carousel-container {
  padding: 12px 0 0 0;
  margin: 0;
  background: #d1d1d1;
}
.development-container {
  padding-top: 12px;
  position: relative;
  z-index: 1;
  background: white;
  box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.2);
}
.keyword-container {
  position: relative;
  background: white;
  z-index: 5;
}

.title-text {
  font-size: 10pt;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 12px;
}
/* Padding section to have the slider take upp full width */
.padded-section {
  padding: 0 12px;
}
.padded-section:last-of-type {
  padding-bottom: 24px;
}

/* Carousel Styling */
.swiper-slide {
  height: 200px;
}
.swiper-container {
  padding: 20px 0;
}
.carousel-image-card {
  height: 100%;
}
.slideshow-image {
  height: 100%;
}

.swiper-pagination-bullet-active {
  background: #007399;
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  top: -7px;

  text-align: center;
}
</style>
