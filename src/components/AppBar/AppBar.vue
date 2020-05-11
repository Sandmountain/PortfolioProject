<template>
  <v-app-bar collapse-on-scroll fixed light>
    <v-app-bar-nav-icon class="primary--text"></v-app-bar-nav-icon>

    <v-toolbar-title>
      <span class="font-weight-regular primary--text">VIKTOR</span>
      <span class="font-weight-black right primary--text">SANDBERG.COM</span>
    </v-toolbar-title>

    <v-spacer />
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="550"
      :nudge-bottom="55"
      :nudge-left="390"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <span v-if="!menu">
            <v-icon class="primary--text">mdi-magnify</v-icon>
          </span>
          <span v-else>
            <v-icon class="primary--text" small>mdi-window-close</v-icon>
          </span>
        </v-btn>
      </template>
      <div>
        <v-card-text style="background: white; padding: 10px; ">
          <v-autocomplete
            outlined
            dense
            chips
            small-chips
            multiple
            label="Search for projects, libraries or techniques"
            :clearable="true"
            hide-details="auto"
            single-line
          ></v-autocomplete>
          <!--
              :item-avatar="thumbnails.thumbnail"
              @input="queryProjects"
              :items="thumbnails.thumbnail"
          -->
        </v-card-text>
      </div>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      menu: false
    };
  }
};
</script>
