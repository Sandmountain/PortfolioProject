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
    <transition name="slide-fade">
      <ProjectDialogContent :current-project="currentProject" />
    </transition>
  </div>
</template>

<script>
import ProjectDialogContent from './ProjectDialogContent';

export default {
  components: {
    ProjectDialogContent
  },
  props: {
    currentProject: { type: Object, required: true },
    showArrows: { type: Boolean, required: true },
    nextProject: { type: Function, required: true },
    prevProject: { type: Function, required: true }
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
</style>
