<template>
  <v-tabs class="nav-menu">
    <v-tab>
      <v-icon left>mdi-home</v-icon>Home
    </v-tab>
    <v-tab>
      <v-icon left>mdi-brush</v-icon>Projects
    </v-tab>
    <v-tab>
      <v-icon left>mdi-account</v-icon>About Me
    </v-tab>
    <v-spacer></v-spacer>
    <v-text-field
      style="display: none"
      light
      solo
      prepend-icon="mdi-magnify"
      placeholder="Type keyword..."
    ></v-text-field>
  </v-tabs>
</template>

<script>
export default {};
</script>

<style scoped>
</style>