<template>
  <span>
    <div class="cover-photo"></div>
    <v-row class="full-height">
      <v-col cols="6" class="half-width-column right-aligned">
        <img
          src="../../../assets/profilepicture/profile4.png"
          aspect-ratio="1"
          class="profile-picture-landscape"
        />
      </v-col>
      <v-col cols="6" class="half-width-column left-aligned">
        <span class="caption" style="color: white">
          I AM
        </span>
        <h1 class="font-weight-black white--text name-title-text">
          VIKTOR SANDBERG
        </h1>
        <p class="caption font-weight-medium sub-text description-text">
          Creative developer with a big passion for Design and UX.
        </p>
        <div style="width: 100%;">
          <h2 class="social-media">
            <v-btn icon small color="primary">
              <v-icon medium>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon small color="primary">
              <v-icon medium>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon small color="primary">
              <v-icon medium>mdi-github</v-icon>
            </v-btn>
          </h2>
        </div>
      </v-col>
    </v-row>
    <div class="bottom-swipe-container">
      <v-fade-transition>
        <a
          v-if="!isScroll"
          class="caption swipe-text"
          @click="$vuetify.goTo('#portfolio-id')"
        >
          <span class="font-weight-light">
            SWIPE DOWN
          </span>
          <div class="arrow bounce">
            <v-icon class="arrow-icon"> mdi-chevron-down</v-icon>
          </div>
        </a>
      </v-fade-transition>
    </div>
  </span>
</template>

<script>
export default {
  props: ['isScroll']
};
</script>

<style scoped>
.name-title-text {
  font-size: 2.2rem;
  line-height: 0.8;
}
.full-height {
  height: 100%;
  transform: translateX(-12vw);
}
.profile-picture-landscape {
  width: 20vw;
}
.half-width-column {
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-self: center;
}
.right-aligned {
  align-items: flex-end;
}
.left-aligned {
  align-items: flex-start;
}
.description-text {
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 0;
}

.bottom-swipe-container {
  z-index: 5;
  justify-content: center;
  position: absolute;
  display: flex;
  width: 100%;
}
.swipe-text {
  bottom: 0;
  position: fixed;
  color: white !important;
  opacity: 0.8;
}
.arrow-icon {
  color: white;
  opacity: 0.8;
}
.arrow {
  text-align: center;
}

.cover-photo {
  position: absolute;
  width: 100%;
  height: 110vh;
  background-image: url(../../../assets/photos/banner8px_cropped_fade.png);
  opacity: 0.6;
  background-size: cover;
  background-repeat: no-repeat;
  animation: bgmve 120s ease-in infinite;
  background-position: 100% center;
}

@keyframes bgmve {
  0% {
    background-position: 100% 0;
  }
  50% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

.arrow.bounce {
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
