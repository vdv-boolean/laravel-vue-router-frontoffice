<script>
import Details from './Details.vue';
import CocktailsCard from './CocktailsCard.vue';
import { store } from "../pages/store";
import axios from "axios";

export default {
  name: "CocktailList",
  data() {
    return {
      store,
      arrCocktails: [],
      currentPage: 1,
      nPages: 0,
      store,
    };
  },
  props: {
    showOnly5: Boolean,
  },
  components: {
    Details,
    CocktailsCard,
  },
  methods: {
    getCocktails() {
      axios
        .get("http://127.0.0.1:8000/api/cocktails", {
          params: {
            page: this.currentPage,
          },
        }) // api link
        .then((response) => {
          this.arrCocktails = response.data.data;
          this.nPages = response.data.last_page;
        });
    },
  },
  computed: {
    getSlicedCocktails() {
      if (this.showOnly5 == true) {
        return this.arrCocktails.slice(0, 5)
      } else {
        return this.arrCocktails
      }

    }
  },
  watch: {
    currentPage() {
      this.getCocktails();
    },
  },
  created() {
    this.getCocktails();

  },
};

</script>


<template>

    <CocktailsCard v-for="cocktail in getSlicedCocktails" :key="cocktail.id" :cocktail="cocktail"
      :nPages="this.currentPage" />

  
</template>

<style lang="scss" scoped>

</style>

