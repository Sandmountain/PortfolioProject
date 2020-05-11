<template>
  <div>
    <span class="left-arrow">
      <transition name="slide-fade">
        <v-btn
          v-show="showArrows"
          style="background: rgba(0, 115, 153, 0.95);   box-shadow: 0px 0px 5px 1px rgba(15,15,15,0.8)"
          icon
          large
          color="white"
          @click.stop="prevProject"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </transition>
    </span>
    <span class="right-arrow">
      <transition name="slide-fade">
        <v-btn
          v-show="showArrows"
          style="background: rgba(0, 115, 153, 0.95);   box-shadow: 0px 0px 5px 1px rgba(15,15,15,0.8)"
          icon
          large
          color="white"
          @click.stop="nextProject"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </transition>
    </span>

    <v-container>
      <h2 class="title-h2">
        <span class=" right text-uppercase primary--text">
          <span v-html="stylingTitles(currentProject.title)" />
        </span>
      </h2>

      <v-col
        class="font-weight-regular project-description"
        style="text-align: left;
      padding-top: 10px; "
      >
        <v-row>
          <v-col md="6">
            <p>
              {{ currentProject.description }}
            </p>
            <p>
              {{ currentProject.development }}
            </p>
          </v-col>
          <v-col md="6">
            <v-row>
              <v-img
                :src="
                  require('../../assets/project/' + currentProject.thumbnail)
                "
                :alt="currentProject.title"
              />
            </v-row>

            <v-row align="center" justify="center">
              <v-col
                v-for="(image, index) in currentProject.images.src"
                :key="index"
                sm="2"
              >
                <v-img
                  aspect-ratio="1"
                  :src="require('../../assets/project/' + image)"
                  :alt="currentProject.title"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    currentProject: { type: Object, required: true },
    showArrows: { type: Boolean, required: true },
    nextProject: { type: Function, required: true },
    prevProject: { type: Function, required: true }
  },
  methods: {
    stylingTitles: title => {
      let words = title.split(' ');

      if (words.length !== 1) {
        return (
          '<span class="font-weight-light">' +
          words
            .map((word, index) => {
              if (index !== words.length - 1) return word + ' ';
            })
            .join('') +
          '</span><span class="font-weight-black ">' +
          words[words.length - 1] +
          '</span>'
        );
      } else {
        return title;
      }
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(15px);
  opacity: 0;
}

.right-arrow {
  position: absolute;
  top: 50%;
  right: 10%;
}
.left-arrow {
  position: absolute;
  top: 50%;
  left: 10%;
}
.imageBackground {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.2;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

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
</style>
