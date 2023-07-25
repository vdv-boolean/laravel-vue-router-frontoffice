<script>
import CocktailsList from '../components/CocktailsList.vue';

export default {
    components: {
        CocktailsList,
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

        <div class="big_container">
            <CocktailsList :showOnly5="true" />
        </div>

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

.big_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-inline: auto;
    padding-top: 5rem;
    padding-bottom: 5rem;
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

.big_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-inline: auto;
    padding-top: 5rem;
    max-width: 1000px;
    gap: 1rem;
}
</style>