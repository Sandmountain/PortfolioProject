<template>
  <div class="portfolio-container">
    <div class="top-content">
      <span v-if="$vuetify.breakpoint.smAndUp">
        <h2 class="title-h2">
          <span class="font-weight-black right">
            <span class="font-weight-light">MY PROUDEST</span>
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
          </v-container>
        </v-dialog>
      </div>
    </div>
    <div class="carousel-track">
      <v-col md="11" style="margin: 0px auto;">
        <div style="position: relative;">
          <div class="arrow-previous">
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
          <div class="arrow-next">
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
      carouselIndex: 0,
      currentProject: {},
      hooperSettings: {
        initialSlide: 0,
        pagination: true,
        centerMode: true,
        infiniteScroll: true,
        breakpoints: {
          1904: {
            itemsToShow: 5.25
          },
          1264: {
            itemsToShow: 5.25
          },
          900: {
            itemsToShow: 3.25
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
