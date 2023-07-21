<script>
import Details from './Details.vue';

export default {
    name: "CocktailList",
    data() {
        return {
            arrCocktails: [],
            currentPage: this.nPages,
            nPages: 0,
        };
    },

    props: {
        cocktail: {
            type: Object,
            required: true,
        },
    },

    components: {
        Details,
    },

    watch: {
        currentPage() {
        },
    },
    created() {
    },
};
</script>

<template>
    <div class="card d-flex" style="width: 18rem;">
        <a href="#">
            <img :src="cocktail.image" class="card-img-top" :alt="cocktail.name">
            <div class="tag py-2 border-bottom">
                <a class="text-center"> tipologia di Cocktails</a>
            </div>
            <div class="card-body">
                <h3 class="card-title text-center text_font">{{ cocktail.name }}</h3>
                <p class="card-text"></p>
            </div>
        </a>
    </div>
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

    .tag {
        text-align: center;
        font-size: .8rem;
        background-color: #fbfbfb;
    }

    .text_font {
        font-size: 1rem;
        font-weight: 100;
    }


}
</style>