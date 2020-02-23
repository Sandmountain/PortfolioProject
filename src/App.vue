<template>
  <v-app>
    <AppBar />
    <Layout />
    <BottomNavBar />
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar/AppBar";
import BottomNavBar from "./components/AppBar/BottomNavBar";
import Layout from "./components/Layout.vue";

export default {
  name: "App",

  components: {
    AppBar,
    Layout,
    BottomNavBar
  },

  data: () => ({
    //
  })
};
</script>
<style>
.v-dialog__content--active {
  overflow-y: hidden !important;
}
html {
  overflow-x: hidden;
  flex: 1 1 auto;
  width: 100%;
}

body {
  overflow-x: hidden;
  width: 100%;
  margin: 5px;
}
body::-webkit-scrollbar {
  display: none;
}
#app {
  background-color: #fff !important;
}

.background-options {
  background-color: #5b636e;
}

.center-items {
  display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
  justify-content: center;
  align-items: center;
}
.v-parallax__image {
  top: -450px;
}
</style>
