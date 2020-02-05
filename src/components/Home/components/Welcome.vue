<template >
  <v-container fluid style="margin-top: 50px">
    <v-row class="mb-6" align="center" justify="center" no-gutters>
      <v-col sm="5">
        <v-img
          class="ma-auto centered"
          height="300px"
          width="300px"
          src="../../../assets/profilepicture/profile2.png"
        />
      </v-col>
      <v-col sm="7">
        <span class="darkText title font-weight-thin">Hello, i'm</span>
        <p class="darkText display-3 font-weight-black">VIKTOR SANDBERG</p>
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