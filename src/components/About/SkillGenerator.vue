<template>
  <v-row>
    <v-col style="padding: 0; margin: 0">
      <span class="caption">{{ skill.toUpperCase() }}</span>
    </v-col>
    <v-col style="padding: 0; margin: 0">
      <span v-for="n in 10" :key="n">
        <span v-if="n <= stars">
          <v-icon x-small color="primary" class="half"
            >mdi-checkbox-blank-circle</v-icon
          >
        </span>
        <span v-else>
          <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        </span>
      </span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['skill', 'stars']
};
</script>

<style scoped>
.shadow-icons {
  /*box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.75);*/
}
</style>
