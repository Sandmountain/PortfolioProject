<template>
  <v-container>
    <v-row justify="center">
      <v-col md="8">
        <h2 class="title-h2">
          <span class="font-weight-black right">
            <span class="font-weight-thin">MY RECENT</span>
            PROJECTS
          </span>
        </h2>
        <p class="caption font-weight-light" style="padding: 0px 10px 0px 10px; margin:0; ">
          Down below, I've collected the projects that I'm most proud of. You
          can press on any card to get an overview of the project with images,
          code and an explanation of the project.
        </p>
      </v-col>
    </v-row>
    <v-container fluid>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="8">
          <VueSlickCarousel
            v-bind="settings"
            @init="onInitCarousel"
            @beforeChange="onNewSlide"
            ref="carousel"
            class="center-text-carousel"
          >
            <div class="carousel-box" v-for="(thumbnail, i) in thumbnails" :key="i">
              <img :src="getImage(thumbnail)" :key="thumbnail" />
            </div>
            <!-- ../../assets/project/Dotabase/thumbnail.jpg -->
            <!-- Custom arrows-->
            <template #prevArrow>
              <div class="custom-arrow" style="top: 15px; left: -30">
                <v-icon class="carousel-arrow">mdi-chevron-left-circle</v-icon>
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-arrow" style="top: 15px; right: -30px">
                <v-icon class="carousel-arrow">mdi-chevron-right-circle</v-icon>
              </div>
            </template>
          </VueSlickCarousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="8">
          <div class="project-box">
            <p>{{this.$data.carouselIndex}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-row justify="center">
      <v-col md="8">
        <h2 class="title-h2 text-right">
          <span class="font-weight-black left">
            <v-btn icon large color="primary">
              <v-icon medium>mdi-github-circle</v-icon>
            </v-btn>
          </span>
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/src/slick-theme.css";

const projectData = require("../../assets/project/projects.json");
const relativePath = "../../assets/project/";

export default {
  name: "Portfolio",
  components: { VueSlickCarousel },
  data() {
    return {
      carouselIndex: 0,
      thumbnails: [],
      settings: {
        dots: true,
        focusOnSelect: true,
        centerPadding: "50px",
        centerMode: true,
        slidesToShow: 4,
        touchThreshold: 5
      }
    };
  },
  created() {
    console.log(projectData);
    this.parseThumbnails();
  },
  methods: {
    getImage(src) {
      console.log(relativePath + `${src}`);
      return relativePath + `${src}`;
    },
    parseThumbnails() {
      this.thumbnails = projectData.map(project => {
        return project.thumbnail;
      });
      console.log(this.thumbnails);
    },
    logFromDom(str) {
      console.log(str);
    },
    showNext() {
      this.$refs.carousel.next();
    },
    onNewSlide(slideIndex) {
      console.log(slideIndex);
      this.$data.carouselIndex = slideIndex;
    },
    onInitCarousel() {}
  }
};
</script>

<style scoped>
.center-text-carousel {
  text-align: center;
  align-items: center;
}
.carousel-box {
  background-color: #474747;
  height: 75px !important;
  width: 80% !important;
}

.project-box {
  margin-top: 10px;
  background-color: #474747;
  height: 500px;
}
.project-box p {
  text-align: center;
  color: white;
}

.carousel-box:hover {
  background-color: #404040;
  cursor: pointer;
}

.thumbnail-paper {
  height: 50px;
  width: 120px;
}

.title-h2 {
  z-index: 5 !important;
  position: relative;
}
.title-h2 .right {
  z-index: 5 !important;
  background-color: white;
  padding-right: 10px;
}
.title-h2 .left {
  background-color: white;
  padding-left: 10px;
}

.title-h2:after {
  background-color: white;
  content: "";
  position: absolute;
  bottom: 0.25em;
  left: 0;
  right: 0;
  height: 0.5em;
  border-top: 1px solid black;
  z-index: -1;
}

.carousel-arrow:hover {
  color: #acacac;
}
</style>

<!--

<v-carousel height="100px" hide-delimiter-background color="primary" show-arrows-on-hover>
      <v-carousel-item style="padding: 0 13vw 13vw">
        <v-row justify="center">
          <v-col cols="12" xs="6" md="2" v-for="i in 5 " :key="i">
            <v-card class="thumbnail-paper">{{i + " side"}}</v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
      <v-carousel-item style="padding: 0 13vw 13vw">
        <v-row justify="center">
          <v-col cols="12" xs="6" md="2" v-for="i in 5 " :key="i">
            <v-card class="thumbnail-paper">{{i + " paper"}}</v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>


-->
