<template>
  <v-app>
    <div>
      <AppBar />
      <Layout />
    </div>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar/AppBar";
import Layout from "./components/Layout.vue";

export default {
  name: "App",

  components: {
    AppBar,
    Layout
  },

  data: () => ({
    //
  })
};
</script>
<style>
body {
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
