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
            cols="12"
            xl="9"
            md="8"
            class="right-container"
            :class="[!isScroll ? 'navbar-padding' : '']"
          >
            <v-card class="main-content rounded-corners">
              <v-fade-transition>
                <MobilePortfolio
                  :is-bottom="isBottom"
                  :project-data="projectData"
                />
              </v-fade-transition>
            </v-card>
            <span>
              <p>Scroll up</p>
            </span>
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
      isBottom: false,
      isLandscaped: false
    };
  },
  mounted() {
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
    filterProjectData(data) {
      this.isFiltered = !this.isFiltered;
      this.projectData = data.reverse();
    },
    handleOrientationChange() {
      if (window.screen.orientation.type === 'landscape-primary') {
        this.editForSmallScreen(window.screen.height);
      } else {
        this.isLandscaped = false;
      }
    },
    changeFilterPage(i, data) {
      this.currentPage = i;
      this.filterData = data;
    },
    changePage(i) {
      this.currentPage = i;
    },
    updateNav() {
      this.currentPage = 1;
    },
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

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

.right-container {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding-bottom: 56px;
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
