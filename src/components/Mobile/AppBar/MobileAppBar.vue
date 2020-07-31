<template>
  <div>
    <div class="main-app-bar">
      <div class="logo-and-title">
        <img class="logo-image" src="../../../assets/photos/logo.png" />
        <p class="font-weight-bold">VIKTORSANDBERG.COM</p>
      </div>
    </div>

    <div style="position: absolute; z-index: 20; ">
      <div style="top: -1px; right: 0; position: fixed; margin: 1em  ">
        <v-fade-transition>
          <v-btn
            icon
            :class="[
              btnColor(),
              showMenu ? 'fab-menu-btn' : '',
              isScroll && !showMenu ? 'elevated-fab-btn' : 'fab-btn'
            ]"
            @click="openMenu"
          >
            <v-icon style="color: inherit">{{ `mdi-${icon}` }}</v-icon>
          </v-btn>
        </v-fade-transition>
      </div>
    </div>
    <div :class="['menu', showMenu ? 'opened-menu' : 'closed-menu']">
      <div class="popup-app-bar-menu">
        <div class="logo-and-title">
          <img
            class="logo-image"
            src="../../../assets/photos/logo_primary.png"
          />
          <p class="font-weight-bold" style="color: rgba(0, 0, 0, 0.54)">
            VIKTORSANDBERG.COM
          </p>
        </div>
      </div>

      <v-card-text class="menu-search" style=" padding: 16px; ">
        <v-combobox
          ref="combo-box"
          v-model="query"
          solo
          style="background: white;"
          outlined
          dense
          label="Search for projects or keywords"
          :clearable="true"
          hide-details="auto"
          single-line
          :items="keyWords"
          return-object
          @change="startQuery()"
          @click:clear="resetFilter()"
        ></v-combobox>
      </v-card-text>
      <v-list dense class="menu-list">
        <v-list-item @click="$vuetify.goTo(0), hideMenu()">
          <v-list-item-icon>
            <v-icon color="primary">mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#portfolio-id'), hideMenu()">
          <v-list-item-icon>
            <v-icon color="primary">mdi-brush</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Portfolio</v-list-item-title>
        </v-list-item>
        <v-list-item
          @click="
            openNewTab(
              'https://drive.google.com/file/d/1NftM13B1b3HAiAxELcQqtvfImhal41iB/view?usp=sharing'
            )
          "
        >
          <v-list-item-icon>
            <v-icon color="primary">mdi-file-account</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Resume</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
    <v-snackbar
      v-model="snackbar"
      :class="[isScroll ? 'added-bottom' : '']"
      style="    padding: 0 4px;"
    >
      {{ queryMessage(snackbarMessage) }}

      <v-btn color="primary" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>

    <div
      :class="[showMenu ? 'show-overlay' : 'hide-overlay', 'overlay']"
      @click="hideMenu"
    ></div>
  </div>
</template>

<script>
// eslint-disable-next-line no-undef
const projectData = require('../../../assets/project/projects.json');

export default {
  props: ['isScroll'],
  data() {
    return {
      icon: 'menu',
      showMenu: false,
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
    });
    this.keyWords = tempWords;
  },

  methods: {
    hideMenu() {
      this.showMenu = false;
      this.icon = this.showMenu ? 'close' : 'menu';
    },
    openMenu() {
      this.showMenu = !this.showMenu;
      this.icon = this.showMenu ? 'close' : 'menu';
    },
    btnColor() {
      if (this.showMenu) {
        return 'dark-btn-color';
      } else if (this.isScroll) {
        return 'primary-btn-color';
      } else {
        return 'white-btn-color';
      }
    },
    openNewTab(url) {
      window.open(url, '_blank');
    },
    resetQuery() {
      this.query = '';
      this.$refs['combo-box'].clearableCallback();
    },
    resetFilter() {
      this.$parent.filterProjectData();
      this.snackbarMessage = 'The filter has been resetted';
      this.snackbar = true;
    },
    queryMessage(message) {
      return message.length < 35 ? message : message.slice(0, 35) + '...';
    },

    startQuery() {
      if (this.query !== '' && this.query) {
        this.snackbarMessage = "You've searched for: " + this.query;
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

        this.hideMenu();
        document.activeElement.blur();
        this.snackbar = true;
        if (testArr.length > 0) {
          this.$parent.filterProjectData(testArr, this.query);
          this.$vuetify.goTo('#portfolio-id');
          //this.changeFilterPage(3, { data: testArr, query: this.query });
        }
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
.menu-search {
  padding: 16px;
  background: #d1d1d1;
}
.menu-list {
  background: white;
  border-radius: 0;
  padding: 0;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}
.app-bar-menu {
  padding: 1em;
  width: 100%;
  height: 56px;
  z-index: 10;
  top: 0px;
  width: 100%;
}
/* Gör som i cardsen, vitt uppe med skugga till grå för menu items */
.popup-app-bar-menu {
  position: relative;
  padding: 1em;
  height: 56px;
  z-index: 10;
  top: 0px;
  width: 100%;
  background: white;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}
.scrolled-popup-app-bar-menu {
  padding: 1.2em;
}
.show-overlay {
  opacity: 0.46;
  pointer-events: all;
}
.hide-overlay {
  opacity: 0;
  pointer-events: none;
}
.overlay {
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  transition: opacity 0.2s ease;
  background-color: rgb(33, 33, 33);
}

.white-btn-color {
  color: white !important;
}
.primary-btn-color {
  color: #007399 !important;
}
.dark-btn-color {
  color: rgba(0, 0, 0, 0.54) !important;
}
.fab-menu-btn {
  box-shadow: none !important;
}
.elevated-fab-btn {
  transition: all 0.1s ease-in-out;
  display: inline-block;
  border-radius: 100%;
  background: white;
  padding: 0.2em 0.2em;
  height: 36px;
  widows: 36px;
  box-shadow: 0px 0px 4px #5f686b;
  z-index: 20;
}

.fab-btn {
  transition: all 0.1s ease-in-out;
  z-index: 20;
  color: #007399;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  /*padding: 0.2em 0.2em;*/
}
.menu {
  width: 100%;
  position: fixed;
  background: white;
  top: 0;
  z-index: 19;
  transition: all 0.4s ease;
}

.menu.opened-menu {
  top: 0;
  touch-action: none;
  overflow: hidden;
}
.menu.closed-menu {
  top: -100vh;
}

.main-app-bar {
  padding: 1em;
  position: absolute;
  width: 100%;
  height: 56px;
  z-index: 10;
  top: 0px;
  width: 100%;
}

.logo-image {
  opacity: 0.6;
  height: 1.5em;
  margin-right: 10px;
}

.logo-and-title {
  color: white;
  display: flex;
  flex-direction: row;
}
</style>
