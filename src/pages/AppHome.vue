<script>
import CocktailsCard from '../components/CocktailsCard.vue';

export default {
    components: {
        CocktailsCard,
    },
};
</script>


<template>
    <div class="jumbo">

    </div>

    <div class="container">

        <div class="title">
            <h1 class="p-title">Explore Booltail's collection</h1>
            <div>
                <router-link :to="{ name: 'cocktails' }" class="navbar-brand">Our Cocktails</router-link>

            </div>

        </div>


        <CocktailsCard v-for="cocktail in arrCocktails" :key="cocktail.id" :cocktail="cocktail"
            :nPages="this.currentPage" />

        <div class="about-us">
            <h2 class="p-title">Do you want to know more about us?</h2>
            <button class="btn-about">
                <router-link :to="{ name: 'about' }" class="navbar-brand">
                    About Us
                </router-link>
            </button>
        </div>

    </div>
</template>


<style scoped>
body {
    background-color: #F9F7F4;
}

.jumbo {

    height: 30rem;
    background-image: url('img/jumbo.jpg');
    background-position-y: center;
    background-size: cover;

}

.container {
    margin: auto;
    margin: 6rem auto;

}

.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title {
    margin-bottom: 6rem;
}

.about-us {
    text-align: right;
}

.btn-about {
    height: 3rem;
    padding-inline: 1rem;
    border-radius: 3rem;
    border: none;
    background-color: #1755A0;
    color: white;
    margin-right: 3rem;
}
</style>