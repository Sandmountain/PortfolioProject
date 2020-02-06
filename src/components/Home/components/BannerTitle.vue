<template >
  <v-container fluid class="responsive-margin">
    <v-row align="center" justify="center" no-gutters>
      <v-col xs="6">
        <v-img
          class="ma-auto"
          height="300px"
          width="300px"
          src="../../../assets/profilepicture/profile2.png"
        />
      </v-col>
      <v-col xs="6">
        <span class="darkText title font-weight-thin">Hello, i'm</span>
        <p class="darkText responsivetext display-3 font-weight-black">VIKTOR SANDBERG</p>
        <p class="darkText caption font-weight-light">
          A M.Sc student in Media Technology & Engineering
          <br />with a large interest for UI/UX and Fullstack Development.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.mainBodySheet {
  border-radius: 0;
}

.darkText {
  color: black;
}

.avatarWithBorder {
  width: 100%;
}

.avatarWithBorder img {
  border-radius: 50%;
}
.avatarCenter {
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 662px) {
  .v-application .responsive-margin {
    margin-top: 70px;
  }
}

@media only screen and (max-width: 662px) {
  .v-application .responsivetext {
    font-size: 3.7rem !important;
    margin-top: -15px;
  }
}
@media only screen and (max-width: 651px) {
  .v-application .responsivetext {
    text-align: center;
    font-size: 3.7rem !important;
    margin-top: -15px;
    margin-bottom: 50px;
  }
}
@media only screen and (max-width: 630px) {
  .v-application .responsivetext {
    text-align: center;
    font-size: 3.5rem !important;
    margin-top: -15px;
  }
}
@media only screen and (max-width: 600px) {
  .v-application .responsivetext {
    font-size: 3rem !important;
    text-align: center;
    margin-top: -15px;
  }
}
@media only screen and (max-width: 550px) {
  .v-application .responsivetext {
    font-size: 2.8rem !important;
    text-align: center;
    margin-top: -15px;
  }
}
</style>

