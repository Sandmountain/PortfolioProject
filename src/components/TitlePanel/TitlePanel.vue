<template>
  <v-container fluid>
    <h2
      color="primary"
      class="display-2 font-weight-black grey--text text--darken-4 text-shadow"
    >{{this.title.toUpperCase() + " REWORK"}}</h2>

    <span class="title font-weight-light primary--text text-shadow-thin">{{this.text.toUpperCase()}}</span>
  </v-container>
</template>

<script>
export default {
  props: {
    title: String,
    text: String
  }
};
</script>

<style>
.text-shadow {
  text-shadow: 0px 1px 3px rgba(43, 43, 43, 0.76);
}
.text-shadow-thin {
  text-shadow: 0px 1px 2px rgba(43, 43, 43, 0.76);
}
</style>