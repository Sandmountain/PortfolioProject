<template>
  <div class="portfolio-container">
    <div class="top-content">
      <span v-if="$vuetify.breakpoint.smAndUp">
        <h2 class="title-h2">
          <span class="font-weight-black right">
            <span class="font-weight-light">MY RECENT</span>
            <span class="primary--text"> PROJECTS</span>
          </span>
        </h2>
        <p
          class="body-2 font-weight-regular"
          style="padding: 5px 0px; margin: 0;"
        >
          In the carousel below, I've collected the projects that I'm most proud
          of. You can click on any image to get a description about the project.
          Also options to read more, show demo or screencast.
        </p>
        <v-spacer />
      </span>
      <span v-else>
        <span class="font-weight-black primary--text headline">
          <span class="font-weight-light black--text">MY RECENT</span>
          PROJECTS
        </span>
        <p class="caption font-weight-regular" style="margin: 0;">
          Down below, I've collected the projects that I'm most proud of. You
          can press on any card to get an overview of the project with images,
          code and an explanation of the project.
        </p>
      </span>
      <div class="pb-0 pt-0 text-right">
        <v-icon
          :color="projectView === 'carousel' ? 'primary' : null"
          @click="changeView('carousel')"
          >mdi-view-carousel</v-icon
        >
        <v-icon
          :color="projectView === 'grid' ? 'primary' : null"
          @click.stop="gridView = true"
          @click="changeView('grid')"
          >mdi-view-module</v-icon
        >
        <v-dialog
          v-model="gridView"
          style="width: 100%; background: white;"
          @input="onModalClose"
        >
          <v-container style="padding: 12px 24px 12px 24px">
            <span v-if="$vuetify.breakpoint.mdAndUp">
              <v-row align="center" justify="center">
                <v-col v-for="(project, i) in thumbnails" :key="i" md="3">
                  <v-card>
                    <v-img
                      :key="project.id"
                      aspect-ratio="1.8"
                      style="cursor: pointer;"
                      :src="
                        require('../../assets/project/' + project.thumbnail)
                      "
                      @click="gridItemPressed(i)"
                      @click.stop="
                        gridView = false;
                        projectView = 'carousel';
                      "
                    />
                  </v-card>
                </v-col>
              </v-row>
            </span>
            <span v-else>
              <p class="font-weight-thin black--text text-center">
                Select a project
              </p>
              <v-row v-for="(project, i) in thumbnails" :key="i" sm="6">
                <v-col class="hidden-xs-and-up">
                  <v-card>
                    <v-img
                      :key="project.id"
                      aspect-ratio="2.5"
                      style="cursor: pointer;"
                      :src="
                        require('../../assets/project/' + project.thumbnail)
                      "
                      @click="gridItemPressed(i)"
                      @click.stop="
                        gridView = false;
                        projectView = 'carousel';
                      "
                    />
                  </v-card>
                </v-col>
              </v-row>
            </span>
          </v-container>
        </v-dialog>
      </div>
    </div>
    <div class="carousel-track">
      <v-col md="11" style="margin: 0px auto;">
        <div style="position: relative;">
          <div class="arrow-previous hidden-sm-and-down">
            <v-btn
              icon
              small
              color="white"
              style="background: #474747;"
              @click.prevent="slidePrev"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </div>
          <div class="arrow-next hidden-sm-and-down">
            <v-btn
              icon
              small
              color="white"
              style="background: #474747;"
              @click.prevent="slideNext"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>
        <Hooper
          ref="carousel"
          :settings="hooperSettings"
          class="scroll-thumbnail"
          style="height: 100px;"
          @slide="updateCarousel"
        >
          <Slide
            v-for="(project, i) in thumbnails"
            :key="i"
            class="carousel-box"
          >
            <v-img
              :key="project.id"
              style="width: 100%; height: 100%;"
              class="carousel-thumbnail"
              :src="require('../../assets/project/' + project.thumbnail)"
              @click="slidePressed(i)"
            />
          </Slide>
        </Hooper>
      </v-col>
    </div>
    <div class="project-content">
      <ProjectContent
        :current-project="currentProject"
        :next-project="slideNext"
        :prev-project="slidePrev"
      />
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

