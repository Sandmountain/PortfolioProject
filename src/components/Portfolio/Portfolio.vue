<template>
  <v-container>
    <v-row justify="center">
      <v-col md="8">
        <h2 class="title-h2">
          <span class="font-weight-black right">
            <span class="font-weight-thin">MY RECENT</span>
            PROJECTS
          </span>
        </h2>
        <p
          class="caption font-weight-light"
          style="padding: 0px 10px 0px 10px; margin:0; "
        >Down below, I've collected the projects that I'm most proud off. You can press on any card to get an overview of the project with images, code and an explanation of the project.</p>
      </v-col>
    </v-row>

    <v-carousel height="23vw" hide-delimiters show-arrows-on-hover>
      <v-carousel-item style="padding: 0 13vw 13vw">
        <v-row align="center" justify="center" no-gutters>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
        </v-row>
        <v-row v-row align="center" justify="center" no-gutters>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
      <v-carousel-item style="padding: 0 13vw 13vw">
        <v-row align="center" justify="center" no-gutters>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
        </v-row>
        <v-row v-row align="center" justify="center" no-gutters>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
          <v-col class="ma-4">
            <v-card class="thumbnail-paper">1 paper</v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-row justify="center">
      <v-col md="8">
        <h2 class="title-h2 text-right">
          <span class="font-weight-black left">
            <v-btn icon large color="primary">
              <v-icon medium>mdi-github-circle</v-icon>
            </v-btn>
          </span>
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.thumbnail-paper {
  min-height: 10vw;
  min-width: 10vw;
}

.title-h2 {
  z-index: 5 !important;
  position: relative;
}
.title-h2 .right {
  z-index: 5 !important;
  background-color: white;
  padding-right: 10px;
}
.title-h2 .left {
  background-color: white;
  padding-left: 10px;
}

.title-h2:after {
  background-color: white;
  content: "";
  position: absolute;
  bottom: 0.25em;
  left: 0;
  right: 0;
  height: 0.5em;
  border-top: 1px solid black;
  z-index: -1;
}
</style>