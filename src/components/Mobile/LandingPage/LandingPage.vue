<template>
  <div>
    <div class="cover-photo"></div>
    <v-container class="landing-container">
      <span class="caption" style="padding: 12px; color: white">
        I AM
      </span>
      <img
        src="../../../assets/profilepicture/profile4.png"
        aspect-ratio="1"
        class="profile-picture"
      />
      <h1
        class="font-weight-black white--text"
        style="font-size: 2.2rem; line-height: 0.8; text-align: center; padding-top: 12px "
      >
        VIKTOR SANDBERG
      </h1>
      <p
        class="caption font-weight-medium  sub-text"
        style="text-align: center; color: rgba(0, 0, 0, 0.54)"
      >
        Creative developer with a big passion for Design and UX.
      </p>
      <div style="width: 100%;">
        <h2 class="social-media text-center">
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
      <v-fade-transition>
        <a
          v-if="!isScroll"
          class="caption swipe-text"
          @click="$vuetify.goTo('#portfolio-id')"
        >
          <span class="font-weight-light " style="user-select: none;">
            SWIPE DOWN
          </span>
          <div class="arrow bounce">
            <v-icon class="arrow-icon"> mdi-chevron-down</v-icon>
          </div>
        </a>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['isScroll'],
  data() {
    return {};
  },
  methods: {
    removeClassOnScroll() {
      return 'fade-in';
    },
    openNewTab(url) {
      window.open(url, '_blank');
    },
    sendMail() {
      window.open('mailto:sandtain@gmail.com');
    }
  }
};
</script>

<style scoped>
.profile-picture {
  width: 50%;
  z-index: 3;
}
.landing-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.landing-card {
  height: 20vh;
  margin-top: -83px;
  z-index: 1;
  padding: 90px 12px 12px 12px !important;
}
.parallax-bg {
  background-attachment: fixed;
  background-size: 100%;
  height: 100vh;
}
.cover-photo {
  position: absolute;
  width: 100%;
  height: 110vh;
  background-image: url(../../../assets/photos/banner8px_cropped_fade.png);
  /*background-image: url(../../../assets/photos/banner8px_cropped.jpg);*/
  opacity: 0.6;
  background-size: cover;
  background-repeat: no-repeat;
  animation: bgmve 120s ease-in infinite;
  background-position: 100% center;
}

.title-box {
  margin-top: -150px;
}

.swipe-text-navigator {
  text-decoration: none;
  color: inherit;
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

<!-- VIKTOR SANDBERG med stora bokstäver först

<h1
        class="font-weight-black white--text"
        style="font-size: 3.8rem; line-height: 0.8; padding-bottom: 12px; text-align: center "
      >
        VIKTOR SANDBERG
      </h1>
      <img
        src="../../../assets/profilepicture/profile4.png"
        aspect-ratio="1"
        class="profile-picture"
      />

      <v-card style="padding: 12px" class="rounded-corners landing-card">
        <p
          class="caption font-weight-medium primary--text sub-text"
          style="text-align: center;"
        >
          M.Sc student with a large interest for Web Development.
        </p>
        <p style="text-align: center">
          <v-icon small>mdi-map-marker</v-icon>
          <span class="caption font-weight-regular">Norrköping, Sweden</span>
        </p>
      </v-card>

-->
