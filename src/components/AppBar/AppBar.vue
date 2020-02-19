<template>
  <v-row align="center" justify="center" no-gutters>
    <v-col md="12">
      <v-app-bar hide-on-scroll dense app color="transparent" flat>
        <v-row align="center" justify="space-between">
          <v-spacer></v-spacer>
          <div>
            <v-tabs slider-color="primary" background-color="transparent">
              <v-tab :href="`#tab-${1}`">Home</v-tab>
              <v-tab :href="`#tab-${2}`">Portfolio</v-tab>
              <v-tab :href="`#tab-${3}`">Resume</v-tab>
              <v-tab :href="`#tab-${4}`">Contact Me</v-tab>
            </v-tabs>
          </div>
          <v-spacer></v-spacer>
        </v-row>
      </v-app-bar>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
