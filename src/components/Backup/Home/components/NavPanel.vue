<template>
  <v-container class="my-4">
    <v-sheet class="main-body-sheet mx-auto elevation-10" max-width="60%">
      <v-layout>
        <v-flex xs4>
          <v-col class="text-center">
            <v-icon x-large>mdi-briefcase-account-outline</v-icon>
            <p class="subtitle-3 font-weight-bold">Portfolio</p>
            <p
              class="caption font-weight-light slim-margin"
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores iusto illum quia.
            </p>
            <v-icon>mdi-chevron-down</v-icon>
          </v-col>
        </v-flex>
        <v-divider class="divider-line" inset vertical></v-divider>
        <v-flex xs4>
          <v-col class="text-center">
            <v-icon x-large>mdi-file-account-outline</v-icon>
            <p class="subtitle-3 font-weight-bold">About Me</p>
            <p
              class="caption font-weight-light slim-margin"
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores iusto illum quia.
            </p>
            <v-icon>mdi-chevron-down</v-icon>
          </v-col>
        </v-flex>
        <v-divider inset vertical></v-divider>
        <v-flex xs4>
          <v-col class="text-center">
            <v-icon x-large>mdi-contact-mail-outline</v-icon>
            <p class="subtitle-3 font-weight-bold">Contact Me</p>
            <p
              class="caption font-weight-light slim-margin"
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores iusto illum quia.
            </p>
            <v-icon>mdi-chevron-down</v-icon>
          </v-col>
        </v-flex>
      </v-layout>
    </v-sheet>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.slim-margin {
  padding-left: 25px;
  padding-right: 25px;
}
.main-body-sheet {
  margin-top: 25px;
  border-radius: 0;
}
.v-divider--vertical.v-divider--inset {
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>
