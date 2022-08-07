<template>
  <v-card max-width="1000" class="elevation-0">
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
        <v-card
          :style="item.border"
          :elevation="item.elevation"
          :color="item.color"
          :class="item.zoom"
          class="ma-5"
          dark
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5" v-text="item.title"></v-card-title>
              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="deleteMethod(item)" text color="red">
              <v-icon>mdi-close</v-icon>
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
        elevation: 0,
        border: "border-radius:'0px'",
        zoom: "",
      },
      {
        id: 2,
        color: "#952679",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Vacations",
        artist: "Justin",
        elevation: 0,
        zoom: "",
        border: "border-radius:'0px'",
      },

      {
        id: 3,
        color: "#662456",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Holidays",
        artist: "Armaan",
        elevation: 0,
        zoom: "",
        border: "border-radius:'0px'",
      },
      {
        id: 4,
        color: "#952150",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Days",
        artist: "Ellie Goulding",
        elevation: 0,
        zoom: "",
        border: "border-radius:'0px'",
      },
    ],
  }),
  watch: {
    "$store.getters.get_card.search"(val) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].title == val) {
          this.items[i].elevation = 10;
          this.items[i].border = "border-radius:'10px'";
          this.items[i].zoom = "zoom-efect";
          setTimeout(() => {
            this.items[i].elevation = 0;
            this.items[i].border = "border-radius:'0px'";
            this.items[i].zoom = "";
          }, 3000);
        }
      }
    },
  },
  mounted() {
    console.log(" this.$store.getters.get_card)", this.$store.getters.get_card);
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].title == this.$store.getters.get_card.search) {
        this.items[i].elevation = 10;
        this.items[i].border = "border-radius:'10px'";
        this.items[i].zoom = "zoom-efect";
        setTimeout(() => {
          this.items[i].elevation = 0;
          this.items[i].border = "border-radius:'0px'";
          this.items[i].zoom = "";
        }, 3000);
      }
    }
  },
  methods: {
    deleteMethod(item) {
      console.log("tem", item);
      this.items = [...this.items].filter((val) => val.id != item.id);
    },
  },
};
</script>
<style>
.zoom-efect {
  transform: scale(1.1);
}
</style>