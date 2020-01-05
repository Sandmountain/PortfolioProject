<template>
  <v-app style="backgroundOptions">
    <AppBar />
    <v-content> <Home> </Home></v-content>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar/AppBar";
import Home from "./components/Home/Viktor";

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
.backgroundOptions {
  background-color: #5b636e;
}
</style>
