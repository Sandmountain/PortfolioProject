<template>
  <v-app-bar hide-on-scroll dense app color="secondary" dark>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="space-between">
          <div></div>
          <div>
            <v-tabs
              v-model="model"
              centered
              slider-color="white"
              background-color="transparent"
            >
              <v-tab :href="`#tab-${1}`">
                Home
              </v-tab>
              <v-tab :href="`#tab-${2}`">
                Portfolio
              </v-tab>
              <v-tab :href="`#tab-${3}`">
                Resume
              </v-tab>
              <v-tab :href="`#tab-${4}`">
                Contact Me
              </v-tab>
            </v-tabs>
          </div>
          <div></div>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
