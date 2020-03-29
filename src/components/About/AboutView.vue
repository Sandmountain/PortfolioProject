<template>
  <div class="pa-5">
    <h2 class="title-h2">
      <span class="font-weight-black right">
        <span class="font-weight-thin">ABOUT</span>
        VIKTORSANDBERG.COM
      </span>
    </h2>
  </div>
</template>

<script>
//import AppBar from "../AppBar/AppBar";
export default {
  components: {
    //AppBar
  },
  data: () => ({
    length: 3,
    window: 0
  })
};
</script>

<style>
.title-h2 {
  z-index: 5 !important;
  position: relative;
}
.title-h2 .right {
  z-index: 5 !important;
  background-color: white;
  padding-right: 10px;
}
.title-h2 .left {
  background-color: white;
  padding-left: 10px;
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
