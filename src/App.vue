<template>
  <v-app>
    <!-- <div class="background-fill-secondary" /> -->
    <div class="backgroundImage" />
    <!-- <div class="background-fill" /> -->
    <div class="background-image-cropped" />
    <AppBar class="hidden-md-and-up" />
    <div class="main-body-container">
      <Layout />
      <BottomNavBar class="hidden-md-and-up" />
    </div>
  </v-app>
</template>

<script>
import BottomNavBar from './components/AppBar/BottomNavBar';
import Layout from './components/Layout.vue';
import AppBar from './components/AppBar/AppBar';

export default {
  name: 'App',

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
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #474747;
}

.rounded-corners {
  border-radius: 15px !important;
  box-shadow: 2px 2px 5px #5f686b, -2px -2px 5px #818c91,
    inset 0px 0px 1px 0px #474747;
}
.main-body-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.backgroundImage {
  position: fixed;
  width: 100%;
  height: 100%;

  background: radial-gradient(
    circle,
    rgba(102, 110, 114, 0.9) 65%,
    rgba(103, 111, 113, 1) 100%
  );
  background-size: cover;

  /* Elipse background
  clip-path: ellipse(50% 10% at 50% 35%);
  transform: scale(1.1);
  */
}

.background-image-cropped {
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(./assets/photos/bild5_test.png);
  opacity: 0.2;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

/* For elipse background */
.background-fill {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #5f686b;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}
/* For elipse background */
.background-fill-secondary {
  position: absolute;
  background-size: cover;
  background: rgb(90, 100, 100);
  width: 100%;
  height: 100%;
}
/*

*/
.backgroundColor {
  background: linear-gradient(145deg, #767676, #8c8c8c);
}

/* CSS overrides */
.v-dialog--active {
  background: rgba(255, 255, 255, 1) !important;
  width: 60%;
}

.hooper-slide {
  padding: 2px !important;
}
.hooper:focus {
  border: 1px solid rgb(34, 58, 65);
}

/* When having clones of the projects, this is needed cus
the clones are not scoped within that vue file*/
.carousel-box:hover {
  background-color: #ffffff;
  cursor: pointer;
}

.v-application ol,
.v-application ul {
  padding-left: 0 !important;
}
.hooper-navigation.is-vertical .hooper-next,
.hooper-navigation.is-vertical .hooper-prev {
  padding: 0;
  left: -5px;
}

.v-slide-group__wrapper {
  border-radius: 15px;
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

/* END CSS OVERRIDES */
</style>
