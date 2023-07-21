<script>
import Details from './Details.vue';
import CocktailsCard from './CocktailsCard.vue';
// import axios from "axios";

export default {
  name: "ProjectList",
  data() {
    return {
      arrCocktails: [],
      currentPage: 1,
      nPages: 0,
    };
  },
  components: {
    Details,
    CocktailsCard
  },
  methods: {
    // getCocktails() {
    //   axios
    //     .get("http://127.0.0.1:8000/api/cocktails", {
    //       params: {
    //         page: this.currentPage,
    //       },
    //     }) // api link
    //     .then((response) => {
    //       this.arrCocktails = response.data.data;
    //       this.nPages = response.data.last_page;
    //     });
    // },
  },
  watch: {
    currentPage() {
      // this.getCocktails();
    },
  },
  created() {
    // this.getCocktails();
  },
};
</script>

<template>
  <h1 class="pt-5 text-center">Cocktails List</h1>
  <div class=" big_container mb-5 border-top">
    <CocktailsCard />
  </div>
</template>

<style lang="scss" scoped>
.big_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-inline: auto;
  padding-top: 5rem;
  max-width: 1000px;
  gap: 1rem;
}

.card_Container {
  width: calc(100%/5);
}

.nav_bar {
  display: flex;
  justify-content: center;

  a {
    color: rgb(180, 180, 180);
  }
}
</style>

