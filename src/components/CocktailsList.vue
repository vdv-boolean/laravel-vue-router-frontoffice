<script>
import Details from './Details.vue';
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
  components:{
    Details,
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
  <Details :id="arrCocktails[0].idDrink"/>
  <h2>Cocktails List</h2>
  <div class="cardContainer row row-cols-4 mb-5">
    <!--  <div
      class="card"
      style="width: 18rem"
      v-for="cocktail in arrCocktails"
      :key="cocktail.id"
    >
      <img :src="cocktail.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ cocktail.name }}</h5>
        <p class="card-text">
          {{ cocktail.recipe }}
        </p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->
    <div
      class="col position-relative"
      v-for="cocktail in arrCocktails"
      :key="cocktail.id"
    >
      <img :src="cocktail.image" class="card-img-top" alt="..." />
      <p class="cc-name position-absolute z-1">{{ cocktail.name }}</p>
    </div>
  </div>

  <!-- PAGINATOR -->
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click="currentPage--">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in nPages"
        :key="page"
        class="page-item"
        :class="{ active: page === currentPage }"
      >
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
.col {
  padding: 0;
}
.cc-name {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding-inline: 10px;
  text-align: center;
  /*background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  );*/
  //rendere il testo non cliccabile
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>