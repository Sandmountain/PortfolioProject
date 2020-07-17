<template>
  <v-row>
    <span class="caption" style="padding: 12px; color: white">
      I AM
    </span>
    <img
      src="../../../assets/profilepicture/profile4.png"
      aspect-ratio="1"
      class="profile-picture"
    />

    <h1
      class="font-weight-black white--text"
      style="font-size: 2.2rem; line-height: 0.8; text-align: center; padding-top: 12px "
    >
      VIKTOR SANDBERG
    </h1>
    <p
      class="caption font-weight-medium  sub-text"
      style="text-align: center; color: rgba(0, 0, 0, 0.54)"
    >
      Creative developer with a big passion for Design and UX.
    </p>
    <div style="width: 100%;">
      <h2 class="social-media text-center">
        <v-btn icon small color="primary">
          <v-icon medium>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon small color="primary">
          <v-icon medium>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon small color="primary">
          <v-icon medium>mdi-github</v-icon>
        </v-btn>
      </h2>
    </div>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-picture {
  width: 50vw;
  z-index: 3;
}
</style>
