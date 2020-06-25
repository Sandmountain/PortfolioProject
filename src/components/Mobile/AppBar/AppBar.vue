<template>
  <v-app-bar collapse-on-scroll dense fixed light>
    <v-app-bar-nav-icon
      class="primary--text"
      @click="$vuetify.goTo(0)"
    ></v-app-bar-nav-icon>

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
          <v-combobox
            outlined
            dense
            label="Search for projects, libraries or techniques"
            :clearable="true"
            hide-details="auto"
            single-line
            :items="keyWords"
            v-model="query"
            return-object
            :change="startQuery()"
            :blur="resetQuery()"
          ></v-combobox>
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
// eslint-disable-next-line no-undef
const projectData = require('../../../assets/project/projects.json');
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['changePage', 'changeFilterPage', 'page'],
  data() {
    return {
      keyWords: [],
      query: '',
      active: 0,
      menu: 0
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
    test() {
      console.log('hello');
    },
    resetQuery() {
      this.query = '';
    },
    startQuery() {
      if (this.query !== '' && this.query) {
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

        //console.log(testArr);

        this.changeFilterPage(3, { data: testArr, query: this.query });
      }
    },
    updatePage(i) {
      this.changePage(i);
      this.active = i;
    }
  }
};
</script>
