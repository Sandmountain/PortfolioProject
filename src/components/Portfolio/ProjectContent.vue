<template>
  <div>
    <span v-if="$vuetify.breakpoint.mdAndUp">
      <v-row style="height: 100%" class="project-row">
        <v-col md="6" sm="12" no-gutters jusitfy="space-between">
          <h2 class="project-title-h2">
            <span class="font-weight-black right"
              >{{ currentProject.title.toUpperCase() }}
            </span>
            <span v-if="currentProject.githubUrl !== null">
              <span
                class="font-weight-black left"
                style="float: right; margin-top: -3px"
              >
                <v-btn icon @click="openNewTab(currentProject.githubUrl)">
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </span>
            </span>
          </h2>

          <div
            class="font-weight-regular project-description"
            style="text-align: left; padding-top: 10px; "
          >
            <p>
              {{ currentProject.description }}
            </p>
          </div>

          <div style=" height: 100%; ">
            <div class="readme-button">
              <v-btn tile color="primary" @click.stop="showMoreInfo = true"
                >Read more</v-btn
              >
              <v-dialog
                v-model="showMoreInfo"
                overlay-opacity="0.8"
                max-width="100%"
                :scrollable="true"
              >
                <ProjectDialog
                  :current-project="currentProject"
                  :show-arrows="showMoreInfo"
                  :next-project="nextProject"
                  :prev-project="prevProject"
                />
              </v-dialog>

              <span v-if="currentProject.demoUrl !== null">
                <v-btn
                  style="margin-left: 12px"
                  tile
                  color="secondary"
                  @click.stop="openNewTab(currentProject.demoUrl)"
                  >View Demo</v-btn
                >
              </span>
              <span v-if="currentProject.screencast !== null">
                <v-btn
                  @click.stop="showVideo = true"
                  style="margin-left: 12px"
                  tile
                  color="secondary"
                  >View Screencast</v-btn
                >
                <v-dialog
                  v-model="showVideo"
                  max-width="100%"
                  :scrollable="true"
                >
                  <youtube
                    :video-id="getYoutubeID(currentProject.screencast)"
                    ref="youtube"
                    :resize="true"
                  ></youtube>
                </v-dialog>
              </span>
            </div>
          </div>
        </v-col>
        <v-col md="6" sm="12" no-gutters>
          <v-img
            style="cursor: pointer;"
            aspect-ratio="2.3"
            :src="require('../../assets/project/' + currentProject.thumbnail)"
            @click.stop="showMoreInfo = true"
          />

          <div class="font-weight-black caption text-center pt-5">
            <!--LANGUAGES USED-->
          </div>
          <div class="language-icons">
            <span v-for="(language, i) in currentProject.languages" :key="i">
              <span v-if="language.icon !== null">
                <div class="tooltip">
                  <v-icon
                    class="tooltip-icon"
                    style="padding: 5px"
                    :class="language.icon"
                  />
                  <span
                    class="tooltiptext tooltip-bottom font-weight-black caption"
                  >
                    {{ language.name }}
                  </span>
                </div>
              </span>
              <span v-else>
                <div class="tooltip">
                  <v-img
                    class="tooltip-icon"
                    style="; height: 26px; width: 25px; margin: 3px 0px 0px 3px; "
                    :src="require('../../assets/' + language.img)"
                    :alt="language.name"
                  />
                  <span
                    class="tooltiptext tooltip-bottom font-weight-black caption"
                  >
                    {{ language.name }}
                  </span>
                </div>
              </span>
            </span>
          </div>
        </v-col>
      </v-row>
    </span>
    <span v-else>
      <v-row no-gutters class="project-row">
        <v-col style="padding: 15px" md="6" sm="12" no-gutters>
          <span class="font-weight-black right">{{
            currentProject.title.toUpperCase()
          }}</span>

          <p style="text-align: left; padding-top: 10px">
            {{ currentProject.description }}
          </p>
          <v-btn tile color="primary">Read More</v-btn>
          <span v-if="currentProject.demoUrl !== null">
            <v-btn style="margin-left: 12px" tile color="secondary">Demo</v-btn>
          </span>
          <span v-if="currentProject.screencast !== null">
            <v-btn
              style="margin-left: 12px"
              tile
              color="secondary"
              @click.stop="showVideo = true"
              >Video</v-btn
            >
            <v-dialog v-model="showVideo" max-width="100%" :scrollable="true">
              <youtube
                ref="youtube"
                :video-id="getYoutubeID(currentProject.screencast)"
              ></youtube>
            </v-dialog>
          </span>
        </v-col>
      </v-row>
    </span>
  </div>
</template>

<script>
import Vue from 'vue';
import VueYoutube from 'vue-youtube';
import ProjectDialog from './ProjectDialog';

Vue.use(VueYoutube);

export default {
  components: {
    ProjectDialog
  },
  props: {
    currentProject: { type: Object, required: true },
    nextProject: { type: Function, required: true },
    prevProject: { type: Function, required: true }
  },
  data() {
    return {
      showVideo: false,
      showMoreInfo: false
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
  methods: {
    openNewTab(url) {
      window.open(url, '_blank');
    },
    getYoutubeID(url) {
      return this.$youtube.getIdFromUrl(url);
    },
    pauseVideo() {
      this.$refs.youtube.player.pauseVideo();
    }
  }
};
</script>

<style scoped>
.project-description {
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  font-family: 'Roboto', sans-serif !important;
}
.readme-button {
  position: absolute;
  bottom: 12px;
}

/* Horizontal line and title text*/
.project-title-h2 {
  font-size: 1.6rem;
  z-index: 1 !important;
  position: relative;
}
.project-title-h2 .right {
  z-index: 1 !important;
  background-color: #fff;
  padding-right: 10px;
}
.project-title-h2 .left {
  background-color: #fff;
}
.project-title-h2:after {
  background-color: #fff;
  content: '';
  position: absolute;
  bottom: 0.25em;
  left: 0;
  right: 0;
  height: 0.5em;
  border-top: 1px solid #474747;
  z-index: -1;
}

.language-icons {
  display: flex;
  justify-content: center;
}
/* Tooltip */
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.2s;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 0.95;
  background-color: #555;
}

.tooltip-icon:hover {
  filter: opacity(0.5) drop-shadow(0 0 0 #a0a0a0);
}

/* Responsive layout */
@media screen and (max-width: 1904px) {
  .project-title-h2 {
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 1264px) {
  .project-title-h2 {
    font-size: 1rem;
  }
  .project-description {
    font-size: 0.7rem !important;
  }
}
@media screen and (max-width: 960px) {
  .project-row {
    flex-flow: column-reverse;
  }
  .project-description {
    font-size: 0.7rem !important;
  }
}
</style>
