<template>
  <v-container style="margin-top: -100px">
    <v-row justify="center">
      <v-col md="8">
        <div>
          <h2 class="title-h2">
            <span class="font-weight-black right">
              <span class="font-weight-thin">ABOUT</span>
              VIKTORSANDBERG.COM
            </span>
          </h2>

          <div class="pa-5">
            <p>
              My name is Viktor Sandberg, a student in Media Technology &
              Engineering studying at the university of Linköping. I am
              <i>very</i>
              intrested in
              web development and
              UX, and therefore I'm proud to
              present to you my very own portfolio homepage.
              The purpose of this page is of course a way for me to show
              you my previous work and projects, but also a way for me to
              get even more practice of doing what that I love.
              <b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, provident? Ipsum repellat error deserunt quidem, reprehenderit optio deleniti veritatis excepturi itaque dolores quis voluptate sed ipsa explicabo quisquam porro beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, unde blanditiis expedita magni tenetur enim maxime, natus, quibusdam eaque aperiam perferendis iusto nobis doloremque ut id numquam facilis cum distinctio.</b>
              <br />
              <br />If you press
              <a>here</a> you will be scrolled down to my portfolio showcase part of the page, to see more about the other projects that I've done both in school and on my sparetime.
            </p>
          </div>
          <h2 class="title-h2 text-right">
            <span class="font-weight-black left">
              <v-btn icon large color="primary">
                <v-icon medium>mdi-linkedin-box</v-icon>
              </v-btn>
              <v-btn icon large color="primary">
                <v-icon medium>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon large color="primary">
                <v-icon medium>mdi-github-circle</v-icon>
              </v-btn>
              <v-btn icon color="primary">
                <v-icon medium>mdi-gmail</v-icon>
              </v-btn>
            </span>
          </h2>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/*
 <Welcome />
  
    <NavPanel style=" height: 2000px" />
    <div class="positioned">
      <img style="min-width:102%; top: -20px" src="../../assets/svg/mountaintestCropped.svg" />
    </div>

*/

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.no-shadow {
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

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
</style>
