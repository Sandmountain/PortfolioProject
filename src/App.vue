<template>
  <v-app>
    <div class="backgroundImage" />
    <AppBar class="hidden-md-and-up" />
    <v-container fill-height>
      <Layout />
      <BottomNavBar class="hidden-md-and-up" />
    </v-container>
  </v-app>
</template>

<script>
import BottomNavBar from "./components/AppBar/BottomNavBar";
import Layout from "./components/Layout.vue";
import AppBar from "./components/AppBar/AppBar";
export default {
  name: "App",

  components: {
    Layout,
    BottomNavBar,
    AppBar
  },

  data: () => ({
    //
  })
};
</script>
<style>
.rounded-corners {
  border-radius: 15px !important;
  overflow: hidden;

  box-shadow: 2px 2px 5px #5f686b, -2px -2px 5px #818c91;
}

.v-autocomplete__content {
  z-index: 11 !important;
}
.v-dialog__content--active {
  overflow-y: hidden !important;
}

body::-webkit-scrollbar {
  display: none;
}

.v-parallax__image {
  top: -450px;
}

.backgroundImage {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(112, 122, 126);
  background: radial-gradient(
    circle,
    rgba(112, 122, 126, 1) 65%,
    rgba(103, 111, 113, 1) 100%
  );
  background-size: cover;
}
.backgroundColor {
  background: linear-gradient(145deg, #767676, #8c8c8c);
}
@media screen and (max-width: 962px) {
  .backgroundImage {
  }
}

/*
.backgroundImage {
  height: 100%;
  opacity: 0.8;
  background-image: url(./assets/photos/banner_mid_large.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
*/
</style>
