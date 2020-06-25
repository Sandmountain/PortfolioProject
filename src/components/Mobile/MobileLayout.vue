<template>
  <div>
    <AppBar />
    <div style="width: 100%; padding-top: 36px">
      <v-col cols="12">
        <v-row>
          <v-col cols="12" xl="3" md="4" class="left-container">
            <v-card
              class="profile-card rounded-corners"
              style="overflow: hidden; "
            >
              <MobileProfileCard id="home-id" />
            </v-card>
          </v-col>

          <v-col cols="12" :style="[isScroll ? 'padding:0px' : '']">
            <v-card class="rounded-corners">
              <BottomNavBar :is-scroll="isScroll" />
            </v-card>
          </v-col>
          <v-col
            cols="12"
            xl="9"
            md="8"
            class="right-container"
            :class="[!isScroll ? 'navbar-padding' : '']"
          >
            <v-card class="main-content rounded-corners">
              <span v-if="currentPage == 0">
                <v-fade-transition>
                  <Portfolio id="portfolio-id" />
                </v-fade-transition>
              </span>
              <span v-if="currentPage == 1">
                <Home style="height: 100%" :change-page="updateNav" />
              </span>
              <span v-if="currentPage == 3">
                <FilteredPortfolio
                  :change-page="changePage"
                  :filter-data="filterData"
                />
              </span>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>
import Home from '../About/Home';
import MobileProfileCard from './ProfileCard/MobileProfileCard';
import BottomNavBar from '../AppBar/BottomNavBar';
import Portfolio from '../Portfolio/Portfolio';
import FilteredPortfolio from '../Portfolio/FilteredPortfolio';
import AppBar from './AppBar/AppBar';

export default {
  components: {
    Home,
    Portfolio,
    MobileProfileCard,
    FilteredPortfolio,
    BottomNavBar,
    AppBar
  },
  data() {
    return {
      currentPage: 0,
      filterData: null,
      isScroll: false
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    changeFilterPage(i, data) {
      this.currentPage = i;
      this.filterData = data;
      console.log(data);
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

        if (window.pageYOffset === 0) {
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
