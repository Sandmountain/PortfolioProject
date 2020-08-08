<template>
  <div class="text-center skill-box">
    <div class="hidden-md-and-down">
      <v-row justify="space-around" align="center" style="padding: 0">
        <v-col lg="3" md="4" sm="3" xs="12">
          <v-row justify="center" class="ma-2">
            <v-btn
              fab
              disabled
              depressed
              color="primary"
              style="cursor: auto"
              class="fab-gradient"
            >
              <v-icon medium class="white-icon">fa-gem</v-icon>
            </v-btn>
          </v-row>
          <v-row justify="center">
            <h3 class="font-weight-bold text-center ma-1">DESIGN</h3>
            <p class="caption text-center">
              Enim nisi irure sunt veniam.Ullamco proident dolor commodo eu
              dolor aute magna occaecat in nulla. Anim anim sit nostrud
              adipisicing cillum exercitation ipsum sint
            </p>
          </v-row>
        </v-col>
        <v-divider
          vertical
          class="hidden-sm-and-down divider-properties"
        ></v-divider>
        <v-col lg="3" md="4" sm="3" xs="12">
          <v-row justify="center" class="ma-2">
            <v-btn
              fab
              disabled
              depressed
              color="primary"
              style="cursor: auto"
              class="fab-gradient"
            >
              <v-icon class="white-icon">mdi-xml</v-icon>
            </v-btn>
          </v-row>
          <v-row justify="center">
            <h3 class="font-weight-bold text-center ma-1">PROGRAMMING</h3>
            <p class="caption text-center">
              Enim nisi irure sunt veniam.Ullamco proident dolor commodo eu
              dolor aute magna occaecat in nulla. Anim anim sit nostrud
              adipisicing cillum exercitation ipsum sint
            </p>
          </v-row>
        </v-col>
        <v-divider
          vertical
          class="hidden-sm-and-down divider-properties"
        ></v-divider>
        <v-col lg="3" md="4" sm="3" xs="12">
          <v-row justify="center">
            <v-btn
              fab
              disabled
              depressed
              color="primary"
              style="cursor: auto"
              class="fab-gradient"
            >
              <v-icon class="white-icon">mdi-lightbulb-on-outline</v-icon>
            </v-btn>
          </v-row>
          <v-row justify="center">
            <h3 class="font-weight-bold text-center ma-1">CREATIVITY</h3>
            <p class="caption text-center">
              Enim nisi irure sunt veniam.Ullamco proident dolor commodo eu
              dolor aute magna occaecat in nulla. Anim anim sit nostrud
              adipisicing cillum exercitation ipsum sint
            </p>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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

.skill-box {
  margin: 0;
  /*position: absolute;*/
  background: #474747;
  color: white;
  /*bottom: 0;*/
  width: 100%;
  border-radius: 0 0 15px 15px;
}

.skill-title {
  margin: 0;
}
.skill-text {
  width: 90%;
  padding: 5px;
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

@media screen and (max-width: 959px) {
  .nav-menu {
    display: none;
  }
  .skill-box {
    display: none;
  }
}
</style>
