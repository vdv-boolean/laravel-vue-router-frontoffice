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

        <h1 class="p-title">Explore Booltail's collection</h1>

        <CocktailsCard />

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


<style>
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

.p-title {
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