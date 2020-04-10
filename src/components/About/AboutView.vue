<template>
  <v-row style="height: inherit" justify="center" align="end">
    <v-col md="12" style="text-align: center; min-width: 100%">
      <span class="caption font-weight-light" style="margin: 0">Hello! I am</span>
      <p class="display-2 font-weight-black neu-text" style="line-height: 90%; margin: 0 ">
        VIKTOR
        SANDBERG
      </p>
      <p
        class="caption font-weight-medium primary--text"
      >M.Sc student with a large interest for UI/UX and Web Development.</p>
    </v-col>
    <v-col md="10" class="middle-paragraph">
      <p style="font-size: 10pt;">
        My name is Viktor Sandberg, a student in Media Technology &
        Engineering studying at the university of Linköping. I am
        <i>very</i>
        intrested in
        web development and
        UX, and therefore I'm proud to
        present to you my very own portfolio homepage.
        The purpose of this page is of course a way for me to show
        you my previous work and projects, but also a way for me to
        get even more practice of doing what that I love. To see all my project, click the button below.
      </p>
      <v-btn outlined color="primary" small tile="true">Show Portfolio</v-btn>
    </v-col>
    <v-col md="12" style="padding-top: 0;
    padding-bottom: 0;
    margin-bottom: -1px;">
      <SkillBox class="hidden-md-and-up" />
    </v-col>
    <v-col md="12" class="hidden-md-and-up">
      <MobileSkillBox />
    </v-col>
  </v-row>

  <!--- mobile --->
</template>

<script>
//import AppBar from "../AppBar/AppBar";
import SkillGenerator from "./SkillGenerator";
import MobileSkillBox from "./MobileSkillBox";
import SkillBox from "./SkillBox";

export default {
  components: {
    //AppBar
    MobileSkillBox,
    SkillBox
  }
};
</script>




<style>
/* Needed in global scope to have padding between slides in the carousel */
.slick-slide {
  padding: 0 3px;
}
.middle-paragraph {
  text-align: center;
  min-width: 60%;
}
@media screen and (max-width: 959px) {
  .middle-paragraph {
    min-width: 100%;
    padding: 0 50px 0 50px;
  }
}
</style>

<!--
<v-col xs="6">
      <span class="darkText title font-weight-thin">Hello, i'm</span>
      <p class="darkText responsivetext display-3 font-weight-black">
        VIKTOR SANDBERG
      </p>
      <p class="darkText caption font-weight-light">
        A M.Sc student in Media Technology & Engineering
        <br />with a large interest for UI/UX and Fullstack Development.
      </p>
    </v-col>

  <div class="pa-5">
    <AppBar />
    <h2 class="title-h2">
      <span class="font-weight-black right">
        <span class="font-weight-thin">ABOUT</span>
        VIKTORSANDBERG.COM
      </span>
    </h2>
  </div>
    -->
