<script>
import AppNav from './components/AppNav.vue';
import CocktailsList from './components/CocktailsList.vue';
export default {
    components: {
        AppNav,
        CocktailsList,
    }
}

</script>

<template>
    <AppNav />
    <router-view></router-view>
</template>

<style lang=scss>
@import 'bootstrap/scss/bootstrap';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,500;1,400&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}
</style>
