<template>
  <span>
    <span v-if="!isScroll">
      <v-bottom-navigation
        :input-value="showNav"
        color="primary"
        style="z-index: 205 !important;"
        class="rounded-corners bottom-navigation"
        absolute
        light
        grow
        flat
      >
        <v-btn large @click="$vuetify.goTo(0)">
          <span>Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn large @click="$vuetify.goTo('#portfolio-id')">
          <span>Portfolio</span>
          <v-icon>mdi-brush</v-icon>
        </v-btn>

        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          content-class="v-menu--custom"
          attach="#top-position"
          min-width="100%"
          :absolute="true"
          style="border-radius: 0px !important"
        >
          <template v-slot:activator="{ on }">
            <v-btn large v-on="on">
              <span>Search</span>
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
              <v-combobox
                v-model="query"
                outlined
                dense
                label="Search for projects, libraries or techniques"
                :clearable="true"
                hide-details="auto"
                single-line
                :items="keyWords"
                return-object
                :change="startQuery()"
                :blur="resetQuery()"
              ></v-combobox>
            </v-card-text>
          </div>
        </v-menu>
        <v-btn large>
          <span>Resume</span>
          <v-icon>mdi-file-account</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </span>
    <span v-else>
      <v-bottom-navigation
        :input-value="showNav"
        style="z-index: 205;"
        color="primary"
        grow
        fixed
        light
        flat
      >
        <v-btn large @click="$vuetify.goTo(0)">
          <span>Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn large @click="$vuetify.goTo('#portfolio-id')">
          <span>Portfolio</span>
          <v-icon>mdi-brush</v-icon>
        </v-btn>
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          content-class="v-menu--custom"
          attach="#top-position"
          min-width="100%"
          :absolute="true"
          style="border-radius: 0px !important"
        >
          <template v-slot:activator="{ on }">
            <v-btn large v-on="on">
              <span>Search</span>
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
              <v-combobox
                v-model="query"
                outlined
                dense
                label="Search for projects, libraries or techniques"
                :clearable="true"
                hide-details="auto"
                :items="keyWords"
                return-object
                :change="startQuery()"
                :blur="resetQuery()"
              ></v-combobox>
            </v-card-text>
          </div>
        </v-menu>
        <v-btn large>
          <span>Resume</span>
          <v-icon>mdi-file-account</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </span>
    <v-snackbar
      v-model="snackbar"
      :class="[isScroll ? 'added-bottom' : '']"
      style="    padding: 0 4px;"
    >
      You've searched for:
      {{ queryMessage(snackbarMessage) }}

      <v-btn color="primary" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </span>
</template>

<script>
// eslint-disable-next-line no-undef
const projectData = require('../../../assets/project/projects.json');

export default {
  props: ['isScroll'],
  data() {
    return {
      keyWords: [],
      menu: false,
      query: '',
      showNav: false,
      snackbar: false,
      snackbarMessage: ''
    };
  },
  created() {
    let tempWords = [];
    projectData.forEach(project => {
      tempWords.push(project.title);

      project.keywords.forEach(keyword => {
        tempWords.push(keyword);
      });
      /*
      if (project.report !== null) {
        tempWords.push({ word: 'report', id: project.id });
      }
      if (project.screencast !== null) {
        tempWords.push({ word: 'screencast', id: project.id });
      }
      if (project.githubUrl !== null) {
        tempWords.push({ word: 'github', id: project.id });
      }
      */
    });
    this.keyWords = tempWords;
  },

  methods: {
    resetQuery() {
      this.query = '';
    },
    queryMessage(message) {
      return message.length < 35 ? message : message.slice(0, 35) + '...';
    },
    startQuery() {
      if (this.query !== '' && this.query) {
        this.snackbarMessage = this.query;
        const testArr = [];
        projectData.forEach((project, index) => {
          project.title === this.query
            ? testArr.push(projectData[index])
            : null;

          this.query.toLowerCase() === 'screencast' &&
          project.screencast !== null
            ? testArr.push(projectData[index])
            : null;

          this.query.toLowerCase() === 'report' && project.report !== null
            ? testArr.push(projectData[index])
            : null;

          this.query.toLowerCase() === 'github' && project.githubUrl !== null
            ? testArr.push(projectData[index])
            : null;

          project.keywords.includes(this.query)
            ? testArr.push(projectData[index])
            : null;
        });

        console.log(testArr);
        this.menu = false;
        this.snackbar = true;
        //this.changeFilterPage(3, { data: testArr, query: this.query });
      }
    }
  },
  watch: {
    isScroll: function(newVal, oldVal) {
      // watch it
      if (newVal !== oldVal) {
        this.showNav = newVal;
      }
    }
  }
};
</script>

<style scoped>
.added-bottom {
  bottom: 62px;
}
.bottom-navigation {
  overflow: hidden;
}
</style>
