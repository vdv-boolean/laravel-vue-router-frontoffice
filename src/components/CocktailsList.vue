<script>
import Details from './Details.vue';
import CocktailsCard from './CocktailsCard.vue';
import axios from "axios";

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
  <Details :id="arrCocktails[0].idDrink" />
  <h1 class="pt-5 text-center">Cocktails List</h1>
  <div class=" big_container mb-5 border-top">
    <CocktailsCard />
  </div>

  <!-- PAGINATOR -->
  <nav class="nav_bar">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click="currentPage--">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="page in nPages" :key="page" class="page-item" :class="{ active: page === currentPage }">
        <a class="page-link" href="#" @click="currentPage = page">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === nPages }">
        <a class="page-link" href="#" @click="currentPage++">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
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

