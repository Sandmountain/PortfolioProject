<template>
  <v-container>
    <v-col cols="12">
      <v-row align="center">
        <v-col cols="12" xl="3" md="4">
          <v-card class="profile-card rounded-corners" style="overflow: hidden">
            <ProfileCard />
          </v-card>
        </v-col>
        <v-spacer></v-spacer>

        <v-col cols="12" xl="9" md="8">
          <v-card class="rounded-corners">
            <NavigatorMenu
              class="nav-menu"
              :page="currentPage"
              :change-page="changePage"
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
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import ProfileCard from './Profile/ProfileCard';
import Home from './About/Home';
import NavigatorMenu from './Navigator/NavigatorMenu';
import Portfolio from './Portfolio/Portfolio';

export default {
  components: {
    ProfileCard,
    Home,
    Portfolio,
    NavigatorMenu
  },
  data() {
    return {
      currentPage: 0
    };
  },
  methods: {
    changePage(i) {
      this.currentPage = i;
      //console.log(this.currentPage);
    },
    updateNav() {
      this.currentPage = 1;
      //console.log(this.currentPage);
    }
  }
};
</script>

<style scoped>
.profile-card {
  height: 650px;
  width: 100%;
}
.main-content {
  height: 575px;
  width: 100%;
  margin-top: 25px;
  overflow: hidden;
}
@media screen and (max-width: 959px) {
  .profile-card {
    height: auto;
  }
  .nav-menu {
    display: none;
  }
  .main-content {
    margin-top: 0;
    height: 100%;
  }
}
</style>
