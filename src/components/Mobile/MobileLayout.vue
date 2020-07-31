<template>
  <div>
    <!--<AppBar id="app-bar-position" style="opacity: 50" />-->
    <MobileAppBar :is-scroll="isScroll" />
    <div
      id="top-position"
      style="
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 200
     "
    ></div>

    <div style="width: 100%; padding-top: 0px">
      <v-col cols="12" style=" padding-top: 0px">
        <v-row>
          <v-col cols="12" style="height: 100vh; padding: 0px">
            <span v-if="!isLandscaped">
              <LandingPage id="home-id" :is-scroll="isScroll" />
            </span>
            <span v-else>
              <LandscapeLandingPage id="home-id" :is-scroll="isScroll" />
            </span>
          </v-col>

          <v-col
            id="portfolio-id"
            class="portfolio-container-layout"
            :class="[!isScroll ? 'navbar-padding' : '']"
          >
            <v-card class="main-content rounded-corners">
              <v-fade-transition>
                <MobilePortfolio
                  :is-bottom="isBottom"
                  :is-filtered="isFiltered"
                  :filter-query="filterQuery"
                  :project-data="projectData"
                />
              </v-fade-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import LandingPage from './LandingPage/LandingPage';
import LandscapeLandingPage from './LandingPage/LandscapeLandingPage';

import MobilePortfolio from './Portfolio/MobilePorfolio';
import MobileAppBar from './AppBar/MobileAppBar';

// eslint-disable-next-line no-undef
let data = require('../../assets/project/projects.json');

export default {
  components: {
    MobilePortfolio,
    MobileAppBar,
    LandscapeLandingPage,
    LandingPage
  },
  data() {
    return {
      projectData: {},
      isScroll: false,
      isFiltered: false,
      filterQuery: '',
      isBottom: false,
      isLandscaped: false
    };
  },
  created() {
    this.scroll();
    this.projectData = data.reverse();

    if (window.screen.orientation.type === 'landscape-primary') {
      this.editForSmallScreen(window.screen.height);
    }
    window.addEventListener('orientationchange', this.handleOrientationChange);
  },
  methods: {
    editForSmallScreen(height) {
      if (height < 450) {
        this.isLandscaped = true;
      }
    },
    resetFilter() {
      if (this.isFiltered) {
        console.log('reset');
      }
    },
    filterProjectData(inData = data, query = '') {
      this.isFiltered = !this.isFiltered;

      if (query === '') {
        this.filterQuery = '';
        this.$children[0].resetQuery();
      } else {
        this.filterQuery = query;
      }

      this.projectData = inData;
    },
    handleOrientationChange() {
      if (window.screen.orientation.type === 'landscape-primary') {
        this.editForSmallScreen(window.screen.height);
      } else {
        this.isLandscaped = false;
      }
    },
    scroll() {
      window.onscroll = () => {
        if (window.pageYOffset <= 0) {
          this.isScroll = false;
        } else {
          this.isScroll = true;
        }
      };
    }
  }
};
</script>

<style scoped>
.left-container {
  display: flex;
  align-self: stretch;
  padding-bottom: 0;
}

.navbar-padding {
  padding-top: 56px;
  width: 100%;
}

.portfolio-container-layout {
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
}
.content-container {
  height: 100%;
}

.main-content {
  height: 575px;
  width: 100%;
  margin-top: 25px;
  overflow: hidden;
}
.profile-card {
  height: auto;
  width: 100%;
}

.main-content {
  margin-top: 0;
  height: 100%;
}
</style>
