<template>
  <div class="portfolio-container">
    <div class="top-content">
      <span v-if="$vuetify.breakpoint.smAndUp">
        <h2 class="title-h2">
          <span class="font-weight-black right">
            <span class="font-weight-light">FILTERED</span>
            <span class="primary--text"> PROJECTS</span>
          </span>
        </h2>
        <p
          class="body-2 font-weight-regular"
          style="padding: 5px 0px; margin: 0;"
        >
          Your search for {{ filterData.query }} got
          {{ filterData.data.length }} matching projects.
        </p>
        <v-spacer />
      </span>
      <span v-else>
        <span class="font-weight-black primary--text headline">
          <span class="font-weight-light black--text">FILTERED </span>
          PROJECTS
        </span>
        <p class="caption font-weight-regular" style="margin: 0;">
          Your search for
        </p>
      </span>
    </div>
    <div class="list-content">
      <v-dialog
        v-model="showMoreInfo"
        overlay-opacity="0.8"
        max-width="100%"
        :scrollable="false"
      >
        <ProjectDialog :current-project="currentProject" />
      </v-dialog>

      <span v-if="filterData !== null">
        <v-list two-line subheader dense style="border-radius:0px ">
          <v-list-item
            v-for="project in filterData.data"
            :key="project.id"
            @click="setCurrentProject(project)"
          >
            <v-list-item-avatar>
              <v-img
                :src="require('../../assets/project/' + project.thumbnail)"
                alt="project.title"
              >
              </v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="project.title"></v-list-item-title>
              <v-list-item-subtitle
                v-text="returnKeywords(project.keywords)"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon color="primary">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </span>
    </div>

    <div class="bottom-content" style="z-index: 100">
      <!-- TODO: Better text-->
      <v-btn
        text
        @click="changePage(1)"
        color="primary"
        class="text-center bottom-button"
        >Return to projects</v-btn
      >
    </div>
  </div>
</template>

<script>
import ProjectDialog from './ProjectDialog';

export default {
  name: 'FilteredPorfolio',
  components: {
    ProjectDialog
  },
  data() {
    return {
      showMoreInfo: false,
      currentProject: {}
    };
  },
  props: ['filterData', 'changePage'],
  created() {},

  methods: {
    setCurrentProject(value) {
      this.currentProject = value;
      this.showMoreInfo = true;
    },
    returnKeywords(keywords) {
      let list = '';
      keywords.forEach((word, idx) => {
        if (idx < keywords.length - 1) {
          list += word + ', ';
        } else {
          list += word;
        }
      });
      return list;
    }
  }
};
</script>

<style scoped>
.v-dialog--custom {
  height: 50%;
}
.button-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
}
.portfolio-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.list-content {
  height: 100%;
  overflow-y: auto;
}
.top-content {
  padding: 12px 12px 8px 12px;
  z-index: 2;
  width: 100%;

  -webkit-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
}

/* Horizontal lines titles */
.title-h2 {
  font-size: 1.6rem;
  z-index: 1 !important;
  position: relative;
}
.title-h2 .right {
  z-index: 1 !important;
  background-color: white;
  padding-right: 10px;
}
.title-h2 .left {
  background-color: white;
  padding-left: 10px;
}
.title-h2:after {
  background-color: white;
  content: '';
  position: absolute;
  bottom: 0.25em;
  left: 0;
  right: 0;
  height: 0.5em;
  border-top: 1px solid black;
  z-index: -1;
}

.bottom-content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
  height: 50px;
  width: 100%;
  margin: 0px;
  -webkit-box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
}
</style>
