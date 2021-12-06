<template>
  <div style="width: 90%">
    <v-col cols="12">
      <v-row align="center">
        <v-col cols="12" xl="3" lg="3" md="4" class="left-container">
          <v-card
            class="profile-card rounded-corners"
            style="overflow: hidden; "
          >
            <ProfileCard />
          </v-card>
        </v-col>
        <v-spacer></v-spacer>

        <v-col cols="12" xl="9" lg="9" md="8" class="right-container">
          <v-card class="rounded-corners ">
            <NavigatorMenu
              class="nav-menu"
              :page="currentPage"
              :change-page="changePage"
              :change-filter-page="changeFilterPage"
            />
          </v-card>
          <v-card class="main-content rounded-corners">
            <span v-if="currentPage == 0">
              <v-fade-transition>
                <Home style="height: 100%" :change-page="updateNav" />
              </v-fade-transition>
            </span>
            <span v-if="currentPage == 1">
              <Portfolio />
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
</template>

<script>
import ProfileCard from './Profile/ProfileCard';
import Home from './Home/Home';
import NavigatorMenu from './Navigator/NavigatorMenu';
import Portfolio from './Portfolio/Portfolio';
import FilteredPortfolio from './Portfolio/FilteredPortfolio';

export default {
  components: {
    ProfileCard,
    Home,
    Portfolio,
    NavigatorMenu,
    FilteredPortfolio
  },
  data() {
    return {
      currentPage: 0,
      filterData: null
    };
  },
  methods: {
    changeFilterPage(i, data) {
      this.currentPage = i;
      this.filterData = data;
    },
    changePage(i) {
      this.currentPage = i;
    },
    updateNav() {
      this.currentPage = 1;
    }
  }
};
</script>

<style scoped>
.left-container {
  display: flex;
  align-self: stretch;
}

.right-container {
  display: flex;
  flex-direction: column;

  align-self: stretch;
}
.content-container {
  height: 100%;
}
.profile-card {
  height: 100%;
  width: 100%;
}
.main-content {
  height: 575px;
  width: 100%;
  margin-top: 25px;
  overflow: hidden;
}
@media screen and (max-width: 959px) {
  .nav-menu {
    display: none;
  }
  .main-content {
    margin-top: 0;
    height: 100%;
  }
}
@media screen and (min-width: 1900px) {
  .main-content {
    height: 60vh;
  }
}
</style>
