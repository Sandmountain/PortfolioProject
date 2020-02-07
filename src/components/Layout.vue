<template>
  <div>
    <v-parallax dark src="../assets/photos/banner_mid_large.png">
      <BannerTitle />
    </v-parallax>
    <div class="positioned-mountain-1">
      <img
        style="min-width:102%;"
        src="../assets/svg/mountaintestCropped.svg"
      />
      <Home />
      <NavPanel />
    </div>
    <div class="positioned-triangle-down">
      <img src="../assets/svg/triangle_down.svg" class="svg-shadow" />
    </div>
    <!--<div style="z-index: 1" class="fadedBackground"></div>-->
    <v-parallax src="../assets/photos/bild5_test.png">
      <TitlePanel title="Portfolio" text="Showcase of my work" />
    </v-parallax>
    <div class="positioned-triangle-up-inverted">
      <img style=" " src="../assets/svg/triangle_inverted.svg" />
    </div>
    <Portfolio />
    <div class="positioned-triangle-down">
      <img src="../assets/svg/triangle_down.svg" />
    </div>
    <v-parallax src="../assets/photos/viktor_banner_test2.png">
      <TitlePanel title="Resume" text="A summary of my cv" />
    </v-parallax>
    <div class="positioned-triangle-up-inverted">
      <img style=" " src="../assets/svg/triangle_inverted.svg" />
    </div>
    <Home />
  </div>
</template>

<script>
import TitlePanel from "./TitlePanel/TitlePanel.vue";
import Portfolio from "./Portfolio/Portfolio.vue";
import Home from "./Home/Home";
import BannerTitle from "./Home/components/BannerTitle";

export default {
  components: {
    TitlePanel,
    Portfolio,
    Home,
    BannerTitle
  }
};
</script>

<style>
.fadedBackground {
  position: relative;
  z-index: 5;
  -webkit-box-shadow: 2px 20px 26px 9px rgba(255, 255, 255, 1);
  -moz-box-shadow: 2px 20px 26px 9px rgba(255, 255, 255, 1);
  box-shadow: 2px 5px 20px 25px rgba(255, 255, 255, 1);
}

.whiteBG {
  margin-top: -5%;
  padding-top: 5%;
  background-color: white;
}
.positioned-triangle-down {
  position: relative;
  z-index: 10;
}
.positioned-triangle-down img {
  position: absolute;
  min-width: 100%;
}
.positioned-triangle-up-inverted {
  z-index: 10;
  /*margin-top: -5.65%;*/
  margin-top: -5.65%;
}
.positioned-triangle-up-inverted img {
  min-width: 102%;
  transform: translateX(-1%);
}

.positioned-mountain-1 {
  z-index: 10;
  margin-top: -90px;
  position: relative;
}
.positioned-mountain-1 img {
  min-height: 110px;
}
.positioned-mountain-2 {
  z-index: 10;
  margin-left: -5px;
  margin-top: -185px;
  position: relative;
}

.mountainPosition {
  width: 100%;
  height: 550px;
}
.cropping {
  position: absolute;
  overflow: hidden;
}
.cropping .mountainPosition {
  max-width: initial;
}

.svg-shadow {
  -webkit-filter: drop-shadow(5px 2px 10px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0px 12px 7px rgba(0, 0, 0, 0.2));
  /* Similar syntax to box-shadow */
}
</style>
