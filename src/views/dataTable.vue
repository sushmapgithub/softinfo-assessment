<template>
  <div>
    <v-row no-gutters>
      <v-spacer />
      <v-col cols="12" md="4">
        <v-text-field dense label="Search" v-model="search" outlined>
        </v-text-field>
      </v-col>
    </v-row>

    <v-data-table
      :search="search"
      :loading="loading"
      :fixed-header="fixHeader"
      dense
      :headers="headers"
      :items="get_Table"
      class="dtwidth elevation-2"
    >
    </v-data-table>
  </div>
</template>
<script>
const axios = require("axios").default;

export default {
  data: () => ({
    search: "",
    loading: false,
    headers: [
      { text: "API", value: "API" },
      { text: "Auth", value: "Auth" },
      { text: "Category", value: "Category" },
      { text: "Cors", value: "Cors" },
      { text: "Description", value: "Description" },
      { text: "HTTPS", value: "HTTPS" },
      { text: "Link", value: "Link" },
    ],
    get_Table: [],
    fixHeader: true,
  }),
  mounted() {
    this.getmethod();
  },
  methods: {
    async getmethod() {
      axios.get("https://api.publicapis.org/entries").then((res) => {
        this.loading = true;
        this.get_Table = res.data.entries;
        console.log("res", this.get_Table);
        this.loading = false;
      });
      this.loading = false;
    },
  },
};
</script>
<style scoped>
.dtwidth {
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>
