<template>
  <div>
    <v-img
      src="../../assets/photos/banner.jpg"
      :aspect-ratio="1.8"
      class="cover-photo"
    ></v-img>

    <v-img
      src="../../assets/profilepicture/profile4.png"
      aspect-ratio="1"
      class="profile-picture"
    ></v-img>

    <v-container fluid class="title-box">
      <span class="font-weight-light headline">Viktor </span>

      <span class="font-weight-regular headline">Sandberg</span>

      <p class="font-weight-bold subtitle-2 primary--text">
        Full Stack Web Developer
      </p>
      <v-icon small>mdi-map-marker</v-icon>
      <span class="caption font-weight-regular text-left"
        >Stockholm, Sweden</span
      >
      <v-col style="height: 100%; padding-top: 12.5%">
        <div style="width: 100%;">
          <h2 class="social-media text-center">
            <v-btn
              icon
              small
              color="gray"
              @click="
                openNewTab(
                  'https://www.linkedin.com/in/viktor-sandberg-215a2313a/'
                )
              "
            >
              <v-icon medium>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn
              icon
              small
              color="gray"
              @click="openNewTab('https://www.facebook.com/Sandtain')"
            >
              <v-icon medium>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              small
              color="gray"
              @click="openNewTab('https://github.com/sandmountain')"
            >
              <v-icon medium>mdi-github</v-icon>
            </v-btn>
          </h2>
        </div>
      </v-col>
      <v-row
        style=" bottom: 0; position: absolute; width: 100%;"
        justify="center"
        align="center"
      >
        <v-btn
          color="primary"
          text
          style="width:50%; height: 48px"
          @click="
            openNewTab(
              'https://drive.google.com/file/d/1NftM13B1b3HAiAxELcQqtvfImhal41iB/view?usp=sharing'
            )
          "
          >View resume</v-btn
        >
        <v-btn
          color="primary"
          text
          style="width:50%; height: 48px"
          @click="sendMail()"
          >Contact me</v-btn
        >
      </v-row>
    </v-container>
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
  text-align: center;
  margin-top: -150px;
}
@media screen and (max-width: 1904px) {
  .profile-picture {
    top: -130px;
  }
  .title-box {
    margin-top: -130px;
  }
}
@media screen and (max-width: 1650px) {
  .profile-picture {
    top: -100px;
  }

  .title-box {
    margin-top: -60px;
  }
}
@media screen and (max-width: 959px) {
  .profile-picture {
    top: -20vw;
    width: 40%;
  }
  .title-box {
    margin-top: -20vw;
  }
  .social-media {
    display: none;
  }
  .cover-photo {
    height: 200px;

    clip-path: polygon(50% 0%, 100% 0, 100% 80%, 50% 100%, 0 80%, 0 0);
  }
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
