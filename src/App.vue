<template>
  <v-app id="main-app">
    <div class="background-gradient " />
    <div class="background-image-cropped" />

    <MobileLayout
      v-if="isMobile() || $vuetify.breakpoint.smAndDown"
      style="height: 100%"
      class="mobile-body-container"
    />

    <div v-else style="height: 100%" class="main-body-container">
      <Layout />
    </div>
  </v-app>
</template>

<script>
import Layout from './components/Layout.vue';
import MobileLayout from './components/Mobile/MobileLayout';
import { isMobileOnly } from 'mobile-device-detect';

export default {
  name: 'App',
  components: {
    Layout,
    MobileLayout
  },

  data: () => ({
    //
  }),

  methods: {
    isMobile() {
      return isMobileOnly;
    }
  }
};
</script>
<style>
/* Custom dialogs */
.project-image-fullscreen-dialog {
  width: 100% !important;
  overflow: hidden;
}
.desktop-project-image-fullscreen-dialog-wide {
  width: 80% !important;
  overflow: hidden;
}
.desktop-project-image-fullscreen-dialog-square {
  width: 60% !important;
  overflow: hidden;
}
.mobile__video-dialog {
  background-color: black !important;
  width: 100% !important;
}
.mobile__content-dialog {
  width: 100% !important;
  height: 100vh;
  max-height: 100% !important;
  overflow: hidden;
  margin: 0;
  border-radius: 0;
}
/* overides */
.v-autocomplete__content {
  height: calc((32px * 5) + 8px);
}
.v-dialog--custom {
  width: 100% !important;
  max-height: 70% !important;
  margin: 12px !important;
}
.project-dialog {
  height: 84%;
  overflow: hidden;
}

.v-menu--custom {
  border-radius: 0px;
}
.parallax-image > .v-image__image {
  height: 100%;
  opacity: 0.2;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.clickable-image > .v-image__image {
  transform: scale(1);
  transition-delay: 0.8s;
  transition: 0.3s ease-in-out;
}

.clickable-image:hover > .v-image__image {
  transform: scale(1.02);
  transition-delay: 2s;
  transition: 0.3s ease-in-out;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #006080;
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
.mobile-body-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.background-gradient {
  position: absolute;
  width: 100%;
  height: 100%;

  background: radial-gradient(
    circle,
    rgba(102, 110, 114, 0.9) 65%,
    rgba(103, 111, 113, 1) 100%
  );
  background-size: cover;
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
  background: rgba(255, 255, 255, 1);
  width: 60%;
}

.hooper-slide {
  padding: 2px !important;
}
.hooper:focus {
  border: none;
  outline: none;
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
  z-index: 21 !important;
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

/* Hooper settings for mobile */
.hooper-mobile-projects .hooper-pagination {
  top: -30px;
  right: 0px;
  padding: 0 12px 0 0;
  transform: none;
}
.hooper-mobile-projects .hooper-pagination ol li button {
  border-radius: 100%;
  width: 7px;
  height: 7px;
  background: #b9b9b9;
}

.hooper-mobile-projects .hooper-pagination ol li .is-active {
  background: #007399;
  box-shadow: 0px 0px 1px rgba(34, 58, 65, 0.8);
}

/* END CSS OVERRIDES */
</style>
