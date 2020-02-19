<template>
  <div>
    <v-parallax dark src="../assets/photos/banner_mid_large.png">
      <BannerTitle />
    </v-parallax>
    <div class="positioned-mountain-1">
      <img style="min-width:102%;" src="../assets/svg/mountaintestCropped.svg" />
      <Home />
    </div>
    <div class="positioned-mountain-down-2">
      <img src="../assets/svg/mountaintestCropped3_thin_down.svg" class="svg-shadow" />
    </div>
    <!--<div style="z-index: 1" class="fadedBackground"></div>-->
    <v-parallax src="../assets/photos/bild5_test.png">
      <TitlePanel title="Portfolio" text="Showcase of my work" />
    </v-parallax>
    <div class="positioned-triangle-up-inverted">
      <img style=" " src="../assets/svg/mountaintestCropped2_thin.svg" />
    </div>
    <Portfolio style="z-index: 10; position: relative;" />
    <div class="positioned-mountain-down-1">
      <img src="../assets/svg/mountaintestCropped_transparent_down.svg" />
    </div>
    <v-parallax src="../assets/photos/viktor_banner_test2.png">
      <TitlePanel title="Resume" text="A summary of my cv" />
    </v-parallax>
    <div class="positioned-triangle-up-inverted">
      <img style=" " src="../assets/svg/mountaintestCropped2_thin.svg" />
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

/* 1 is for mountain-1.svg */
.positioned-mountain-down-1 {
  position: relative;
  z-index: 1;
}
.positioned-mountain-down-1 img {
  margin-top: -110px;
  transform: translateX(-1px);
  position: absolute;
  width: 102%;
}

/* 2 is for mountain-2.svg */
.positioned-mountain-down-2 {
  position: relative;
  z-index: 10;
}
.positioned-mountain-down-2 img {
  transform: translateX(-1px);
  position: absolute;
  width: 102%;
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
  /*
  -webkit-filter: drop-shadow(6px 2px 2px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0px 6px 2px rgba(0, 0, 0, 0.2));
  */
  /* Similar syntax to box-shadow */
}
</style>
