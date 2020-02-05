<template>
  <v-app>
    <div>
      <AppBar />
      <Home></Home>
    </div>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar/AppBar";
import Home from "./components/Home/Home";

export default {
  name: "App",

  components: {
    AppBar,
    Home
  },

  data: () => ({
    //
  })
};
</script>
<style>
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
