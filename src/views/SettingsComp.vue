<template>
  <v-card>
    <v-card-title class="grey--text">Switch to Dark Mode </v-card-title>
    <v-switch v-model="switch1" label="Switch"></v-switch>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    switch1: false,
  }),
  watch: {
    switch1() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>