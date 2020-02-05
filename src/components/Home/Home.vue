<template>
  <div>
    <v-parallax dark src="../../assets/photos/banner_mid_large.png">
      <Welcome />
    </v-parallax>

    <div class="positioned-mountain-1">
      <img style="min-width:102%;" src="../../assets/svg/mountaintestCropped.svg" />
      <div>
        <p class="pa-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex ut nobis minima unde aspernatur nihil nemo tempora sapiente deserunt. Veritatis labore nobis omnis molestias quibusdam sed minima doloremque officiis.
          Voluptate deserunt irure exercitation eu consequat sunt ut in consectetur esse. Excepteur sunt reprehenderit nostrud anim do ad. Aliqua ad irure minim ea minim. Elit ut veniam ut anim in officia. Pariatur ad consequat aliquip enim cillum ea velit esse eiusmod aliqua.
          Dolore esse incididunt voluptate laboris pariatur velit.
        </p>
      </div>
      <NavPanel />
    </div>
    <div class="positioned-triangle-down">
      <img src="../../assets/svg/triangle_down.svg" />
    </div>
    <!--<div style="z-index: 1" class="fadedBackground"></div>-->

    <v-parallax src="../../assets/photos/bild5_test.png">
      <TitlePanel />
    </v-parallax>
    <div class="positioned-triangle-up-inverted">
      <img style=" " src="../../assets/svg/triangle_inverted.svg" />
    </div>
    <Portfolio />
    <div class="positioned-triangle-down">
      <img src="../../assets/svg/triangle_down.svg" />
    </div>
    <v-parallax src="../../assets/photos/viktor_banner_test2.png">
      <TitlePanel />
    </v-parallax>
    <div class="positioned-triangle-up-inverted">
      <img style=" " src="../../assets/svg/triangle_inverted.svg" />
    </div>
    <Portfolio />
  </div>
</template>


<script>
/*
 <Welcome />
  
    <NavPanel style=" height: 2000px" />
    <div class="positioned">
      <img style="min-width:102%; top: -20px" src="../../assets/svg/mountaintestCropped.svg" />
    </div>

*/
import Welcome from "./components/Welcome.vue";
import NavPanel from "./components/NavPanel.vue";
import TitlePanel from "./components/TitlePanel.vue";
import Portfolio from "../Portfolio/Portfolio.vue";

export default {
  name: "Home",
  components: {
    Welcome,
    NavPanel,
    TitlePanel,
    Portfolio
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
  margin-top: 140px;
  z-index: 10;
}
.positioned-triangle-down img {
  position: absolute;
  min-width: 100%;
}
.positioned-triangle-up-inverted {
  z-index: 10;
  margin-top: -5.65%;
}
.positioned-triangle-up-inverted img {
  min-width: 102%;
  transform: translateX(-1%);
}

.positioned-mountain-1 {
  z-index: 10;
  margin-top: -100px;
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
</style>
