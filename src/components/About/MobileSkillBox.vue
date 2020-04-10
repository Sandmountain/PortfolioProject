<template>
  <VueSlickCarousel v-bind="settings" style="padding: 10px">
    <v-card class="carousel-card elevation-4">
      <v-row justify="center">
        <v-btn fab disabled depressed color="primary" class="fab-gradient" style="cursor: auto">
          <v-icon class="white-icon">fa-gem</v-icon>
        </v-btn>
      </v-row>
      <v-row justify="center">
        <v-col class="skill-title">
          <h3 class="font-weight-bold text-center">DESIGN</h3>
        </v-col>
        <p
          class="skill-text caption text-center"
        >Anim anim sit nostrud adipisicing cillum exercitation ipsum sint.Labore do laborum ut elit ullamco fugiat aute eiusmod amet do et ea ex.</p>
      </v-row>
    </v-card>
    <v-card class="carousel-card elevation-4">
      <v-row justify="center">
        <v-btn fab disabled depressed color="primary" class="fab-gradient" style="cursor: auto">
          <v-icon class="white-icon">mdi-xml</v-icon>
        </v-btn>
      </v-row>
      <v-row justify="center">
        <v-col class="skill-title">
          <h3 class="font-weight-bold text-center">PROGRAMMING</h3>
        </v-col>
        <p
          class="skill-text caption text-center"
        >Anim anim sit nostrud adipisicing cillum exercitation ipsum sint.Labore do laborum ut elit ullamco fugiat aute eiusmod amet do et ea ex.</p>
      </v-row>
    </v-card>
    <v-card class="carousel-card elevation-4">
      <v-row justify="center">
        <v-btn fab disabled depressed color="primary" style="cursor: auto" class="fab-gradient">
          <v-icon class="white-icon">mdi-lightbulb-on-outline</v-icon>
        </v-btn>
      </v-row>
      <v-row justify="center">
        <v-col class="skill-title">
          <h3 class="font-weight-bold text-center">CREATIVITY</h3>
        </v-col>
        <p
          class="skill-text caption text-center"
        >Anim anim sit nostrud adipisicing cillum exercitation ipsum sint.Labore do laborum ut elit ullamco fugiat aute eiusmod amet do et ea ex.</p>
      </v-row>
    </v-card>
  </VueSlickCarousel>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      length: 3,
      window: 0,
      stars: 4,
      settings: {
        dots: false,
        centerMode: true,
        centerPadding: "30px",
        focusOnSelect: true,
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  }
};
</script>

<style scoped>
.fab-gradient {
  background: #007399 !important;
  /*Gradient fab
  background: linear-gradient(
    180deg,
    rgb(0, 133, 177) 0%,
    rgba(0, 115, 153, 1) 50%
  ) !important;
  */
}

/* Activate for white colored icons*/
.white-icon::before {
  background: linear-gradient(rgb(0, 133, 177), rgba(0, 115, 153, 1));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.divider-properties {
  margin: auto 10px;
  height: 120px !important;
  background: #696969;
}

.slick-arrow {
  /*top: 25%;*/
}
.slick-slide {
  padding: 0 3px;
}
/* the carousell div */
.slick-list {
  /*padding: 0 !important;*/
  /*margin: 2px !important;*/
}

.skill-title {
  margin: 0;
}
.skill-text {
  width: 90%;
  padding: 5px;
}

.carousel-card {
  width: 100% !important;
  padding: 5px;
  background: #474747 !important;
  color: white !important;
}

/* Skillbox top
.skill-box {
  margin: 0;

  background: #474747;
  color: white;
  top: 0;
  width: 100%;
 
  border-radius: 15px 15px 0 0;
}
*/

.skill-box {
  margin: 0;
  position: absolute;
  background: #474747;
  color: white;
  bottom: 0;
  width: 100%;
  border-radius: 0 0 15px 15px;
}

.title-h2:after {
  background-color: white;
  content: "";
  position: absolute;
  bottom: 0.25em;
  left: 0;
  right: 0;
  height: 0.5em;
  border-top: 1px solid black;
  z-index: -1;
}

@media screen and (max-width: 959px) {
  .nav-menu {
    display: none;
  }
  .skill-box {
    display: none;
  }
}
</style>