import ProjectContent from './ProjectContent';

// eslint-disable-next-line no-undef
let projectData = require('../../assets/project/projects.json');

/*const relativePath = '../../assets/project/';*/

export default {
  name: 'Portfolio',
  components: {
    Hooper,
    Slide,
    ProjectContent
  },
  data() {
    return {
      projectView: 'carousel',
      styledObject: {},
      carouselData: 0,
      carouselIndex: 0,
      currentProject: {},
      hooperSettings: {
        initialSlide: 0,
        pagination: true,
        centerMode: true,
        infiniteScroll: true,
        breakpoints: {
          900: {
            itemsToShow: 5.25
          },
          600: {
            itemsToShow: 2.25
          },
          300: {
            itemsToShow: 2.25
          }
        }
      },
      thumbnails: [],
      initialThumbnails: [],
      projectData,
      gridView: false,
      showCarousel: true
    };
  },
  created() {
    projectData = projectData.reverse();
    this.currentProject = projectData[0];

    this.parseThumbnails();
    this.initialThumbnails = this.thumbnails;

    // gets the height of the 2 tops other divs in the project container
  },

  updated() {},
  methods: {
    openNewTab(url) {
      window.open(url, '_blank');
    },
    changeView(view) {
      this.projectView = view;
    },
    onModalClose() {
      this.projectView = 'carousel';
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    gridItemPressed(id) {
      this.$refs.carousel.slideTo(id);
    },
    slidePressed(id) {
      // Creating seemless transition between first/last item. This could probably be rewritten witha switch/case

      // When pressing the last/next to last item in the carousel from start
      if (this.$refs.carousel.currentSlide < 2 && id > 2) {
        if (id === this.projectData.length - 1) {
          this.$refs.carousel.slideTo(-1);
        } else {
          this.$refs.carousel.slideTo(-2);
        }
        // When pressing the first items, from the the last slides
      } else if (
        this.$refs.carousel.currentSlide > this.projectData.length - 3 &&
        id < 2
      ) {
        if (id === 0) {
          this.$refs.carousel.slideTo(this.projectData.length);
        } else {
          this.$refs.carousel.slideTo(this.projectData.length + 1);
        }
      } else {
        this.$refs.carousel.slideTo(id);
      }
    },
    // Use a set (to only have one instance of each project)
    queryProjects(query) {
      this.settings.slidesToShow = 4;
      this.showCarousel = false;

      if (query.length > 0) {
        const arr = [];
        //Disabled because of eslint
        /*const filtered = this.projectData.forEach((project, i) => {
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
        */
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
        // this.settings.rows = 1;
      }

      // projectData.title;
      //console.log(this.thumbnails);
    },
    updateCarousel() {
      switch (this.$refs.carousel.currentSlide) {
        case -1:
          this.currentProject = this.projectData[this.projectData.length - 1];
          break;
        case -2:
          this.currentProject = this.projectData[this.projectData.length - 2];
          break;
        case this.projectData.length:
          this.currentProject = this.projectData[0];
          break;
        case this.projectData.length + 1:
          this.currentProject = this.projectData[1];
          break;
        default:
          this.currentProject = this.projectData[
            this.$refs.carousel.currentSlide
          ];
          break;
      }
    },
    parseThumbnails() {
      /* this.thumbnails = projectData.map(project => {
        return project.thumbnail;
      });
      */
      this.thumbnails = projectData.map(project => ({
        thumbnail: project.thumbnail,
        id: project.id
      }));
    }
  }
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
  -webkit-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
}

.carousel-box {
  background-color: #474747;
  border-style: solid;
  border-color: #00000030;
  border-width: 1px;
}

.project-content {
  padding: 0px 12px;
  margin-bottom: 10px;
  height: 100%;
  margin: 0px;
  -webkit-box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
}

.hooper-slide.is-current {
  background: #007399;
}
.carousel-box:hover {
  background-color: #ffffff;
  cursor: pointer;
}
.scroll-thumbnail {
  border-color: #474747;
  border-width: 2px;
  background: #474747;
  box-shadow: 0px 0px 0px 2px #474747;
}
.carousel-track {
  width: 100%;
  background: #d1d1d1;
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

.arrow-next {
  position: absolute;
  left: 100%;
  margin: 36px 1vw;
}
.arrow-previous {
  position: absolute;
  right: 100%;
  margin: 36px 1vw;
}

/* Responsive layout */
@media screen and (max-width: 1904px) {
  .arrow-next {
    margin: 38px 0.5vw;
  }
  .arrow-previous {
    margin: 38px 0.5vw;
  }
}
@media screen and (max-width: 1264px) {
  .arrow-next {
    margin: 40px 0.5vw;
  }
  .arrow-previous {
    margin: 40px 0.5vw;
  }
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

<!--- Main

  <v-container fill-height style="padding: 0">
    <div class="title-container">
      <v-col md="12">

      </v-col>


    </div>
    <div class="carousel-track">
      <v-col md="11" style="margin: 0px auto; ">
        <div style="position: relative;">
          <div class="arrow-previous hidden-sm-and-down">
            <v-btn
              icon
              small
              color="white"
              style="background:#474747 "
              @click.prevent="slidePrev"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </div>
          <div class="arrow-next hidden-sm-and-down">
            <v-btn
              icon
              small
              color="white"
              style="background:#474747 "
              @click.prevent="slideNext"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>
        <hooper
          ref="carousel"
          :settings="hooperSettings"
          class="scroll-thumbnail"
          style="height: 100px; "
          @slide="updateCarousel"
        >
          <slide
            v-for="(project, i) in thumbnails"
            :key="i"
            class="carousel-box"
          >
            <v-img
              :key="project.id"
              style="width: 100%; height: 100%;  "
              class="carousel-thumbnail"
              :src="require('../../assets/project/' + project.thumbnail)"
              @click="slidePressed(i)"
            />
          </slide>
        </hooper>
      </v-col>
    </div>
    <v-container class="project-box">
      <span v-if="$vuetify.breakpoint.smAndUp">
        <v-row no-gutters class="project-row">
          <v-col md="6" sm="12" no-gutters>
            <h2 class="project-title-h2">
              <span class="font-weight-black right">{{
                currentProject.title.toUpperCase()
              }}</span>
            </h2>

            <p
              class="body-2 font-weight-light"
              style="text-align: left; padding-top: 10px"
            >
              {{ currentProject.description }}
            </p>
          </v-col>
          <v-col md="6" sm="12" no-gutters>
            <v-img
              style="cursor: pointer;"
              aspect-ratio="4.8"
              :src="require('../../assets/project/' + currentProject.thumbnail)"
              @click.stop="dialog = true"
            />

            <v-dialog v-model="dialog" max-width="100%" :scrollable="true">
              <v-img
                :src="
                  require('../../assets/project/' + currentProject.thumbnail)
                "
              />
            </v-dialog>
            <div style="text-align: center">
              <span v-for="(language, i) in currentProject.keywords" :key="i">
                <span class="caption">{{ language + ", " }}</span>
               BYT UT MOT ICONER HÄR
              </span>
            </div>
          </v-col>
        </v-row>
      </span>
      <span v-else>
        <v-row no-gutters class="project-row">
          <v-col style="padding: 15px" md="6" sm="12" no-gutters>
            <span class="font-weight-black right">{{
              currentProject.title.toUpperCase()
            }}</span>

            <p style="text-align: left; padding-top: 10px">
              {{ currentProject.description }}
            </p>
            <v-btn tile color="primary">Read more</v-btn>
          </v-col>
        </v-row>
      </span>
    </v-container>
    <div
      style="position: relative;
     "
    >
      <div style="position: absolute; right:0; bottom:0">
        <v-btn tile color="primary">Read more</v-btn>
      </div>
    </div>
  </v-container>
-->

<!-- Show Icons (fixa så att ikoner fungerar) byt ut alla så att de passar in
                <span v-if="language.icon !== null">
                <v-tooltip bottom style="padding: 5px 10px !important">
                  <template v-slot:activator="{ on }">
                    <v-icon style="padding: 5px" v-on="on" :class="language.icon" />
                  </template>
                  <span class="caption">{{language.name}}</span>
                </v-tooltip>
              </span>
              <span v-else>
                <v-img
                  style="; position: absolute"
                  :src="require('../../assets/' +  language.img)"
                />
                </span>-->
