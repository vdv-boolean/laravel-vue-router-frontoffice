<script>
import Details from './Details.vue';
import axios from "axios";

export default {
    name: "CocktailList",
    data() {
        return {
            arrCocktails: [],
            currentPage: 1,
            nPages: 0,
        };
    },
    components: {
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
    <div class="card d-flex" style="width: 18rem;" v-for="cocktail in arrCocktails" :key="cocktail.id">
        <a href="#">
            <img :src="cocktail.image" class="card-img-top" :alt="cocktail.name">
            <div class="card-body">
                <h3 class="card-title text-center text_font">{{ cocktail.name }}</h3>
                <p class="card-text"></p>
            </div>
        </a>
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
a {
    text-decoration: none;
    color: black;
}

.card {
    flex: 0 0 calc((100% - 8rem) / 5);
    border-color: whitesmoke;
    box-shadow: 0px 0px 20px #dedede;

    &:hover {
        cursor: pointer;
        background-color: rgb(236, 235, 235);
        border-color: rgb(225, 225, 225);
    }

    .text_font {
        font-size: 1rem;
        font-weight: 100;
    }
}
</style>