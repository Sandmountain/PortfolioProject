<template>
  <v-container fluid>
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
            <NavigatorMenu class="nav-menu" />
          </v-card>
          <v-card class="main-content rounded-corners">
            <AboutView />
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import ProfileCard from "./Profile/ProfileCard";
import AboutView from "./About/AboutView";
import NavigatorMenu from "./Navigator/NavigatorMenu";

export default {
  components: {
    ProfileCard,
    AboutView,
    NavigatorMenu
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
