<template>
  <v-app-bar elevate-on-scroll dense app dark color="transparent">
    <v-row>
      <v-col cols="12">
        <v-row align="right" justify="space-between">
          <v-spacer></v-spacer>

          <div>
            <v-tabs v-model="model" slider-color="red" background-color="transparent">
              <v-tab :href="`#tab-${1}`">Home</v-tab>
              <v-tab :href="`#tab-${2}`">Portfolio</v-tab>
              <v-tab :href="`#tab-${3}`">Resume</v-tab>
              <v-tab :href="`#tab-${4}`">Contact Me</v-tab>
            </v-tabs>
          </div>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
