<template>
  <v-container>
    <v-row justify="center">
      <v-col md="8">
        <h2 class="title-h2" style="margin-right:  54px">
          <span class="font-weight-black right">
            <span class="font-weight-thin">MY RECENT</span>
            PROJECTS
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-width="400"
              :nudge-top="75"
              :nudge-left="400"
            >
              <template v-slot:activator="{ on }">
                <v-btn icon style=" float:right;right: -51px" v-on="on">
                  <span v-if="!menu">
                    <v-icon style>mdi-magnify</v-icon>
                  </span>
                  <span v-else>
                    <v-icon small>mdi-window-close</v-icon>
                  </span>
                </v-btn>
              </template>
              <div>
                <v-card-text s>
                  <v-autocomplete
                    :items="thumbnails.thumbnail"
                    outlined
                    dense
                    chips
                    small-chips
                    multiple
                    filled
                    label="Search for projects, libraries or techniques"
                    :clearable="true"
                    hide-details="auto"
                    single-line
                    :item-avatar="thumbnails.thumbnail"
                    @input="queryProjects"
                  ></v-autocomplete>
                </v-card-text>
              </div>
            </v-menu>
          </span>
        </h2>
        <p
          class="caption font-weight-light"
          style="padding: 0px 10px 0px 10px; margin:0; "
        >
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
            ref="carousel"
            v-bind="settings"
            class="center-text-carousel"
            @init="onInitCarousel"
            @afterChange="onNewSlide"
          >
            <div
              v-for="(project, i) in thumbnails"
              :key="i"
              class="carousel-box"
            >
              <v-img
                :key="project.id"
                class="clickable-image"
                aspect-ratio="1.5"
                :eager="true"
                :src="require('../../assets/project/' + project.thumbnail)"
                @click="slidePressed(project.id)"
              />
            </div>

            <template #prevArrow>
              <div class="custom-arrow" style="top: 40%; left: -30">
                <v-icon class="carousel-arrow">mdi-chevron-left-circle</v-icon>
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-arrow" style="top: 40%; right: -30px">
                <v-icon class="carousel-arrow">mdi-chevron-right-circle</v-icon>
              </div>
            </template>
          </VueSlickCarousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container style=" padding: 0">
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="8">
          <div class="project-box">
            <div class="pa-5" style="text-align: left !important">
              <v-img
                style="cursor: pointer;"
                aspect-ratio="4.3"
                :src="
                  require('../../assets/project/' + currentProject.thumbnail)
                "
                @click.stop="dialog = true"
              />

              <v-dialog v-model="dialog" max-width="90%" :scrollable="true">
                <v-img
                  :src="
                    require('../../assets/project/' + currentProject.thumbnail)
                  "
                />
              </v-dialog>
              <h2 class="project-title-h2" style="padding-top: 10px">
                <span class="font-weight-black right">
                  {{ currentProject.title.toUpperCase() }}</span
                >
              </h2>

              <p style="text-align: left; padding-top: 10px">
                {{ currentProject.description }}
              </p>
              <v-btn tile color="primary">Read more</v-btn>
            </div>
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
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import 'vue-slick-carousel/src/slick-theme.css';

// eslint-disable-next-line no-undef
const projectData = require('../../assets/project/projects.json');

const relativePath = '../../assets/project/';

export default {
  name: 'Portfolio',
  components: { VueSlickCarousel },
  data() {
    return {
      carouselIndex: 0,
      currentProject: '',
      thumbnails: [],
      initialThumbnails: [],
      projectData,
      menu: false,
      dialog: false,
      showCarousel: true,
      settings: {
        focusOnSelect: true,
        centerPadding: '210px',
        centerMode: true,
        touchThreshold: 1,
        slidesToShow: 3,
        dots: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              centerMode: false,
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 0,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: false,
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 0,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              initialSlide: 0,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
      }
    };
  },
  created() {
    this.currentProject = projectData[0];
    this.parseThumbnails();
    this.initialThumbnails = this.thumbnails;
  },
  updated() {
    this.settings.rows = 1;
  },
  methods: {
    queryProjects(query) {
      this.settings.slidesToShow = 4;
      this.showCarousel = false;

      if (query.length > 0) {
        const arr = [];
        const filtered = this.projectData.forEach((project, i) => {
          if (project.title.toLowerCase().includes(query.toLowerCase())) {
            arr[i] = project.id;
            return;
          }
          project.keywords.forEach(keyword => {
            if (keyword.toLowerCase().includes(query.toLowerCase())) {
              arr[i] = project.id;
              return;
            }
          });
        });

        const temp = [];
        arr.map(slot => {
          if (slot !== null) {
            this.projectData.forEach(project => {
              if (project.id === slot) {
                temp.push({
                  thumbnail: project.thumbnail,
                  id: project.id
                });
              }
            });
          }
        });
        if (temp.length !== 0) {
          this.thumbnails = temp;
          this.settings.rows = 1;

          this.slidePressed(temp[0].id);
        }
      } else {
        this.thumbnails = this.initialThumbnails;
        this.settings.rows = 1;
      }
    },
    parseThumbnails() {
      this.thumbnails = projectData.map(project => ({
        thumbnail: project.thumbnail,
        id: project.id
      }));
    },
    slidePressed(id) {
      this.currentProject = projectData.find(project => project.id === id);
    },
    carouselPressed(slideIndex) {
      this.currentProject = projectData.find(
        project => project.id === this.thumbnails[slideIndex].id
      );
    },
    showNext() {
      this.$refs.carousel.next();
    },
    onNewSlide(slideIndex) {
      this.carouselPressed(slideIndex);
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

  width: 80% !important;
  border-style: solid;
  border-color: #00000030;
  border-width: 2px;
}

.project-box {
  margin-top: 10px;
  background-color: #474747;
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

.project-title-h2 {
  color: white;
  z-index: 1 !important;
  position: relative;
}
.project-title-h2 .right {
  z-index: 1 !important;
  background-color: #474747;
  padding-right: 10px;
}
.project-title-h2 .left {
  background-color: #474747;
  padding-left: 10px;
}

.project-title-h2:after {
  background-color: #474747;
  content: '';
  position: absolute;
  bottom: 0.25em;
  left: 0;
  right: 0;
  height: 0.5em;
  border-top: 1px solid #7e7e7e;
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
