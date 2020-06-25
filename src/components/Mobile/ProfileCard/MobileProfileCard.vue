<template>
  <div>
    <v-img
      src="../../../assets/photos/banner.jpg"
      :aspect-ratio="1.8"
      class="cover-photo"
    ></v-img>

    <v-img
      src="../../../assets/profilepicture/profile4.png"
      aspect-ratio="1"
      class="profile-picture"
    ></v-img>

    <v-container fluid class="title-box">
      <p
        class=" overline font-weight-light sub-text text-center"
        style="margin: 0;"
      >
        Hello! I am
      </p>
      <p
        class="display-1 font-weight-black"
        style="line-height: 90%; margin: 0; text-align: center;"
      >
        VIKTOR SANDBERG
      </p>
      <p
        class="caption font-weight-medium primary--text sub-text"
        style="text-align: center;"
      >
        M.Sc student with a large interest for Web Development.
      </p>
      <p style="text-align: center">
        <v-icon small>mdi-map-marker</v-icon>
        <span class="caption font-weight-regular">Norrköping, Sweden</span>
      </p>
    </v-container>
    <!---
    <v-row
      style=" bottom: 0; position: absolute; width: 100%;"
      justify="center"
      align="center"
    >
      <v-btn
        color="primary"
        @click="
          openNewTab(
            'https://drive.google.com/file/d/1NftM13B1b3HAiAxELcQqtvfImhal41iB/view?usp=sharing'
          )
        "
        text
        style="width:50%; height: 48px"
        >View resume</v-btn
      >
      <v-btn
        color="primary"
        @click="sendMail()"
        text
        style="width:50%; height: 48px"
        >Contact me</v-btn
      >
    </v-row>
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: '<>',
      stop: '</>',
      items: [
        { title: 'Home', icon: 'mdi-home' },
        { title: 'Portfolio', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' }
      ],
      right: null
    };
  },
  methods: {
    openNewTab(url) {
      window.open(url, '_blank');
    },
    sendMail() {
      window.open('mailto:sandtain@gmail.com');
    }
  },
  mounted() {
    console.log(this.$vuetify.theme);
  }
};
</script>

<style scoped>
.profile-picture {
  position: relative;
  top: -150px;
  margin: 0 auto;
  width: 60%;
}
.cover-photo {
  clip-path: circle(73% at 50% 0);
  border-radius: 15px 15px 0 0;
}

.title-box {
  margin-top: -150px;
}

@media screen and (max-width: 600px) {
  .profile-picture {
    top: -24vw;
    width: 50%;
  }
  .title-box {
    margin-top: -20vw;
  }
  .social-media {
    display: none;
  }
  .cover-photo {
    height: 190px;
    clip-path: circle(73% at 50% 0);
  }
}
</style>
