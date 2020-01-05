<template>
  <v-container grid-list-md text-xs-center>
    <v-sheet class="mainBodySheet mx-auto elevation-10" width="90%">
      <v-layout row wrap>
        <v-flex sm4>
          <span>
            <span class="font-weight-light">
              Hello! I am
            </span>
            <br />
            <p
              class="display-3 font-weight-black"
              style="line-height: 90%; margin-bottom: 70px"
            >
              Viktor <br />
              Sandberg
            </p>
            <p class="caption font-weight-medium">
              M.Sc student in Media Technology & Engineering with a large
              interest for UI/UX and Fullstack Development.
            </p>
          </span>
        </v-flex>
        <v-flex sm4>
          <v-card class="testBG ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              tempore natus facere quam reprehenderit quo et incidunt enim iure
              laborum exercitationem ullam officiis facilis nemo nesciunt,
              aspernatur corrupti minus quae!
            </p>
          </v-card>
        </v-flex>
        <v-flex sm4>
          <v-card class="testBG ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              tempore natus facere quam reprehenderit quo et incidunt enim iure
              laborum exercitationem ullam officiis facilis nemo nesciunt,
              aspernatur corrupti minus quae!
            </p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-sheet>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.mainBodySheet {
  margin-top: 25px;
  padding: 15px;
  border-radius: 0;
}
.testBG {
  background-color: red !important;
}
</style>
