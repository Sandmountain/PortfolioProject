<template>
  <v-container>
    <v-sheet class="mainBodySheet elevation-6" style="max-width: 60%; margin-left: 20%">
      <v-layout wrap>
        <v-flex xs12 style="padding: 50px">
          <v-layout wrap>
            <v-flex xs12>
              <span class="headline font-weight-light">Hello! I am</span>
              <br />
              <p
                class="display-4 font-weight-black neu-text"
                style="line-height: 90%; margin-bottom: 70px"
              >
                VIKTOR
                <br />SANDBERG
              </p>
            </v-flex>
            <v-flex xs6>
              <span class="caption font-weight-medium">
                M.Sc student in Media Technology & Engineering with a large
                interest for UI/UX and Fullstack Development.
              </span>
            </v-flex>
            <v-flex xs6 align-self-center>
              <p align="center">
                <v-icon class="button-small" size="40">mdi-github-box</v-icon>
                <v-icon class="button-small" size="40">mdi-linkedin-box</v-icon>
                <v-icon class="button-small" size="40">mdi-facebook-box</v-icon>
                <v-icon class="button-small" size="40">mdi-gmail</v-icon>
              </p>
            </v-flex>
          </v-layout>
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
  border-radius: 0;
}

.first {
}
.second {
  box-sizing: border-box;
}

img {
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
</style>

<!--

<v-container>
   
      <v-layout>
        <v-flex
          xs4
          fill-height
          align-self-center
          class="first"
          style="padding-left: 15px; padding-top: 15px; padding-bottom: 15px;"
        >
          

         
          </span>
        </v-flex>
        <v-flex xs4 fill-height align-self-end class="second">
        
        </v-flex>
        <v-flex xs4 class="profilePictureBackground">
          
        </v-flex>
      </v-layout>
    </v-sheet>
  </v-container>
  -->