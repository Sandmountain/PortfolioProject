<template>
  <div class="portfolio-container">
    <div class="top-content">
      <span class="font-weight-black primary--text headline">
        <span class="font-weight-light black--text">MY RECENT</span>
        PROJECTS
      </span>
      <p class="caption font-weight-regular" style="margin: 0;">
        Down below, I've collected the projects that I'm most proud of. You can
        press on any card to get an overview of the project with images, code
        and an explanation of the project.
      </p>

      <div class="pb-0 pt-0 text-right">
        <v-icon
          :color="projectView === 'list' ? 'primary' : null"
          @click="changeView('list')"
          >mdi-view-stream</v-icon
        >
        <v-icon
          :color="projectView === 'grid' ? 'primary' : null"
          @click.stop="gridView = true"
          @click="changeView('grid')"
          >mdi-view-module</v-icon
        >
        <v-dialog
          v-model="gridView"
          content-class="v-dialog--custom"
          style="background: white;"
          @input="onModalClose"
        >
          <v-container style="padding: 12px 24px 12px 24px; width: 100%">
            <span>
              <p class="h4 black--text text-center">
                Select a project
              </p>

              <v-row sm="2" justify="center">
                <div
                  v-for="(project, i) in thumbnails"
                  :key="i"
                  style="width:33.3%; padding: 6px;  "
                >
                  <v-img
                    :key="project.id"
                    aspect-ratio="1"
                    style="cursor: pointer; height: 100%; border-radius: 6px"
                    :src="
                      require('../../../assets/project/' + project.thumbnail)
                    "
                    @click="scrollToID(createProjectID(projectData[i].title))"
                    @click.stop="
                      gridView = false;
                      projectView = 'list';
                    "
                  />
                </div>
              </v-row>
            </span>
          </v-container>
        </v-dialog>
      </div>
    </div>
    <div class="list-track">
      <v-col
        v-for="(project, i) in thumbnails"
        :key="i"
        sm="12"
        style="padding-bottom: 0px"
      >
        <v-card
          :id="createProjectID(projectData[i].title)"
          class="mx-auto card-list"
        >
          <v-img
            :key="project.id"
            style="width: 100%; height: 100%;"
            class="list-thumbnail"
            :src="require('../../../assets/project/' + project.thumbnail)"
            @click="(currentProject = projectData[i]), toggleContentDialog()"
          />
          <v-card-title style="">
            <span class="subtitle-1 font-weight-bold text-uppercase ">
              {{ projectData[i].title }}
            </span>
          </v-card-title>
          <v-card-subtitle style="padding-top: 0px">
            Tex for later
          </v-card-subtitle>
          <v-card-actions style="padding-top: 0px">
            <v-btn
              text
              color="primary"
              @click="
                scrollToID(createProjectID(projectData[i].title)),
                  (currentProject = projectData[i]),
                  toggleContentDialog()
              "
            >
              Read More
            </v-btn>
            <v-spacer></v-spacer>
            <span v-if="projectData[i].githubUrl !== null">
              <span class="font-weight-black left">
                <v-btn icon @click="openNewTab(projectData[i].githubUrl)">
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </span>
            </span>
            <span v-if="projectData[i].screencast !== null">
              <v-btn
                icon
                @click.stop="
                  (showVideo = true),
                    (currentVideo = getYoutubeID(projectData[i].screencast))
                "
              >
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
            </span>
            <span v-if="projectData[i].demoUrl !== null">
              <v-btn icon @click.stop="openNewTab(projectData[i].demoUrl)">
                <v-icon>mdi-web</v-icon>
              </v-btn>
            </span>
            <span v-if="projectData[i].report !== null">
              <v-btn icon @click.prevent="openNewTab(projectData[i].report)">
                <v-icon>mdi-file-document</v-icon>
              </v-btn>
            </span>
            <span v-if="projectData[i].courseUrl !== null">
              <v-btn icon @click.stop="openNewTab(projectData[i].courseUrl)">
                <v-icon>mdi-school</v-icon>
              </v-btn>
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </div>
    <v-dialog
      v-model="showVideo"
      content-class="mobile__video-dialog"
      width="100%"
      :scrollable="false"
    >
      <youtube ref="youtube" :video-id="currentVideo"></youtube>
    </v-dialog>
    <v-dialog
      v-model="showProject"
      eager
      content-class="mobile__content-dialog"
    >
      <MobileProjectDialog
        :current-project="currentProject"
        :toggle-content-dialog="toggleContentDialog"
      />
    </v-dialog>
    <div class="project-content">
      <p>Text and all</p>
    </div>
  </div>
</template>

<script>
//import ProjectContent from '../../Portfolio/ProjectContent';
import MobileProjectDialog from './MobileProjectDialog';

// eslint-disable-next-line no-undef
let projectData = require('../../../assets/project/projects.json');

//const relativePath = '../../assets/project/';
import VueYoutube from 'vue-youtube';

export default {
  name: 'Portfolio',
  components: {
    MobileProjectDialog
  },
  data() {
    return {
      projectView: 'list',
      styledObject: {},
      listData: 0,
      listIndex: 0,
      currentProject: {},
      currentVideo: 0,
      thumbnails: [],
      initialThumbnails: [],
      projectData,
      showProject: false,
      gridView: false,
      showlist: true,
      showVideo: false
    };
  },
  watch: {
    showVideo: {
      handler: function(val) {
        if (!val) {
          this.pauseVideo();
        }
      }
    }
  },
  created() {
    projectData = projectData.reverse();
    this.currentProject = projectData[0];
    this.parseThumbnails();
    this.initialThumbnails = this.thumbnails;
  },
  updated() {},
  methods: {
    toggleContentDialog() {
      this.showProject = !this.showProject;
    },
    getYoutubeID(url) {
      return this.$youtube.getIdFromUrl(url);
    },
    pauseVideo() {
      this.$refs.youtube.player.pauseVideo();
    },
    createProjectID(title) {
      return title.split(' ').join('-');
    },
    scrollToID(ID) {
      this.$vuetify.goTo('#' + ID, {
        duration: 250,
        offset: 12,
        easing: 'easeInOutCubic'
      });
    },
    openNewTab(url) {
      window.open(url, '_blank');
    },
    changeView(view) {
      this.projectView = view;
    },
    onModalClose() {
      this.projectView = 'list';
    },
    parseThumbnails() {
      this.thumbnails = projectData.map(project => ({
        thumbnail: project.thumbnail,
        id: project.id
      }));
    }
  }
};
</script>

<style scoped>
.portfolio-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.top-content {
  padding: 12px 12px 0px 12px;
  z-index: 2;
  width: 100%;
  -webkit-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -15px 7px 16px rgba(0, 0, 0, 0.3);
}

.project-content {
  padding: 0px 12px;
  margin-bottom: 10px;
  height: 100%;
  margin: 0px;
  -webkit-box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 15px 7px 16px rgba(0, 0, 0, 0.3);
}

.list-track {
  width: 100%;
  background: #d1d1d1;
  padding-bottom: 12px;
}
.card-list {
  overflow: hidden;
}
.list-thumbnail {
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3);
}

/* Responsive layout */
@media screen and (max-width: 1904px) {
  .arrow-next {
    margin: 38px 0.5vw;
  }
  .arrow-previous {
    margin: 38px 0.5vw;
  }
}
@media screen and (max-width: 1264px) {
  .arrow-next {
    margin: 40px 0.5vw;
  }
  .arrow-previous {
    margin: 40px 0.5vw;
  }
}
</style>
