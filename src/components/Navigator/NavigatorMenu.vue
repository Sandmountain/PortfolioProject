<template>
  <v-tabs v-model="active" class="nav-menu">
    <v-tab @click="updatePage(0)"> <v-icon left>mdi-home</v-icon>Home </v-tab>
    <v-tab @click="updatePage(1)">
      <v-icon left>mdi-brush</v-icon>Projects
    </v-tab>
    <v-spacer></v-spacer>
    <span class="search-button">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="400"
        :nudge-top="75"
        :nudge-left="390"
        class="border-rad"
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <span v-if="!menu">
              <v-icon style>mdi-magnify</v-icon>
            </span>
            <span v-else>
              <v-icon small>mdi-window-close</v-icon>
            </span>
          </v-btn>
        </template>

        <v-card-text class="search-paper">
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
      </v-menu>
    </span>
  </v-tabs>
</template>

<script>
// eslint-disable-next-line no-undef
const projectData = require('../../assets/project/projects.json');

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['changePage', 'changeFilterPage', 'page'],
  data() {
    return {
      parsedData: ['project 1', 'project 2'],
      keyWords: [],
      query: '',
      active: 0,
      menu: 0
    };
  },
  watch: {
    page: function(newVal) {
      newVal === 3 ? (this.active = 1) : (this.active = newVal);
    }
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

<style scoped>
.search-paper {
  background: white;
  padding: 10px;
  border-radius: 10px;
}
.search-button {
  display: flex;
  align-self: center;
  margin-right: 10px;
}
.v-menu__content {
  border-radius: 10px;
}
</style>
